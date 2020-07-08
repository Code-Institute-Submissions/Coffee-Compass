# Coffee Compass
Coffee Compass is a 4 page website that allows users to find coffee shops near them, navigate to them and provides entertainment in the form of a game while they wait for the coffee. They can also keep track of where they went to, what they ordered and how they rated the service by adding it to the website DOM.

The goal of this project is to showcase the different technologies I used in this project such as google API’s, HTML, CSS and my knowledge of Vanilla Javascript.

Visit the website here:
[Cofeee Compass](https://xander-webdev.github.io/Coffee-Compass/index.html)
Visit the repo here:
[Cofeee Compass Repo](https://github.com/xander-webdev/Coffee-Compass)


## UX

### Strategy
My idea for this web application came from 3 problems I had. The first is that I'm a creature of habit and love to frequent the same places for my coffee needs. I needed new places to get coffee. The second is that I hate the wait that seems to take an enternity when the coffee shop is busy. I needed entertainment during long waits for orders. The third problem is remembering what I had the last time and trying something new this time around. I needed a way to remember what I had the last time and rate the service and overall atmosphere.

My UX strategy is to design a website for users who want to find cool coffee shops near them that they didn’t know before. It also allows them to play a fun game while waiting for their coffee and when they have their coffee they are then able to write a little note and a review for next time to remind themselves of where they have been, what they ordered and the rating of the service out of 10. 


The layout will contain 4 pages. 
The first being an instructional page, the second the maps allowing the user to find a coffee shop near their current location, the 3rd being the rock paper scissors game (with a twist) and lastly the review page where the user is able to leave a review for themselves to remind them of where they were the last time.


The following link shows the initial mockups for the project 
[Cofeee Compass Wireframe](https://ee18e533-dddb-4f8c-924e-a2a42bd4a058.ws-eu01.gitpod.io/files/download/?id=9c1d06b4-f7a7-45fc-bfa9-8b51dddd82cc)

## User Stories
- As a User, I must have clear instructions on how to use the website
- As a User, I must be able to search for any coffee shop near my locations
- As a User, I must be able to use the website from my mobile with ease
- As a User, I must have an option play a game while I wait for my coffee
- As a User, I must be able to leave a personal review for each place that I’ve been to so that I can know where I have gone to and where I haven’t gone to,how the service was and what I ordered every time I’ve gone there.


# Features
## Existing Features
- Navbar which is fixed to the top for easy navigation. 
    - Includes: Home|Find Coffee|Entertainment|Review.
    - Each of these navigates the user throughout the application.
- Home:
    - On the home page, I have dymanically added a class that makes the instructional divs animate to incase the user clicks on them. This prompts the user to continue to read the instructions and navigate to the navigational button at the bottom of the page.
    - The navigation button at the bottom is huge and very obvious. 
- Find Coffee:
    - The google map is added into the application with the google maps API. I added in an auto locate button incase the user wants to find their location again once they have moved or simply to refresh the map.
    - The once the user allows the geolocation the coffee shops near the users location drop onto the screen adding a nice effect.
    - 

### Features to impliment
- Local storage of the review to the DOM once it get's posted
- Add directions to the google map so that users can navigate to the cafe/coffee shop without leaving the website
- Add an additional game so that the user has more options of what to play while they wait for their coffee

## Technologies
Technologies I used in this project are:
- HTML5
    - for the layout and general structure of the website
- CSS3
    - for the design aspect and adding the styling for each of the pages
- Vanilla Javascript
    - for the functionality interacting with the Google Maps API, addiing the logic to the rock paper scissors functions, adding the logic to the review page and other bits of logic throughout the application.
- Git 
    - for pushing commits and changes to the project
- Github
    - for storing the code, hosting it and adding changes to it.

### Frameworks
- Bootstrap

## Resources
- Travery Media Youtube Channel 
- Travery Media Udemy Course "Javascript from the beginning"
- Google Maps Documentation
- Bootstrap Documentation
- Stack Overflow
- CI Slack Group


## Testing
- I've implemented Jasmine Testing for the Rock Paper Scissors game and all tests have passed the required tests.
- I ran the CSS through a CSS checker and no errors found [CSS Checker](https://jigsaw.w3.org/css-validator/)
- I ran the code through a HTML checker and no errors found with only warnings for no "H" titles in certain sectiona elements. This was left empty due to them being dymanically filled with Javascript. [HTML Checker](https://validator.w3.org/nu/#l96c39)
- There were nono errors found when running the Javascript through [JSHint](https://jshint.com/) only warnings that I was using ES6 syntax that may not be compatable to all browsers.
- Throughout the entire project, I was also using console.log's to ensure JS code was working as well as inspecting Chrome Developer Tools and display settings to ensure that the site was responsive.

## Deployment
- Open the GitHub console
- Type in "Python3 -m http.server"
- Open up port 8000

# Credits
## Content
### Colors
- logo color:#CC9B65
- kobicha: #72401C
- coyote brown: #8A5D3C
- jet black:#322C25
- smokey black:#0A0705;
- background:#FFE9D1;

## Media
Rock, Paper, Lizard, Spock and Scissors were taken from this [Quora Post](https://www.quora.com/What-are-other-variations-of-rock-scissors-paper-hand-game)
[Pixlr Online Photoshop](https://pixlr.com/x/)
[Online PNG Tools](https://onlinepngtools.com/create-transparent-png)
[Font Awesome](https://fontawesome.com/)

## Acknowledgements

These websites provided me with invaluable information:

https://www.w3schools.com/
https://www.bestcssbuttongenerator.com/
https://coolors.co/
https://css-tricks.com/examples/hrs/
https://developer.mozilla.org/
https://udemy.com/

I consulted a few developer's in different fields regarding the google maps API and other pieces of functionality of the application. This was absolutely invaluable as they gave me great advice on how to go about implimenting the functions I wanted. 

I also used Travery Media's Udemy Course on Javascript to help me build the review page.

And ofcourse, Code Institute, the tutors, the mentors and the course material. 



