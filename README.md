# r/Place with video game progression

This project will be a replica of r/place with a twist. In this version, users will engage in an RPG-like experience, starting with 500 pixels. As they place pixels on the canvas, they gain experience points. The twist? Users can level up, unlock special abilities, and engage in pixel battles. It's a blend of collaborative art creation and individual progression.

## Key features and technology representation

- A login and registration system with tokens to identify if a request to the API is valid and who made the request.
- API for pixel placing. Users will have api access via their tokens, so creation of bots on their end is possible.
- An interactive, realtime map for viewing/placing pixels.

Each point addresses authentication, database data, and websocket data respectively

## Possible additions

- A realtime chat service
- Abilitiy to buy credits
- Daily quests to recieve free credits, or experience

## Things I added for HTML deliverable

- index.html (This is the main page that will display the pixel canvas, as well as a place to sign in and register)
- login.html (This is where a user will login with a username and password)
- profile_page.html (This is the profile page where a user will be able to change settings)
- register.html (This is the registration page where a user will be able to register an account)
- get_credits.html (This is the credits page where a user can purchase credits)

## Things I added for CSS deliverable

- I decided to go with SCSS for compiling to css. While we haven't learned this in class, I believe it is better for me for organiziation. **_Styles are also in main.css_**
- I have modified all the page structures to better fit my design.
- I have added a font from google fonts
- I rearranged my repository so that it is easier to manage all my files.
- Added a nav bar, with a mobile friendly collapsable hamburger menu
- Added an image for the profile (this is the only image)
- For the front page I added in a super super dumbed down version of the drawing 
canvas to make sure the style works well on all devices and looks decent (I know javascript wasn't necessary but for styling purposes this was.)

## Things added to javascript deliverable

- (Websocket & Interaction logic) Canvas is now fully functional, with colors, saving/loading to 'database'(local storage), and websocket (france flag and donkey kong)
- (Future Database info) Canvas is also interactable, every pixel you place is stored in the 'database'
- Multiple "maps" can be plugged into the canvas, zooming, and paning works on desktop and mobile.
- Use mouses middle button to scroll around the canvas, and the middle scroll wheel to zoom. Or use your phone.
- (Future Login) Login and Register now have modals and can be used to sign into a user account/create a user account
- The profile page is not done as I am debating if I even want that yet.

## Things added to Service Deliverable
- NodeJS and Express now serve the HTTP side of the application
- Frontend is served by the static middleware
- backend has endpoints for grabbing map, pixel placing, login, and registration.
- Map now updates automatically, so inputs from different people will now be seen live
- backend serves JWT tokens for a user (although they currently aren't used)
- Frontend calls all backend points.
- A 3rd party api call is implemented to pull random colors for you to use. These colors will display in the "game-bar" on the right side of the screen
- Things to note: THIS THING SUCKS ON IOs. Safari is garbage, and should be destroyed.

## Things added in Startup Login
- Users can now register accounts (stored in mongodb)
- Users can now login to accounts (fetched from mongodb)
- Users can now logout of accounts
- Map is now connected to the mongodb 
- You must be logged in to draw to the map
- Websocket also instantly updates map
- There is an issue when you zoom where the pixels will be gray, but are only temporary. So I have disabled zooming for now till I have time to fix it

## Mock picture

![](/docs/mock1.png)
![](/docs/mock2.png)

## Learned stuff

- `<nav>` goes in `<header>`
- Then `<main></main>`
- Then `<footer></footer>`
- The deploy script isn't actually that complicated
