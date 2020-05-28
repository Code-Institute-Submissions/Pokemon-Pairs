# Bugs

Commit Number     | Commit Message     
--------- | ----------- 
86a65f9c1f64a940773ee2acf872390216bfe9a3 | FB - name was not reading as null and therefore the jumbo screen would lift.
500b34f777b8dd2dd74361e908ba5977bae78c80 | FB - Clicking the binding row acted the same as clicking a card. Reset the cardSelected and whichCard clicked after a pair if found or not. Then set a conditional that the function only ran if an actual card was selected. Will not select now if you click the game row without clicking a card.
ce5a121eaf0d4fb2a6f6a4c53a883e94a5bfe76a | FB - Wrong ID on card selector 12.
0c09c8aafe8fd787dd3138fdf24ae370c0c316d7 | FB - If mainTheme was muted then playing it after seeing the cards wouldn't work until the next modal.
12c8606ba21291cbfcf1b94021113367e307f0c6 | FB - accidently changed brand width not modal brand width on laptop hd screen.
75437e716207627a8756383e931ba2ed0a31a1a3 | FB- Setting easy to just play the main theme rather than toggle as it was turning off and on a random points.
ba65e3729e0be78210d060b00d6bd85a3fad3d4e | FB - Chrome not allowing the theme to play until something is clicked. Made clicking easy, medium or hard tirgger the music.
e4e810e2a3d9c25641234277594137583d8a84aa | FB - Next song would not unmute if previous song was muted. Moved the code unmute to when the icon is clicked.
f7e8de86e5c8cf4bbc71370f72809d0947e5611c | FB - index.js line 139 threw a fault as it was not longer a function.
007b6a26566fb96f564f75abf158643645cadf1a | FB - step 2 - defining the var animationInProgress
b187b8dd842ef3a6337c57b10ab9cfa2389834ba | FB - wrong cards disappear. Wrapping card animation in a function.
42963f6a67134b468f8f8577fd17599635f20f41 | FB - if you find a pair and click another card before the animation is done then the card you click disappears. Moved  wiping the array to before the animations.
b4e2ffb5822d7e60ca49dcf4b6ddfd6ee83d408e | FB - Trying to get this to work as a selector. It does work but takes the class from both.
f40a14524c0aa7dbb0b1a646aafcf7067c771f53 | FB - Matching pairs didn't disappear until the next card was clicked. Solved by merging two functions.
8d6891c84e76d499a13bc72b39426abf6a9cd2e2 | FB - All pages showed home link as active.
0d15c6073cbb6339e9410070e246b8cce8ca1fcc | FB - Muting the game to start with results in it not playing at all - Clicking no volume now let's the user unmute the sound and the theme plays.
115b7b2d2b05b9cb2f8bb3910f3c2597b3474cec | FB - Clicking no to volume on the initial modal didn't close the modal.
c50f0dba318a63ed932d0bb03f29f2e9d467981a | FB- Music break if page refreshed. Creating and storing user interaction when pressing enter.
b1786f0359f98489a40c4321a6f3dae0b4b4c9bb | FB - track never started if the user had muted and refreshed the page. Now plays but stops if the session storage is 1.
2a3315355127abc6132fee7670dc7409fccf7e95 | FB - Mute symbol always showing after refresh. Now checks sessionStorage.
f1432d7b2a9d084508ca342730d8ffcde5771cac | FB- Script didn't run when page was reloaded. Relocated the  music settings inside the sotrage name.
495757663fec0597dddd8935171d55377a0980e0 | FB - Conditional statment now puts in a placeholder is session is empty and then turns it into a string.
48edd213abd19031884c220101677d9922c12d64 | FB - Game crashes when there is nothing in the session storage. Put in a conditional to track when this happens but now it doesn 't split the session still.
c9106745ee808a3403ad1a9f4682641861a03b6c | FB - Putting in a function to delay the placeholder card to avoid the jumping around.
e6436b15cb8ba843385ce67d7ce9729f5ed3bb52 | FB - Increasing reveal cards wait ensures all cards are shown at the end.
715a13e6d9458bdf97540929c8539428fbd2b2d0 | FB - Missing curly braces put the code functions again. Tried with fadeOut and still some glitches.
119511aeae5e48f4d1e0d994b3e00c5b56a721e0 | FB - missed an element when changing click to pairMatch
bb6a506bf52e2bb681f9063ddec557a70db16ac8 | FB - User can click off the display modal which breaks the loop of the game. Added static backdrop and keyboard to the displayModal.
3652fc1b029924d4af9b6696372bd893fbbc33ac | FB - Trying to remove bug where the css is no longer working.
3eda6ca366dd70182f0e52b2496ada17ef104554 | FB - easy and hard backup showed the same cards.
7905de29d12f6e34113a84c377f21d675360d55b | FB- Clicking three cards can allow a pair. Rearranging the reset code for pair not found to be a priority..
2501042743ab7acb8997f4fad6451687b58a96af | FB - Results were writing more than once, so added in a span and used .html to rewrite.
b0a6d3c8dbdc1ea8435054df63ae5033254dfc6d | FB - responsive design not working because of a missing curly bracket.
bdb447bc3143e6999b14f9fbff245282112c2b97 | FB - Formatting the results, superscripting 2nd etc and FB that they all said 1st.
c87b6d781b753b355485fbae7b2330e1c11cceb3 | FB -active class not on the correct link.
4dd454132859e1679e5dde8b05bc21ccd2ddfaac | FB - forgot to change the game.js that switched the cover and face rather than hiding the display.
1977eb677458bc36ce4c82a10f8284aa75362f1d | FB- put the correct selector for the image.
bf1d70d723ca297d41eabfcaca62b8814581eb63 | FB - Cards were not being counted consistently and counted when you clicked the same card by accident.
e25fd9ef25159c82f92913654aee975e69fd235a | FB - When playing another game, the grid appended giving the user two grids. I reset the grid.
ff1b95631e28f5b0fd2014cc82be8e440cb0eb55 | FB Forgot to take out the +1 in the cardFunction selector.
5159b623c00622bff1c27bdfc509acc96c3ca848 | Preparing to FB for the pair classes cannot be accessed by jquery if they're written in by jquery.
b87aaaa4442486c58560a75df90dd31feafb26c4 | FB - Stray closing } prevented the variables being reset at an appropriate time.
cc0fe3ee80142d5e6eb7a43af874fb813af61b29 | FB - Some cards were turning over by themselves after one click. Fix one is to clear the pairCounter vairable using the loop on each card.
faba86549582d092f018c7029d33be5d39bd1b51 | FB- User's name disappeared when switching screens. Will now appear should the user have inputted a name.
7f600417a5f6fd07113121a6210f7dff3a022781 | FB - if statement now reads value of null from session.storage. Means it will work when the tab is closed.
259059eff8ed29447f25e8ba2ef67064fc7ab3d9 | FB - Changing the cards which are pushed from 1-7 to maths random the length of the array to get more of a selection.
5af163276d28857003973aa2cda6f2b962b96094 | FB - Making all the cards turn to show their face when the game has been won.
4234bc270369fa26a3fb92a47648121bc87e9410 | FB - calcualting correct amount of ajax calls by setting a variable to take them away from 5000.
86691abcdb912aad27516f08d9daa9f4b4a8f016 | FB - Typo on the the link to the pokemon-pairs-title.
b0fb4c0f010a4ce36ceabc5bad876b6bb5d95264 | FB - the start game button does not appear if you skip the name modal. JS taken from the enterModal js and place to be triggered when any of the difficulty buttons are pressed.
1303cde2b9cbadd3ab66c066b54f027b57f7bc86 | FB - Fix 3 Adding in a time interval so the welcome Modal pops after the screen has slid up.
f019f4f5eda499fc40d290884253076774456fad | FB - Fix 2 is to slide up the jumbotron when the array is finished and display the welcomeModal at the same time.
79a1f7081acb9f986ce9533deb7b99b90055c2c4 | FB - Game flow no longer working as it shoud. Fix 1 is to hide all the elements whent he screen loads.
6cbaa44c5834001a14f90f707e02330030348c86 | FB - Adding in static backdrop to stop accidently dismissal of the loading modal.
6a387d1cc80f4b9d89d2c41c5c47d87a5f31c2f1 | FB - Typo on playAgainButtonDisplay meant it skipped the difficulty page.
d17c813869c8bff25c93c0abd1c4d6ce84cff81f | FB- Changing the function of clicking a difficulty to only resetting the variables. Otherwise the functions aren't available.
2676f6fd9aed24fa8041f2c9d0eecd9dec744ca2 | FB- Changed pair not found function arguments to each have their own =1 to ensure they still work after one pair has disappeared.
b12f308ade43080bc3332856e09a474f3cd43e5e | FB - Sorting out the modal-open for the body. Giving the body a id will fix the bug.
edc068c01eefb384c06dacfd2ec81ed7984422aa | FB - adding in a comment to fix a bug with jquery min at a later date.
93d032b8b108af89a5110e7e20b2d1396721ea51 | FB- Put the active class on the correct element.
8dab8e364e0a91a99d2e7ab82f70c88bc9918afc | FB - Adding extra js steps to ensure the right arrow is showing on the collapsed menu after starting a game.
0e6c1e076a10c07f9e5433480192e73e45e92450 | FB -  Commented out the turning blue process as it is a bug.
63557a98449612bfc0457802514bede0453e0116 | FB - Duplicates were occuring from a mistake. Number8 was comparing against number6 only and not number7.
244706fad189a8f775042d6018a841ede10c313e | FB - Added in number 16 to the array3 and adjusted the following code to allow for it
bd96d1e3fe54a16cb8e2845523a95c3ca3d75576 | FB - Changed numbers 6 and 7 to pull randomly from array3 instead of 1.
3ee3f5ee7ae29aa77585b949160ad34d85a7582b | FB - changed let to var to be defined. Also changed *3 to *2 as there were only two values in the array1
8cd4e5abe24890446704dfa3eeac9fce9cb93634 | FB - commited the saved version of the previous changes
66a5916f1a3b5607ac57e81d60a8dbae47c00ffa | FB - The api reset button was accidently removing all of the array elements so the game wouldn't start a second time. Adjusted the loop.
| | | 