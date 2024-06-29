import { LogParser } from './parser';
import { ReportGenerator } from './report';

const logFilePath = 'logs/qgames.log';
const parser = new LogParser(logFilePath);
const matchData = parser.parseLog();

const reportGenerator = new ReportGenerator();
reportGenerator.generate(matchData);
