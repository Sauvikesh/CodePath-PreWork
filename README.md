# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Sauvikesh Lal

Time spent: 3 hours spent in total

Link to project: https://glitch.com/edit/#!/magic-dust-zebra

## Required Functionality

The following **required** functionality is complete:

* [ x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [ x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [ x] Game buttons each light up and play a sound when clicked. 
* [ x] Computer plays back sequence of clues including sound and visual cue for each button
* [ x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [ x] User wins the game after guessing a complete pattern
* [ x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ x] More than 4 functional game buttons
* [ x] Playback speeds up on each turn
* [ x] Computer picks a different pattern each time the game is played
* [ x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](gif1-link-here)![](https://i.imgur.com/4QP6qev.gif)

![](gif2-link-here)![](https://i.imgur.com/DPKLvMp.gif)

![](gif3-link-here)
![](gif4-link-here)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
https://youtu.be/x7WJEmxNlEs
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
https://www.w3schools.com/js/js_random.asp



2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

A challenge I faced in this submission was doing research on how to implement the extra features using javascript. The feature I struggled the most on was randomizing the pattern the buttons would play in. I did not have experience with generating random numbers in javascript before, so I had to do a lot of research on how to use it. Because of this, I spent some time googling up articles on how to randomize numbers in javascript. Since there are so many resources about javascript, it was easy to find tutorials about randomizing numbers in javascript, but it felt a little overwhelming at first. There were so many different resources that I could have used, and I wasn’t sure which ones to use. I asked a friend for advice and I found two articles that discussed how to use Math.random. I had a better understanding of how to use random, and I decided to use random to generate numbers between 1 and 6. I had 5 game buttons, and examples of rng I found noted that the maximum number was not included in the methods they used to randomize. This meant that the rng would only generate numbers from 1 up to 5. I also had to floor the random number as the rng could generate decimal numbers too, which would not work. I also used this same method to generate the length of the pattern, and once I got the length, I used a for loop to generate random numbers one and a time for the length of the pattern. I felt overwhelmed with it at first, but I am proud of being able to figure out how to do it.


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

Since this project was essentially a fully front end project, I really want to know what kinds of skills I would need to do more “backend” stuff. I am not sure what backend development consists of, but I understand that it is the other half of what makes up websites, and in the future, I want to be able to create a full website with front and backend functionality. I also specifically want to know how I could add a backend to this website/game and how that would affect this project. I also want to know what the common practices are in the industry when creating projects in a team because I’m not sure how the work could get split up among a team, if it does at all.


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I had a few more hours on this project, I would work on a way to tally the score that the user has. This score would keep track of how many times the user has successfully completed the patterns. After implementing this feature, I would then try to implement a multiple feature where two people could play, and there would be scores for each competing player. The players would take turns playing on the webpage, and the score for each player would be adjusted accordingly. I would also add a type of “title” screen where the user could pick the difficulty of the game before playing which would affect the number of buttons, timer, and how fast the buttons light up. I would also like to spread out the buttons across the screen so that it would be more difficult to reach the buttons at higher difficulties. possible, I would also try to give the user an option to upload their own custom sound effects that they could assign to each button when pressed in order to make the game more stylized for each player. 




## Interview Recording URL Link

[My 5-minute Interview Recording]
https://ucdavis.zoom.us/rec/share/28MEV7BEd3POc64FSOsSeFoG0j_DbUdmrv1p2XSzW4CWDbaVP1ySSVO9FX6Isq3E.7sSiiCLhtOSo_mxG


## License

    Copyright Sauvikesh Lal

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.