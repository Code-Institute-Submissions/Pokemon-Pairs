# Pokémon Pairs!

![picture](/assets/images/test_response2.png)


### [Live page](https://cgpalmer.github.io/The-Book-Club/)
___

## Contents
+ <a href="#rationale">Rationale</a>
+ <a href="">Planes</a>
+ <a href="#UX">UX</a> 
   - <a href="#userStories">User Stories</a>
+ <a href="#features">Features</a>
   - <a href="#existingFeatures">Existing Features</a>
   - <a href="#featuresLeftToImplement">Features left To Implement</a>
+ <a href="#defensiveFeatures">Defensive Features</a>
+ <a href="#technologiesUsed">Technologies Used</a>
+ <a href="#testing">Testing</a>
+ <a href="#responsiveDesign">Responsive design</a>
+ <a href="#deployment">Deployment</a>
   - <a href="#deploymentLive">Deployment Live</a>
   - <a href="#deploymentLive">Deployment Local</a>
+ <a href="#credit">Credit</a>
   - <a href="#media">Media</a>
   - <a href="#acknowledgements">Acknowledgements</a>
+ <a href="#project">Project Evaluation</a>
   - <a href="#improvements">Improvements</a>






___

<span id="rationale"></span>
## Rationale


___

<span id="UX"></span>
## UX



   + The “Home” page will have details about the club and what to expect from the meetings. It will contain a section with information for people to trial the book club. It will also have the prices for each subscription at the bottom of the page.
<span id="userStories"></span> 
### User Stories


   7.	As a user type, I want to click on the “Logo”, so that I can go back to the home page.  


___
<span id="features"></span>
## Features

<span id="existingFeatures"></span>
### Existing Features

<span id="featuresLeftToImplement"></span>
### Features Left to Implement

 
___
<span id="defensiveFeatures"></span>
## Defensive Features

As this project is designed for children, it was imperative that I build in multiple fail-safes.
These following design features are in place to stop children from unintentionally breaking the game.
+ If the api doesn't load, then an emergency set of cards will be drawn. 
+ Clicking on the same card consectutively will not affect the game.
+ Cards will disappear when a pair is chosen to prevent children from clicking them again. 
+ Users cannot swap difficulties halfway through a game. 
+ Clicking the same card twice will not increase the amount of moves recorded. 
+ User must enter a valid email address to send a contact email. 
+ User must confirm that they have permission to use an email address. 
___
<span id="technologiesUsed"></span>
### Technologies Used

 

Bootstrap – https://getbootstrap.com/  
The project uses Bootstrap to simplify the process of building a grid layout, implementing forms, cards, and creating buttons. Bootstrap was also used for responsive design. 

emailJS - I have used emailJS to allow the users to contact the game producers and give feedback.

JQuery – https://jquery.com/  
JQuery was not used discreetly by me. However, elements of Bootstrap used JQuery and Javascript, therefore I have added the necessary scripts on each page. 

 

<span id="testing"></span>
### Testing

Please find the link to the test document here: [Link to testing page](assets/files/README-TESTING.md)   



<span id="responsiveDesign"></span>
## Responsive Design
___
<span id="deployment"></span>
## Deployment

<span id="deploymentLive"></span>
Deployment – Live Website  

   1.	Create repository in GitHub and give it a relevant name.
   2.	Click on your repository to open it.
   3.	Find the “settings” tab and click on it.
   4.	Scroll down until you arrive at the “GitHub Pages” sections.
   5.	Under the “source” drop down menu, choose a branch. I chose “master branch” and select it. 
   6.	You will then see a URL to your live webpage. In my case the URL is https://cgpalmer.github.io/The-Book-Club/

<span id="deploymentLocal"></span>
Deployment – Run Locally  

   1.	Again, click on the repository called The-Book-Club.
   2.	Along the top bar, find the “clone or download” button. 
   3.	Here you have the option to clone by HTTPS or SSH.
   4.	Once you have chose your desired option, then click the copy icon next to the URL.
   5.	Open Git Bash.
   6.	Ensure you are in the correct directory which you want to copy the code into. If not, change the directory now.
   7.	In the terminal, write the    $ git clone https://github.com/cgpalmer/The-Book-Club.git
   8.	Press the enter button and your clone will be created.


___
<span id="credit"></span>
## Credit

<span id="media"></span>
Media

The photos used in this site were obtained from Google. They were all free so share and edit. 

https://www.ionos.co.uk/tools/favicon-generator

<span id="acknowledgements"></span>
Acknowledgements  

I received inspiration for this project Love Running. I liked the idea of a website that helped people locate groups that they could join in with. I also really like their “next run” section, which I used as inspiration for my “next meeting” section. 
I also received inspiration from the other projects I took part in during the course. 
Some examples are:



___
<span id="project"></span>
## Project Evaluation
<span id="improvements"></span>
### Improvements

JavaScript code
   + In future I want to explore using switch cases.
   + I want to look at short hand for conditional statements to make it clearer where the loops and functions are defined.

Jasmine testing  
I would like to use unit testing from the beginning of the project. 
I think it will be useful to find out which functions are/aren't being called.
I used JS to check which functions are called, by using alerts or console.log. 
However, this was inefficient. 

___
