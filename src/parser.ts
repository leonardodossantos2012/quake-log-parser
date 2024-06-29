import fs from 'fs';
import { KillEntry, MatchData } from './types';

export class LogParser {
  private logData: string;

  constructor(logFilePath: string) {
    this.logData = fs.readFileSync(logFilePath, 'utf-8');
  }

  parseLog(): MatchData {
    const lines = this.logData.split('\n');
    const matchData: MatchData = {
      totalKills: 0,
      players: [],
      kills: {},
      killsByMeans: {}
    };

    lines.forEach(line => {
      if (line.includes('Kill')) {
        this.parseKillEntry(line, matchData);
      }
    });

    return matchData;
  }

  private parseKillEntry(line: string, matchData: MatchData) {
    const killRegex = /(\d+:\d+) Kill: \d+ \d+ \d+: (.+) killed (.+) by (.+)/;
    const match = killRegex.exec(line);
    if (match) {
      const [, , killer, victim, meansOfDeath] = match;

      matchData.totalKills += 1;

      if (!matchData.players.includes(victim)) {
        matchData.players.push(victim);
        matchData.kills[victim] = 0;
      }

      if (killer !== '<world>') {
        if (!matchData.players.includes(killer)) {
          matchData.players.push(killer);
          matchData.kills[killer] = 0;
        }
        matchData.kills[killer] += 1;
      } else {
        matchData.kills[victim] -= 1;
      }

      if (!matchData.killsByMeans[meansOfDeath]) {
        matchData.killsByMeans[meansOfDeath] = 0;
      }
      matchData.killsByMeans[meansOfDeath] += 1;
    }
  }
}
