# Stack
Angular + Springboot + SQL

# Temporary Public Repo While I Do Some Fixes!!!

***November 4th, 2025 8:34AM Update:***
>This is a temporary public repo of my To-Do app's Angular front-end while I do maintenance on backend/testing issues that occured this morning. There was an issue with JDBC, which I suspect might be caused by the conflicting java versions I have installed in my Linux machine. For the sake of polish, I have taken the front-end files for public showing while I research a solution. An external API call populates the data in the meantime while SQL is disconnected.

Please check back for updates! 

***November 21st, 2025 9:46AM Update:***
>Fixed!...ish? Anyway, the backend can now be connected to the front-end. I have removed the external API call and put in a call to my Springboot server. I have a simple test on the front-end to check on port numbers, so maybe the issues won't arise again?

# Fuctionality
This is a simple to-do list app that allows the user to view items on their todo list and check things off. Very simple functionality, made primarily to practice unit and integration testing.

- Front-end: Display a list of to-do list items (the items will be retrieved from either an external API or from the mySQL db)
- Back-end:
  - Created a database of to-do list items (item title, item id, completion (boolean)) in mySQL CLI via my Linux terminal
  - Created Java classes to do calls
- Testing

# FirstNgApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.3.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

