export interface KillEntry {
    time: string;
    killer: string;
    victim: string;
    meansOfDeath: string;
  }
  
  export interface MatchData {
    totalKills: number;
    players: string[];
    kills: Record<string, number>;
    killsByMeans: Record<string, number>;
  }
  