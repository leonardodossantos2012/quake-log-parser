# Quake Log Parser

## Table of Contents
- [Project Overview](#project-overview)
- [Project Objectives](#project-objectives)
- [Folder Structure](#folder-structure)
- [Prerequisites](#prerequisites)
- [Running the Project Locally](#running-the-project-locally)
- [Viewing Logs](#viewing-logs)
  - [Viewing Logs in the Pipeline](#viewing-logs-in-the-pipeline)
  - [Viewing Logs Locally](#viewing-logs-locally)
- [Notes](#notes)

## Project Overview
The Quake Log Parser project is designed to parse Quake 3 Arena server log files and generate reports based on the parsed data. The project is implemented in TypeScript and uses Docker for containerization, along with GitHub Actions for continuous integration and deployment (CI/CD).

## Project Objectives
The main objectives of this project are:
1. Parse Quake 3 Arena log files to extract relevant data.
2. Generate reports on game data, including total kills, player kills, and kills by means.
3. Automate testing and deployment using GitHub Actions.
4. Capture and save logs for debugging and review.

## Folder Structure
quake-log-parser
├── .github
│ └── workflows
│ └── ci.yml # GitHub Actions workflow file
├── src
│ ├── index.ts # Entry point of the application
│ ├── parser.ts # Log parser implementation
│ ├── report.ts # Report generator implementation
│ ├── types.ts # Type definitions
│ └── tests
│ ├── parser.test.ts # Unit tests for the log parser
│ └── data
│ └── testLogData.log # Test log data
├── logs
│ └── qgames.log # Sample log file for parsing
├── .dockerignore # Docker ignore file
├── Dockerfile # Dockerfile for building the image
├── docker-compose.yml # Docker Compose configuration
├── jest.config.js # Jest configuration file
├── package.json # NPM package configuration
├── tsconfig.json # TypeScript configuration
└── README.md # Project README file


## Prerequisites
To run this project locally, you need to have the following installed:
1. Node.js (version 16 or higher)
2. Docker
3. Docker Compose

## Running the Project Locally
Follow these steps to run the project locally:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/quake-log-parser.git
   cd quake-log-parser

2. **Install dependencies:**
   ```npm install

3. **Build the Docker image:**
   ```docker-compose build

4. **Run the tests:**
    ```docker-compose up --build test

5. **Run the application**
    ```docker-compose up --build app

