# mem_project

## Overview
**mem_project** is a meme rating application built with React. It allows users to view, rate, and manage memes through a user-friendly interface.

## Getting Started
To run the project locally, follow these steps:

1. Clone the repository.
    ```bash
    git clone https://github.com/ArkPac97/mem_project.git

2. Install the dependencies:
   ```bash
   npm install
3. Start the development server:
    ```bash
    npm start

## Project Structure
The project is organized into the following folders and files:

* node_modules: contains all npm dependencies.

* public: includes icons and the mems folder with mems images.

* src: contains the source code.

### Components:

* buttons: contains button-specific code.
* main components:

    * NavBar
    * MemCard
    * HotMemsBoard
    * MyBestBoard
    * RegularBoard

* data: contains mems.json with mems data.
* store: acts as a reducer using createContext (MemsContext.jsx).
* views: contains the pages routed from the main page.

* root Files:

    * App.css
    * App.js
    * App.test.js
    * index.css
    * index.js
    * reportWebVitals.js

Enjoy rating memes!