## Node.js Express REST API with TypeScript

## Overview
This project is a simple REST API built using Node.js, Express, and TypeScript. It provides endpoints for user registration, login, task creation, and listing tasks. The API enforces authentication using JWT (JSON Web Tokens).

## Endpoints

POST /register - Register a new user.
```
Request Body:
{
    "name": "user",
    "email": "user@domain.com",
    "password": "password"
}

```


POST /login - Authenticate and get a JWT token.
```
Request Body:
{
    "email": "user@domain.com",
    "password": "password"
}

```


GET /user - Get user details (requires authentication).


POST /create-task - Create a new task (requires authentication).

```
Request Body:
{
    "name":"task",
    "priority": "HIGH",
    "status": "Todo"
}

```


GET /list-tasks - List all tasks (requires authentication).

## Getting Started

Install the project dependencies:

```
npm install

```

Set up your database connection and environment variables.

Start the development server:

```
npm run start

```
