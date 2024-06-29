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
```
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
```

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
   ```sh
   npm install

3. **Build the Docker image:**
   ```sh
   docker-compose build

4. **Run the tests:**
    ```sh
   docker-compose up --build test

5. **Run the application**
    ```sh
    docker-compose up --build app
    
## Viewing Logs
### Viewing Logs in the Pipeline
The CI/CD pipeline is configured to run on each push and pull request to the main branch. You can view the logs in the GitHub Actions interface:

1. Navigate to your GitHub repository.
2. Click on the "Actions" tab.
3. Select the workflow run you want to view.
4. Click on the individual steps to view the logs.

The workflow captures both the test logs and application logs as artifacts. You can download these artifacts from the workflow run summary page.

### Viewing Logs Locally

Logs are captured and saved to the logs directory. You can view these logs by:

1. **Viewing application logs:**
    ```sh
    cat logs/app.log

2. **Viewing test logs:**
    ```sh
    cat test-results/test-report.html

The application logs include timestamps and detailed information about the application's execution, while the test logs provide a detailed report of the test results.

## Notes
- The workflow introduces a delay before capturing logs to ensure that all logs are generated and flushed properly.

- The Docker Compose setup is configured to capture logs with timestamps for better visibility and debugging.

By following these steps and guidelines, you should be able to set up, run, and monitor the Quake Log Parser project both locally and through the CI/CD pipeline.
