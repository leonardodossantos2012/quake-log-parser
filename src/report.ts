import { MatchData } from './types';

export class ReportGenerator {
  generate(matchData: MatchData) {
    console.log('Match Report');
    console.log('Total Kills:', matchData.totalKills);
    console.log('Players:', matchData.players.join(', '));
    console.log('Kills:', matchData.kills);
    console.log('Kills by Means:', matchData.killsByMeans);
  }
}
