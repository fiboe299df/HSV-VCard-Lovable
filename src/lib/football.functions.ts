import { createServerFn } from "@tanstack/react-start";

export const HSV_TEAM_ID = 100;

export type TableRow = {
  rank: number;
  teamId: number;
  name: string;
  shortName: string;
  icon: string;
  matches: number;
  goalDiff: number;
  points: number;
};

export type Match = {
  id: number;
  kickoff: string;
  matchday: string;
  isHome: boolean;
  finished: boolean;
  home: { name: string; icon: string };
  away: { name: string; icon: string };
  score: string | null;
};

export type FootballData = {
  season: number;
  table: TableRow[];
  upcoming: Match[];
  recent: Match[];
  fetchedAt: string;
  ok: boolean;
};

type ApiTeam = { teamId: number; teamName: string; shortName: string; teamIconUrl: string };
type ApiMatch = {
  matchID: number;
  matchDateTimeUTC: string;
  matchIsFinished: boolean;
  team1: ApiTeam;
  team2: ApiTeam;
  group: { groupName: string };
  matchResults: { resultTypeID: number; pointsTeam1: number; pointsTeam2: number }[];
};
type ApiTableRow = {
  teamInfoId: number;
  teamName: string;
  shortName: string;
  teamIconUrl: string;
  matches: number;
  goalDiff: number;
  points: number;
};

/** Bundesliga seasons start in July; OpenLigaDB names a season by its starting year. */
export function currentSeason(now = new Date()) {
  return now.getUTCMonth() >= 6 ? now.getUTCFullYear() : now.getUTCFullYear() - 1;
}

function toMatch(m: ApiMatch): Match {
  const final = m.matchResults.find((r) => r.resultTypeID === 2) ?? m.matchResults.at(-1);
  return {
    id: m.matchID,
    kickoff: m.matchDateTimeUTC,
    matchday: m.group?.groupName ?? "",
    isHome: m.team1.teamId === HSV_TEAM_ID,
    finished: m.matchIsFinished,
    home: { name: m.team1.teamName, icon: m.team1.teamIconUrl },
    away: { name: m.team2.teamName, icon: m.team2.teamIconUrl },
    score: m.matchIsFinished && final ? `${final.pointsTeam1}:${final.pointsTeam2}` : null,
  };
}

/** Public, read-only: live Bundesliga table and HSV fixtures from OpenLigaDB. */
export const getFootballData = createServerFn({ method: "GET" }).handler(async (): Promise<FootballData> => {
  const season = currentSeason();
  const base = "https://api.openligadb.de";
  try {
    const [tableRes, matchesRes] = await Promise.all([
      fetch(`${base}/getbltable/bl1/${season}`),
      fetch(`${base}/getmatchdata/bl1/${season}`),
    ]);
    if (!tableRes.ok || !matchesRes.ok) throw new Error("OpenLigaDB nicht erreichbar");
    const rawTable = (await tableRes.json()) as ApiTableRow[];
    const rawMatches = (await matchesRes.json()) as ApiMatch[];

    const table: TableRow[] = rawTable.map((t, i) => ({
      rank: i + 1,
      teamId: t.teamInfoId,
      name: t.teamName,
      shortName: t.shortName,
      icon: t.teamIconUrl,
      matches: t.matches,
      goalDiff: t.goalDiff,
      points: t.points,
    }));
    const hsv = rawMatches
      .filter((m) => m.team1.teamId === HSV_TEAM_ID || m.team2.teamId === HSV_TEAM_ID)
      .map(toMatch)
      .sort((a, b) => a.kickoff.localeCompare(b.kickoff));

    return {
      season,
      table,
      upcoming: hsv.filter((m) => !m.finished).slice(0, 3),
      recent: hsv.filter((m) => m.finished).slice(-3).reverse(),
      fetchedAt: new Date().toISOString(),
      ok: true,
    };
  } catch (error) {
    console.error("football data", error);
    return { season, table: [], upcoming: [], recent: [], fetchedAt: new Date().toISOString(), ok: false };
  }
});
