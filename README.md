# Urban Trees

This is a project demonstrating a scroll technique similar to [this site](https://www.chelseacollective.com/).

## Project Requirements

- The container titled “scene” should be replaced with different content (urban or trees)
- This action must be triggered by mouse wheel scroll or up / down arrow keys
- Address bar must reflect the change in location (www.domain.com/trees, www.domain/urban) and visiting these URLs should bounce the user to that location
- Page title must reflect the change in location ("Urban" or "Trees")
- Forward and back buttons must work successfully
- Header and footer sections must remain constant through the user journey

#### Stretch Goals

- Layout changes
- CSS or JS driven animations between location transitions

## Technology Used

I built a Node.js backend to serve the HTML files as a web app, hosted on Heroku. I used Hapi.js to set up simple endpoints (`'/urban'` and `'/trees'`), and included some simple server tests in Tape.

I used jQuery on the frontend, including the jQuery Mousewheel plugin for capturing scroll events more accurately. The TweenMax library was useful for creating animated transitions between the pages.

## Points of Interest

#### Capturing Scroll Events

The jQuery event listener for scrolling (`.scroll()`) does not work for this project, since the scene is set to display at 100% height (thus there is nowhere to scroll). So in order to capture scroll movements regardless of the scene height, I used the jQuery Mousewheel plugin, which simply registers movements of the mousewheel. With this plugin I am also able to tell the direction of the scroll by checking the `wheelDelta` value.

Unfortunately this plugin does not work with Firefox, so to deal with this I used the `DOMMouseScroll` event listener.

#### Manipulating Broswer History

To change the URL displayed without reloading the page, I used a method called `pushState()`, from the HTML5 browser history API. This method edits the URL when triggered by certain event listeners.

I used this in conjunction with the `onpopstate` event handler, for ensuring the correct functioning of the back and forward buttons. On pressing the back or forward buttons, I reloaded the page to ensure content was displayed correctly.

#### Animated transitions

To create the animated transitions, I used the TweenMax library. It allowed me to simply reset and transition between sets of CSS properties.
