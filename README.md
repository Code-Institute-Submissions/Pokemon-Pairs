# Pokémon Pairs!

![picture](/assets/images/test_response2.png)


### [Live page](https://cgpalmer.github.io/Pokemon-Pairs/)
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
   - <a href="#tutorials">Tutorials</a>
   - <a href="#media">Media</a>
   - <a href="#acknowledgements">Acknowledgements</a>
+ <a href="#project">Project Evaluation</a>
   - <a href="#improvements">Improvements</a>






___

<span id="rationale"></span>
## Rationale

#### Pokémon Pairs - Gotta Match'Em All!
The rationale for this project is to build a memory game for children or anyone who enjoys Pokémon. It is aimed at building
their memory skills whilst keeping them entertained. Pokémon is hugely popular with younger
players, especially since the release of Pokémon Go. Now, they can build up their skills, whilst
competing against themselves. Can they complete the game in fewer moves or less time?

___

<span id="UX"></span>
## UX

   + The “Home” page will have details about the club and what to expect from the meetings. It will contain a section with information for people to trial the book club. It will also have the prices for each subscription at the bottom of the page.
<span id="userStories"></span> 
### User Stories

1. As a player, I want to easily navigate through the website so I can see all of the pages.
2. As a player or a parent, I want to find the help page so I can learn how to play the game.
3. As a player or a parent, I want to contact the company so I can give feedback on the game or have some questions answered.
4. As a player, I want to personalise the game to me by giving the webpage data (entering my name).
5. As a player, I want to be able to easily play the game without having to workout instructions.
6. As a player, I want to see how well I have done at the end of the game by reviewing the scores from my game.
7. As a player, I to be able to see if I have improved by looking at my previous scores.
8. As a player, I want to able to choose whether I play again, so I can beat my previous score.
9. As a player, I want to able to see the cards I have previously used, so I can read the details easily.

### Wireframes

Wireframes have been made using Balsamiq. I overestimated how much screen retail I would have during this project and there some of
the designs have changed. I have also included many more modals than in the original wireframes because of my target 
audience.

Some of the changes include:
Adding in the information bar at the top of the game.
Modals guiding the user through to the game and offering personalisation on the way.
Having a 'display cards' modal as clearly the cards were too small to actually read.
As the the screen didn't offer room for 16 cards, I have now used 12 cards in all difficulty modes.
The change in the games difficulties meant I needed to add in a modal where the players could choose a difficulty.
I opted to put the difficulty on the modal rather than the bar at the top of the game so players couldn't change halfway through a game.
On the help page, the text is now in containers to show clear steps for enjoying the game.

Please find my wireframes here, along with images of the game at each stage across a variety of responsive devices.
This is for comparison of the changes between the two. 

[Wireframes](assets/files/wireFrames.pdf)

[Responsive images of actual Sight](assets/files/responsiveImages.pdf)
___
<span id="features"></span>
## Features

<span id="existingFeatures"></span>
### Existing Features

<ins>Navbar</ins>

1. Links to all the other pages allows the user to navigate seamlessly between pages.
2. The navbar is consistent on every page and therefore a user can navigate to any part of the website from anywhere.
3. The “Help” link will allow users to go to the “Help” page, where it will explain the rules of the game.
4. The “Contact” link will allow users to go to the “Contact” page, where they can send off a feedback form.
5. The "Play!" link will take the user to the game page. 
6. In mobile view the navbar is collapsed allowing the users more space on the screen. The users can click the “hamburger” icon and still receive the full menu as a drop down function.

<ins>Help Page</ins>

1. There is a link to a help sheet with image to support a player's understanding.
2. Explains how to navigate the game to start playing.
3. Explains the difference between each difficulty mode.
4. Explains your choices after the game has finished.

<ins>Contact Page

1. A form is available to fill in and give feedback.
2. There is an input for the following:
   + User's name
   + User's email to which they will receive and auto-reply.
   + User's have to check whether you have permission to use the email.
   + A text area to type in a message.
3. There is a clear button for users to press and submit their feedback.
4. A modal will appear 

<ins>Play! Page

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

Welcome Modal 
1.	Users can enter their name to personalise the experience.
2.	A speaker icon which will allow the user to mute/unmute the music.

Difficulty Modal
1.	Users receive a welcome with their personalised name.
2.	Users can select which difficulty they would like the game to be.
3.	Alternatively, there is a button to take the user to the “Instructions” page.
4.	Alternatively, there is a button to take the user to the “Contact” page.
5.	A speaker icon which will allow the user to mute/unmute the music.

Loading Modal
1.	An animated gif will play whilst the cards are loading.
3.	The “start game” will appear when the cards are ready.
4.	A speaker icon which will allow the user to mute/unmute the music.

Finished Modal
1.	Users can see their scores from the game (moves taken and how long it took).
2.	Users can see their previous top 3 scores (moves taken and how long it took).
3.	There is a button allowing users to play again immediately.
4.	There is a button allowing users to see the cards that have featured in each game.

Display Cards Modal
1. Users can see all the cards from the game in much more detail.
2. Users can press a button to play again.

Music
There is music through the game. There are 4 main sounds:
1. Intro and welcome music.
2. Game music.
3. Successful pair found music.
4. Winning the game music.


<span id="featuresLeftToImplement"></span>
### Features Left to Implement

1. I would like to add a timer that displays minutes and seconds.
2. I would like to add a button that flashes when the game is ready to play.
3. I would like to add in a hint button, which shows all the cards for a second to give players a clue if they get stuck.
4. I would like to add a function where the user chooses which Pokémon they would like to see in the game.
___
<span id="defensiveFeatures"></span>
## Defensive Features

As this project is designed for an audience including children, it was imperative that I build in multiple fail-safes.
These following design features are in place to stop players from unintentionally breaking the game.
+ Modals guide the players through to the game in an easy and straight forward way.
+ If the api doesn't load, then an emergency set of cards will be drawn from static images loaded onto the webpage.
+ Emergency cards will load automatically after 30 seconds if the api does not respond.
+ If a player does not input their name, it has a default of "guest". 
+ Clicking on the same card consectutively will not affect the game.
+ Clicking the same card twice will not increase the amount of moves recorded. 
+ Cards will disappear when a pair is chosen to prevent players from clicking them again. 
+ User cannot click other cards whilst a pair is diappearing or the wrong pair is resetting.
+ Users cannot swap difficulties halfway through a game. 
+ User must fill in the required forms when sending feedback.
+ User must confirm that they have permission to use an email address. 
+ User will receive a message if the game reaches near its api limit in one session.
___
<span id="technologiesUsed"></span>
### Technologies Used

Languages used

1. HTML
2. CSS
3. Javascript

Bootstrap – https://getbootstrap.com/  
The project uses Bootstrap to simplify the process of building a grid layout, implementing forms, cards, and creating buttons. Bootstrap was also used for responsive design. 

emailJS - I have used emailJS to allow the users to contact the game producers and give feedback.

JQuery – https://jquery.com/  

Jasmine testing Framework - https://jasmine.github.io/
___
<span id="testing"></span>
## Testing

Please find the link to the test document here: [Link to the testing page](assets/files/README-Testing.md)   

___
<span id="responsiveDesign"></span>
## Responsive Design

This project has been optimised to the common devices on Google Chrome's Dev Tools.
It has been specifically designed for the following:
   + Moto G4
   + iPhone 6/7/8
   + iPad
   + iPad Pro
   + Laptop with MDPI screen
   + Laptop with HiDPI screen
This includes both portrait and landscape orientation for all of the above devices. 

The majority of the website stays consistent to an easy user experience. There are minor changes to font-sizes etc. Some 
of these can be seen in the [responsiveImages](assets/files/responsiveImages.pdf)
There are a few major resposive choices, detailed below.

1. A message encouraging the user to turn their mobile landscape appears on mobile devices smaller than an iPad.

2. Card layout in game

   Small mobile and large mobile - portrait
   The card layout is in a 2 x 6 grid.
   The game information header will also stay at the top of the users screen.

   iPad, Ipad Pro - portrait
   The card layout is in a 4 x 3 grid.

   All landscape devices and laptop screens
   The cards are laid out in a 6 x 2 grid.

3. Displayed cards at the end of the game

   Small mobile and large mobile - portrait
   Cards are laid out in a 1 x 6 grid.

   Landscape mobiles, iPad portrait and landscape, iPad Pro portrait
   Cards are laid out in a 2 x 3 grid.

   iPad Pro landscape and Laptop screens
   Cards are laid out in a 3 x 2 grid.

4. Top results

   For mobile devices, the top results are laid are stacked.
   For devices larger than a mobile, they are presented inline with each other. 


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
   6.	You will then see a URL to your live webpage. In my case the URL is https://cgpalmer.github.io/Pokemon-Pairs/.

<span id="deploymentLocal"></span>
Deployment – Run Locally  

   1.	Again, click on the repository called The-Book-Club.
   2.	Along the top bar, find the “clone or download” button. 
   3.	Here you have the option to clone by HTTPS or SSH.
   4.	Once you have chose your desired option, then click the copy icon next to the URL.
   5.	Open Git Bash.
   6.	Ensure you are in the correct directory which you want to copy the code into. If not, change the directory now.
   7.	In the terminal, write the    $ git clonehttps://cgpalmer.github.io/Pokemon-Pairs.git
   8.	Press the enter button and your clone will be created.


___
<span id="credit"></span>
## Credit

<span id="#tutorials"></span>
Tutorials

For all of the following tutorials, I have edited the code necessary for my project. The links provide
the source of my initial inspiration. 

Animating cards:
http://www.developphp.com/video/JavaScript/Trigger-CSS-Transitions-to-Control-Animations

Shuffling Array:
https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

Using the Pokémon Cards API - Making the initial Ajax Calls:
https://www.youtube.com/watch?v=5zcSpVKxMao&t=1344s

How to toggle sounds playing:
//https://stackoverflow.com/questions/27368778/how-to-toggle-audio-play-pause-with-one-button-or-link

How to play sound when clicking a button:
//https://stackoverflow.com/questions/8489710/play-an-audio-file-using-jquery-when-a-button-is-clicked



<span id="media"></span>
Media

The Pokémon cards are taken from an api found at:
https://pokemontcg.io/

The photos used in the Landing page image were found at: 
https://www.cleanpng.com/

The "Pokémon Pairs" photo used is from the following link: 
https://textcraft.net/style/Textcraft/pokemon

To generate my favicon, I used this website: 
https://www.ionos.co.uk/tools/favicon-generator

The theme songs we taken from Youtube. The main theme at the beginning of the game is from this link:
https://www.youtube.com/watch?v=PxzY57ImZdQ

The rest of the music and sound effects come from these links:
https://www.youtube.com/watch?v=axKDCZd4Mfc

https://www.youtube.com/watch?v=-BKfhq_TtcE


<span id="acknowledgements"></span>
Acknowledgements  

Through discussion with my mentor, we decided a matching pairs game would give me an appropriate challenge.
I received inspiration from playing Pokémon Go. I thought a great way to give the matching game a purpose would 
be to use Pokémon cards. 


___
<span id="project"></span>
## Project Evaluation

I believe that the project meets its design purpose. The site is simple to navigate with intuitive modals to help guide
younger users through the game. It gives clear instructions so that the users do not have to think too much about which
button to click to get to the game. Instead of using link names like "Home", I have used Play! to help understanding of
where the game is located.

Throughout the code there are many fail-safes, as detailed in <a href="#defensiveFeatures">defensive features</a>. As the
user audience is a young demographic, I have tried to ensure that unusual interaction with the site - such as clicking every
thing at once - does not interrupt or break the game. 


<span id="improvements"></span>
### Improvements

JavaScript code
   + In future I want to explore using switch cases.
   + I want to look at short hand for conditional statements to make it clearer where the loops and functions are defined.


CSS 

In future projects, I will aim to use media queries differently by organising my code into categories.
At the moment there is a lot of repeated code in each media query. In order to get the CSS right for 
screen sizes, I have used strict min-width and max-height media queries, meaning some code will have to be repeated.
Whilst it is necessary to have some repetition such as margins, some code applies to all of the screen above a break point. This 
In the future, I will be using more generic media queries (eg. min-width: 768px) to control shared aspects of the CSS.
This will reduce the amount of code and improve readability. Then should I need more specific screen margins etc, I will
you more specific media queries. 

In addition, I aim to use more standardised methods such vw or vh to encourage responsive design without the repetition
of code. I have achieved this on a small scale during this project but only for certain aspects of the website.


Jasmine testing  
I would like to use unit testing from the beginning of the project. 
I think it will be useful to find out which functions are/aren't being called and is much quicker.
I used JS to check which functions are called, by using alerts or console.log. 
However, this was inefficient and I had to simulate all of the scenarios.

___
