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

- Canvas is now fully functional, with colors, saving/loading to 'database'(local storage), and websocket to connect to 'database'
- Multiple "maps" can be plugged into the canvas, zooming, and paning works on desktop and mobile.
- Login and Register now have modals and can be used to sign into a user account/create a user account
- Login and registering wi



## Mock picture

![](/docs/mock1.png)
![](/docs/mock2.png)

## Learned stuff

- `<nav>` goes in `<header>`
- Then `<main></main>`
- Then `<footer></footer>`
- The deploy script isn't actually that complicated
