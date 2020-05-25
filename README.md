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

1. As a child, I want to easily navigate through the website.
2. As a child or a parent, I want to find the help page so I can learn how to play the game.
3. As a child or a parent, I want to contact the company so I can give feedback on the game or have some questions answered.
4. As a child, I want to personalise the game to me by giving the webpage data.
5. As a child, I want to be able to easily play the game without having to workout instructions.
6. As a child, I want to see how well I have done at the end of the game by review the scores from my game.
7. As a child, I to be able to see if I have improved by looking at my previous scores.
8. As a child, I want to able to choose whether I play again, so I can beat my previous score.


___
<span id="features"></span>
## Features

1. Consistent navbar style across all pages.
2. Link

<span id="existingFeatures"></span>
### Existing Features

Navbar

1. Links to all the other pages allows the user to navigate seamlessly between pages.
2. The navbar is consistent on every page and therefore a user can navigate to any part of the website from anywhere.
3. The “Help” link will allow users to go to the “Help” page, where it will explain the rules of the game.
4. The “Contact” link will allow users to go to the “Contact” page, where they can send off a feedback form.
5. The "Play!" link will take the user to the game page. 
6. In mobile view the navbar is collapsed allowing the users more space on the screen. The users can click the “hamburger” icon and still receive the full menu as a drop down function.

Help Page

1. There is a link to a help sheet with image to support children's understanding.
2. Explains how to navigate the game to start playing.
3. Explains the difference between each difficulty mode.
4. Explains your choices after the game has finished.

Contact Page

1. A form is available to fill in and give feedback.
2. There is an input for the following:
   + User's name
   + User's email to which they will receive and auto-reply.
   + User's have to check whether you have permission to use the email.
   + A text area to type in a message.
3. There is a clear button for users to press and submit their feedback.
4. A modal will appear 

Play! Page

Game information bar
Contains the following information:
1. User name
2. A timer counting up in seconds which starts and finishes with each game. It also resets after every game.
3. A speaker icon which will allow the user to mute/unmute the music.
4. Labels showing which difficulty mode you have chosen for each game.

Game
1. Each game will have 12 cards to choose from.

Modals
1.	Volume Modal – Users can choose whether they would like the music on or off.
2.	Welcome Modal – 
3.	Users can enter their name to personalise the experience.
4.	A speaker icon which will allow the user to mute/unmute the music.

Difficulty Modal
1.	Users receive a welcome with their personalised name.
2.	Users can select which difficulty they would like the game to be.
3.	Alternatively, there is a button to take the user to the “Instructions” page.
4.	Alternatively, there is a button to take the user to the “Contact” page.
1.	A speaker icon which will allow the user to mute/unmute the music.

Loading Modal – 
2.	An animated gif will play whilst the cards are loading.
3.	The “start game” will appear when the cards are ready.
4.	A speaker icon which will allow the user to mute/unmute the music.

Finished Modal
1.	Users can see their scores from the game (moves taken and how long it took).
2.	Users can see their previous top 3 scores (moves taken and how long it took).
3.	There is a button allowing users to play again immediately.
4.	There is a button allowing users to see the cards that have featured in each game.


 







<span id="featuresLeftToImplement"></span>
### Features Left to Implement

1. I would like to add a timer that displays minutes and seconds.
2. I would like to add a button that flashes when the game is ready to play.
3. I would like to add in a hint button, which shows all the cards for a second to give children a clue if they get stuck.
___
<span id="defensiveFeatures"></span>
## Defensive Features

As this project is designed for children, it was imperative that I build in multiple fail-safes.
These following design features are in place to stop children from unintentionally breaking the game.
+ If the api doesn't load, then an emergency set of cards will be drawn from static images loaded onto the webpage.
+ If a child does not input their name, it has a default of "guest". 
+ Clicking on the same card consectutively will not affect the game.
+ Clicking the same card twice will not increase the amount of moves recorded. 
+ Cards will disappear when a pair is chosen to prevent children from clicking them again. 
+ User cannot click other cards whilst a pair is diappearing or the wrong pair is resetting.
+ Users cannot swap difficulties halfway through a game. 
+ User must fill in the required forms when sending feedback.
+ User must confirm that they have permission to use an email address. 
+ COUNT RESPONSE
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

https://www.youtube.com/watch?v=PxzY57ImZdQ

<span id="acknowledgements"></span>
Acknowledgements  

I received inspiration for this project Love Running. I liked the idea of a website that helped people locate groups that they could join in with. I also really like their “next run” section, which I used as inspiration for my “next meeting” section. 
I also received inspiration from the other projects I took part in during the course. 
Some examples are:

https://devhints.io/jasmine

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
