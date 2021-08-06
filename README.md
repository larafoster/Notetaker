# NOTE TAKER
  
  ## Description   
  This app allows the user to quickly and easily create a Team Profile by using a command-line application to generate a webpage that displays their team's basic info. The html page displays the team's information in a card format for quick access to the team's email and github repos.

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Tests](#tests)
  - [Project Links](#links)
  - [Contribute](#contribute)
  - [Credits](#credits)
  - [License](#license)

  ## Installation
  Once you clone this repository, you will need to open the terminal in the folder that contains your index.js file. First run 'npm install' to install node modules. Then run 'node index' to see the app in action.
  
  ```shell
  npm install
  node index
  ```
  
  ## Usage 
   Once your node modules are installed, simply type 'node index' into the terminal and proceed through the questions. The generated html file will be in the Results FOLDER along with the css and image files.

  ## Tests 
  Unit testing was performed with jest. See link under project links.    


  ### Links
  Project Links:
  - [Github Repo](https://github.com/larafoster/Team-Profile-Generator) 

  View this app in motion:
  - [video of inquirer prompts](https://drive.google.com/file/d/1QYA5xb6A5U666e_Wfeg9YpTnfT--KJCh/view)
  - [video of rendered webpage ](https://drive.google.com/file/d/1-lzszWnI41-aat3fb-qtOCeV_gVEb2s7/view)
  - [video of test](https://drive.google.com/file/d/1Urtq2ulaKLz0LQWqg0xPf5PoC2brL74O/view)

  Screenshots of app:
  - [img of inquirer prompts](./src/assets/img/inquirer.png)
  - [img of test png](./src/assets/img/test1.png)
  - [img of Web page](./src/assets/img/teamwebpage.png)

  ## Credits 
  This project is created with the following technologies:
  - [Node.js](https://nodejs.org/en/) 
  - [Inquirer.js](https://www.npmjs.com/package/inquirer) 
  - [jest.js](https://www.npmjs.com/package/jest) 


  ***
 The code for this project was researched extensively. Here are a few of the tutorials I found helpful:

   - [Jest](https://github.com/facebook/jest/issues/3457)     
    
      ```test('name', () => {
        expect({value: 'value'}).toBeTruthy();
        expect(typeof {value: 'value'}).toBe('object');
        })
      ```
    
  ***

  - [jest](https://stackoverflow.com/questions/50818474/how-to-properly-test-if-the-type-of-the-result-is-a-javascript-function-in-jes) 

    ```describe("", () => {
      it("test", () => {
      const somethingThatReturnsAFunction = () => () => {};
      const theResult = somethingThatReturnsAFunction();
      expect(typeof theResult).toBe("function");
      });
     ```     
  ***

  - [.join .map .filter](https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d) 

    ```Say we want two arrays now: one for rebel pilots, the other one for imperials. With .filter() it couldn’t be easier!```

   ***

  - [Additional examples on Template Literals and expression interpolation](https://ado.xyz/blog/better-strings-in-javascript-with-template-literals/) 

    ```The syntax for expression interpolation is ${}. Anything we place between the curly brackets will be executed as code. In here we can pass variables, functions, or other logic that will be evaluated and it’s final value displayed.```  

  ## Contribute
  Please feel free to fork this project and create your own branch. Any suggestions for improvement are welcomed.

 ## License
 This project is licensed under the MIT License

 [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  
  
  ## Questions
  Contact me if you have any questions about this project:

  - [Send me an email](mailto:larafoster.dev@gmail.com)

  You can find my projects on Github:
  - [Find me on Github](https://github.com/larafoster)