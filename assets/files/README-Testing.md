# Testing

Testing has been taking place throughout the project. 
I have used a combination of Jasmine Testing, bug fixes and a final project check. 

## Bugs

I have been testing bugs throughout the project. I kept a lot of commit which detailed the bug and the fix.
Please find a full list here:- [Link to bugs page](./README-bugList.md)  


## Jasmine Testing

The jasmine tests are available on the repository. They focus on the output of specific functions.

## General Testing

### Responsive Design

Mobile portrait

Page      | Desired outcome | Result 
--------- | --------------- | ---
Play!  | Design is responsive and readable | True
Contact | Design is responsive and readable | True
Help | Design is responsive and readable | True
| | | 


Mobile landscape

Page      | Desired outcome | Result 
--------- | --------------- | ---
Play!  | Design is responsive and readable | True
Contact | Design is responsive and readable | True
Help | Design is responsive and readable | True
| | | 

iPad portrait

Page      | Desired outcome | Result 
--------- | --------------- | ---
Play!  | Design is responsive and readable | True
Contact | Design is responsive and readable | True
Help | Design is responsive and readable | True
| | | 

iPad landscape

Page      | Desired outcome | Result 
--------- | --------------- | ---
Play!  | Design is responsive and readable | True
Contact | Design is responsive and readable | True
Help | Design is responsive and readable | True
| | | 

iPad Pro portrait

Page      | Desired outcome | Result 
--------- | --------------- | ---
Play!  | Design is responsive and readable | True
Contact | Design is responsive and readable | True
Help | Design is responsive and readable | True
| | | 

iPad Pro landscape

Page      | Desired outcome | Result 
--------- | --------------- | ---
Play!  | Design is responsive and readable | True
Contact | Design is responsive and readable | True
Help | Design is responsive and readable | True
| | | 

Laptop screens

Page      | Desired outcome | Result 
--------- | --------------- | ---
Play!  | Design is responsive and readable | True
Contact | Design is responsive and readable | True
Help | Design is responsive and readable | True
| | | 

### Navbar

User story - As a player, I want to easily navigate through the website so I can see all of the pages.

Page      | Screen      | Desired outcome | Result 
--------- | ----------- | --------------- | ---
All     | Design is as intended on the wireframes | True
All pages | All screens        | Navbar link embedded in the logo takes us to the "Index" page| True
| | |
Index page | All screens        | Navbar link "Play!" takes the user to the "Play!(Index)" page| True
Index page | All screens        | Navbar link "Contact" takes the user to the "Contact" page| True
Index page | All screens        | Navbar link "Help" takes the user to the "Help" page| True
| | |
Help page | All screens        | Navbar link "Play!" takes the user to the "Play!(Index)" page| True
Help page | All screens        | Navbar link "Contact" takes the user to the "Contact" page| True
Help page | All screens        | Navbar link "Help" takes the user to the "Help" page| True
| | |
Contact page | All screens        | Navbar link "Play!" takes the user to the "Play!(Index)" page| True
Contact page | All screens        | Navbar link "Contact" takes the user to the "Contact" page| True
Contact page | All screens        | Navbar link "Help" takes the user to the "Help" page| True
| | |

Is the user story achievable? Yes.

### Contact Page
User story - As a player, I want to contact the company so I can give feedback on the game or have some questions answered.

Screen      | Desired outcome | Result 
--------- | ----------- | --------------- 
All | All form fields can be filled in | True
All | Required form fields alert when they are empty | True
All | Response modal appear upon successful email sent | True
All | Sender receives an automatic reply | True
All | The website owners receive an email | True
| | |

[Account holder email](../images/readmeImages/accountHolderEmail.png)

[Player auto email](../images/readmeImages/playerAutoEmail.png)

[Successful email sent](../images/readmeImages/feedbackReceived.png)

Is the user story achievable? Yes.


### Help Page
User story - As a player, I want to find the help page so I can learn how to play the game.

Screen      | Desired outcome | Result 
--------- | ----------- | --------------- 
All | Is the text clear and easy to read? | True
All | Is the same information available on each screen size? | True
All | Does the link to the pictured instructions open in a new tab? | True
| | |

Is the user story achievable? Yes.

### Play!

### Modals
<ins>Volume Modal</ins>

Screen      | Desired outcome | Result 
----------- | --------------- | ---
All| The modal opens at the correct time | True
All|The modal closes when Yes or No is clicked | True
All| Clicking yes plays the music | True
All| Clicking no mutes the music | True
| | | 


<ins>Welcome Modal</ins>

User story - As a player, I want to personalise the game to me by giving the webpage data (entering my name).

Screen      | Desired outcome | Result 
----------- | --------------- | ---
All| The modal opens at the correct time | True
All|The modal closes when Enter is clicked | True
All| Player can fill in the field to input their name| True
All| Intro music plays| True
| | | 

Is the user story achievable? Yes.

<ins>Difficulty Modal</ins>

Screen      | Desired outcome | Result 
----------- | --------------- | ---
All| The modal opens at the correct time | True
All|The modal closes when any of the buttons are clicked | True
All| See instructions takes the player to the Help page| True
All| Contact Us takes the player to the contact page | True
All| The message contains the player's name or guest | True
All| Intro music plays| True
All| Usage warning appears when a certain amount of api responses have been calculated. | True
| | | 


<ins>Loading Modal</ins>

Screen      | Desired outcome | Result 
----------- | --------------- | ---
All| The modal opens at the correct time | True
All|The modal closes when the start game is clicked| True
All| The start button appears when the game has loaded | True
All| The loading gif plays when the modal opens | True
All| Intro music plays| True
Mobile devices only | Screens smaller than an iPad have a message encouraging to play landscape | True
| | | 

[Mobile device - showing message](../images/readmeImages/mobileMessage.png)

[Tablet device - not showing message](../images/readmeImages/iPadMessage.png)



<ins>Finished Modal</ins>

User story - As a player, I want to see how well I have done at the end of the game by reviewing the scores from my game.
User story - As a player, I to be able to see if I have improved by looking at my previous scores.
User story - As a player, I want to able to choose whether I play again, so I can beat my previous score.

Screen      | Desired outcome | Result 
----------- | --------------- | ---
All| The scores from the current game are displayed. | True
All| The top three previous scores are displayed or blank. | True
All| Clicking the See Cards button will open the Display Cards Modal.| True
All| Clicking the play again button will take the player to the Difficulty Modal. | True
All| Clicking any of the buttons will close the modal.| True
All| End of game music plays.| True
| | | 

Are the user stories achievable? Yes.


<ins>Display Cards Modal</ins>

User story - As a player, I want to able to see the cards I have previously used, so I can read the details easily.

Screen      | Desired outcome | Result 
----------- | --------------- | ---
All| The cards from the game are displayed and are large enough to see the details | True
All| End of game music plays.| True
| | | 

Is the user story achievable? True


### Game Play

Game information

Page      | Screen      | Desired outcome | Result 
--------- | ----------- | --------------- | ---
Play! | All | Timer will start when the game starts | True
Play!| All | Timer will end when the game ends | True
Play! | All | Timer will reset at the start of a new game | True
Play! |All| Timer will display a continuous record of the length of the game | True
Play! | All | The correct difficulty is highlighted based on the player's choice| True
Play! | Mobile portrait | Game information section will stick to the top of the page when scrolling. |True
Play! |All | When the page is refreshed the player's scores are remembered. |True
Play! | Mobile portrait | When the page is refreshed the player's name is remembered. |True
| | | 

Game functionality

Screen      | Desired outcome | Result 
----------- | --------------- | ---
All| Game music plays| True
All| Cards rotate when clicked | True
All| Cards rotate back when an unsuccessful pair is chosen | True
All| Cards disappear slowly when a pair is found | True
All| Pair music is played when a pair is found | True
All| All cards are shown when all the pairs are found| True
All| The finished modal opens when the pairs are found | True
All| Double clicking the same card has no effect on the game. | True
All| Backup cards are selected if the api hasn't responded in 30 seconds. | True


### Sound functionality

Page      | Screen      | Desired outcome | Result 
--------- | ----------- | --------------- | ---
Play! | All | Pressing the speaker icon will mute the music | True
Play! | All | Pressing the speaker icon will unmute the music | True
Play! | All | Pressing no to volume will result in music not playing | True
Play! | All | Pressing yes to the speaker button will play the music | True
Play! | All| When the page is refreshed the player's music mute/unmute preferences are remembered |True