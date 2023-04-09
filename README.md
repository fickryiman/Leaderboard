# Leaderboard
The leaderboard website displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external Leaderboard API service (https://www.notion.so/microverse/Leaderboard-API-service-24c0c3c116974ac49488d4eb0267ade3).

<!-- <a name="readme-top">The leaderboard website displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external Leaderboard API service (https://www.notion.so/microverse/Leaderboard-API-service-24c0c3c116974ac49488d4eb0267ade3).</a> -->

<h1>Leaderboard</h1>

<!-- TABLE OF CONTENTS -->
# 📗 Table of Contents

- [Leaderboard](#leaderboard)
- [📗 Table of Contents](#-table-of-contents)
- [📖 Leaderboard](#-leaderboard)
    - [How to build the "Leaderboard" website?](#how-to-build-the-leaderboard-website)
      - [Project 1: basic page structure.](#project-1-basic-page-structure)
      - [Project 2: send and receive data from API.](#project-2-send-and-receive-data-from-api)
      - [Project 3: final touches.](#project-3-final-touches)
  - [🛠 Built With ](#-built-with-)
    - [Tech Stack ](#tech-stack-)
    - [Tools i have used for this project ](#tools-i-have-used-for-this-project-)
    - [Key Features ](#key-features-)
  - [🚀 Live Demo ](#-live-demo-)
  - [💻 Getting Started ](#-getting-started-)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
    - [Install](#install)
    - [Usage](#usage)
    - [Run tests](#run-tests)
    - [Deployment](#deployment)
  - [👥 Authors ](#-authors-)
  - [🔭 Future Features ](#-future-features-)
  - [🤝 Contributing ](#-contributing-)
  - [⭐️ Show your support ](#️-show-your-support-)
  - [🙏 Acknowledgments ](#-acknowledgments-)
  - [📝 License ](#-license-)

<!-- PROJECT DESCRIPTION -->
# 📖 Leaderboard<a name="about-project"></a>
The leaderboard website displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external Leaderboard API service.

<!-- > Describe your project in 1 or 2 sentences. -->
### How to build the "Leaderboard" website?
* Project 1: basic page structure.
* Project 2: send and receive data from API.
* Project 3: final touches.

#### Project 1: basic page structure.
In this activity will set up a JavaScript project for the Leaderboard list app, using webpack and ES6 features, notably modules. I should develop a first working version of the app following a wireframe, but without styling - just focus on functionality. In following activities, I will consume the Leaderboard API using JavaScript async and await and add some styling.

- Set-up linters on local environments.
- Used correct flow GitFlow.
- Documentation the project in a professional way on README file.
- Create an npm project with webpack.
- Write plain HTML markup with minimum styling (just to make the layout), because you will implement styles in the following steps. Use this wireframe as a guide:
  
  [![wireframe intro](https://github.com/fickryiman/Leaderboard/blob/development/images/leaderboard_wireframe.png)

- Don't make API calls (I'll do it in a following step).
- Use ES6 modules, with import and export.

#### Project 2: send and receive data from API.
In this activity I will continue working on the Leaderboard list app, sending and receiving data from/to the Leaderboard API.

- Read the Leaderboard API documentation (https://www.notion.so/microverse/Leaderboard-API-service-24c0c3c116974ac49488d4eb0267ade3) to learn how to use this API.
- Create a new game with the name of your choice by using the API.
- Make sure that you saved the ID of your game that will be returned by API.
- Implement the "Refresh" button that will get all scores for a game created by you from the API (receiving data from the API and parsing the JSON).
- Implement the form "Submit" button that will save a score for a game created by you (sending data to the API).
- Use arrow functions instead of the function keyword.
- Use async and await JavaScript features to consume the API.
- No styling is required.

#### Project 3: final touches.
In this activity you will finalize the Leaderboard list app, adding the styles needed to make it look great.

- At this point you should have a fully working app that uses only basic styles to make the layout work, according to this wireframe:
  
  [![wireframe intro](https://github.com/fickryiman/Leaderboard/blob/development/images/leaderboard_wireframe.png)
  
- Now I should improve the look and feel of the application, adding the styles of my choice.
## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<!-- > Describe the tech stack and include only the relevant sections that apply to your project. -->
<details>
  <summary>Client Side / Front-End</summary>
  <ul>
    <li><a href="https://www.w3.org/html/">HTML</a></li>
    <li><a href="https://www.w3.org/Style/CSS/">CSS</a></li>
    <li><a href="https://www.javascript.com/">Javascript</a></li>
  </ul>
</details>

<details>
  <summary>Server Side / Back-End</summary>
  <ul>
    <li><a href="https://www.json.org/json-en.html">JSON</a></li>
    <li><a href="http://es6-features.org/">ES6</a></li>
    <li><a href="https://webpack.js.org/">Webpack</a></li>
    <li><a href="https://www.notion.so/microverse/Leaderboard-API-service-24c0c3c116974ac49488d4eb0267ade3">Leaderboard API</a></li>
    <!-- <li><a href=""> - </a></li>
    <li><a href=""> - </a></li> -->
  </ul>
</details>

<details>
    <summary>Package, Library, Framework</summary>
      <ul>
        <li><a href="https://webpack.js.org/guides/installation/#local-installation">webpack</a></li>
        <li><a href="https://github.com/webpack/webpack-cli">webpack cli</a></li>
        <li><a href="https://github.com/jantimon/html-webpack-plugin">html-webpack-plugin</a></li>
        <li><a href="https://webpack.js.org/loaders/style-loader">style-loader</a></li>
        <li><a href="https://webpack.js.org/loaders/css-loader">css-loader</a></li>
        <li><a href="https://webpack.js.org/configuration/dev-server">webpack-dev-server</a></li>
      </ul>
  </details>

<!-- Features -->
### Tools i have used for this project <a name="tools"></a>
  <details>
    <summary>Code Convention, Code Analysis</summary>
      <ul>
        <li><a href="https://eslint.org/">ESLint</a></li>
        <li><a href="https://webhint.io/">Webhint</a></li>
        <li><a href="https://stylelint.io/">Stylelint</a></li>
        <li><a href="https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=en">Lighthouse</a></li>
        <li><a href="https://www.npmjs.com/package/npm-check">node_modules checker</a></li>
      </ul>
  </details>
  <details>
    <summary>Version Control, CI/CD, Hosting Service</summary>
      <ul>
        <li><a href="https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow">GitFlow</a></li>
        <li><a href="https://pages.github.com/">Github Pages</a></li>
        <li><a href="https://github.com/features/actions">Github Actions</a></li>
        <li><a href="https://git-scm.com/">Git</a></li>
      </ul>
  </details>
  <details>
    <summary>IDE, Desktop Apps, Other Tools</summary>
      <ul>
        <li><a href="https://code.visualstudio.com/">Visual Studio Code</a></li>
        <li><a href="https://desktop.github.com/">Github Desktop</a></li>
        <!-- <li><a href="https://www.figma.com/">Figma</a></li> -->
      </ul>
  </details>

### Key Features <a name="key-features"></a>

<!-- > Describe between 1-3 key features of the application. -->
- Send and receive data from API.
- Play with async & await.
- Connect to the Leaderboard API.
- Add as much styling as possible.
- Implement the actions behind the "Refresh" Button.
- Implement the actions behind the "Submit" Button.


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO -->
## 🚀 Live Demo <a name=""></a>

<!-- > Add a link to your deployed project. -->
- Click the following url for [... Live Demo ...](https://fickryiman.github.io/Leaderboard/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## 💻 Getting Started <a name="getting-started"></a>

<!-- > Describe how a new developer could make use of your project. -->
To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:
- git version 2.38.x
- node.js version > 12.x
- IDE (visual studio code, etc)
- browser (chrome, firefox, edge, safari)

### Setup

Clone this repository to your desired folder:

```sh
  cd my-folder
  git git@github.com:fickryiman/ToDo-List.git
```


### Install

Install this project with:

```sh
  cd my-project
  npm install
```

### Usage

To run the project, execute the following command:

```sh
  npm run build (production environment)
  npm start (development environment)
```


### Run tests

To run tests, run the following command:
Run Github Actions Test
```sh
  npm test

  npx stylelint "**/*.{css,scss}"
  npx eslint .

  auto fix linter with --fix
  npx stylelint "**/*.{css,scss}" --fix
  npx eslint . --fix
```

### Deployment

You can deploy this project using:
GitHub Pages
Example:
```sh
https://fickryiman.github.io/ToDo-List/
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->
## 👥 Authors <a name="authors"></a>

<!-- > Mention all of the collaborators of this project. -->

👤 **Author 1**

- GitHub: [@fickryiman](https://github.com/fickryiman)
- Facebook: [@fickry.bil.iman](https://www.facebook.com/fickry.bil.iman)
- LinkedIn: [fickry-bil-iman](https://www.linkedin.com/in/fickry-bil-iman)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->
## 🔭 Future Features <a name="future-features"></a>

<!-- > Describe 1 - 3 features you will add to the project. -->
- add login to user with social media auth or google auth
- create mobile version
- create time completion and alarm
- Store data to realtime database

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [https://github.com/fickryiman/ToDo-List/issues](../../issues/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->
## ⭐️ Show your support <a name="support"></a>

<!-- > Write a message to encourage readers to support your project -->

If you like this project please follow me on my GitHub: [@fickryiman](https://github.com/fickryiman) or connect on my LinkedIn: [@fickry-bil-iman](https://www.linkedin.com/in/fickry-bil-iman).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->
## 🙏 Acknowledgments <a name="acknowledgements"></a>

<!-- > Give credit to everyone who inspired your codebase. -->
First thing first, I would like to say Alhamdulillah, Thanks to my Families, Microverse and Micronaut's, Reviewer's, Thank you for all of the experiences, lesson and everythings.


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FAQ (optional) -->

<!-- ## ❓ FAQ (OPTIONAL) <a name="faq"></a>

<!-- > Add at least 2 questions new developers would ask when they decide to use your project. -->

<!-- - **[Question_1]** -->

  <!-- - [Answer_1] -->

<!-- - **[Question_2]** -->

  <!-- - [Answer_2] -->

<!-- <p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- LICENSE -->
## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<!-- Creative Commons License - Start -->
<!-- Shield: [![CC BY 4.0][cc-by-shield]][cc-by]

This work is licensed under a
[Creative Commons Attribution 4.0 International License][cc-by].

[![CC BY 4.0][cc-by-image]][cc-by]

[cc-by]: http://creativecommons.org/licenses/by/4.0/
[cc-by-image]: https://i.creativecommons.org/l/by/4.0/88x31.png
[cc-by-shield]: https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg -->
<!-- Creative Commons License - End -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>
