# Pre-work - _Memory Game_

<img src="https://i.imgur.com/ibIlB9Y.gif" width="250" height="250"/>

**Color and Sound Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **Jiawei Zheng**

Time spent: **7** hours spent in total

Link to project: (https://glitch.com/edit/#!/memorygamejiaweizheng1)

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [x] Buttons use a pitch (frequency) other than the ones in the tutorial
- [x] More than 4 functional game buttons
- [x] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [x] Player only loses after 3 mistakes (instead of on the first mistake)
- [x] Game button appearance change goes beyond color (e.g. add an image)
- [x] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Display lives

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](https://i.imgur.com/162guAW.gif)

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.

   [1. developer.mozilla.org for Math.random()
   2. w3schools
   3. stackoverflow]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)

   [A challenge I encountered in creating this submission was that a major bug occured in my script.js.
   The mistakes or lives counter was not being properly incremented and resetted which led to the memory game ending prematurely.
   I had to use the rewind tool provided by glitch to go back to a time in which the lives counter was properly incremented so I could
   compare the code differences and find where the bug was.]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)

   [The first question I have about web development is "how long does it take to finish a typical website?" because I noticed
   that this project actually took me quite a while and I still was not able to finish all optional features I wanted it to have. The second question I
   have is "are these three tools(.html,.js,.css) the best for web development or are there better ones but we were not introduced to
   them in this project?". Thirdly, "how does one create a website of multiple or linked websites" like "are there going to be one .html, .js, and .css for
   each individual website or it is possible to use only one .html, .js, and .css for all the websites?"]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)

   [If I had a few more hours to work on this project, I would have implemented the last optional feature, which would give the user less time
   to repeat back the pattern, into my memory game. Also, I would fix the game buttons so that they stay in the same place when they are pressed and an image shows
   up inside them. Also, I want to make my game more aesthetically pleasing maybe by adding in a background image or using a different font.
   Lastly, I would also want to implenment a difficulty feature in which the user gets to choose how many buttons are available for the memory game]

## License

    Copyright [YOUR NAME]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
