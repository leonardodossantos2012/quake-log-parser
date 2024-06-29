import { LogParser } from '../parser';
import { MatchData } from '../types';
import * as fs from 'fs';

describe('LogParser', () => {
  let logParser: LogParser;
  const logFilePath = 'src/tests/data/testLogData.log';

  beforeAll(() => {
    logParser = new LogParser(logFilePath);
  });

  test('should parse total kills correctly', () => {
    const matchData: MatchData = logParser.parseLog();
    expect(matchData.totalKills).toBe(2);
  });

  test('should parse player list correctly', () => {
    const matchData: MatchData = logParser.parseLog();
    expect(matchData.players).toEqual(expect.arrayContaining(['Isgalamido', 'Dono da Bola']));
  });

  test('should handle world kills correctly', () => {
    const matchData: MatchData = logParser.parseLog();
    expect(matchData.kills['Isgalamido']).toBe(0);
  });

  test('should parse player kills correctly', () => {
    const matchData: MatchData = logParser.parseLog();
    expect(matchData.kills['Isgalamido']).toBe(0);
    expect(matchData.kills['Dono da Bola']).toBe(0);
  });

  test('should parse kills by means correctly', () => {
    const matchData: MatchData = logParser.parseLog();
    expect(matchData.killsByMeans['MOD_TRIGGER_HURT']).toBe(1);
    expect(matchData.killsByMeans['MOD_RAILGUN']).toBe(1);
  });
});
