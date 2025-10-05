# Digital Song Sheet
## Background
This project started as an easier way for people to be able to read the lyrics to hymns during ourdoor christmas nativity services where it's dark and possibly raining and/or windy.
Originally paper programmes were used, but could easily degrade with damp, or be blown away in the wind.

It uses React as the front end and is hosted using Firebase. 

It is currently used at Christmas (Nativity service) and Easter (Good Friday service) and serves around 40-50 people each time.

## Features

### Main View
The app can display three types of screens:
- Basic title screen
  - Large main title
  - Smaller sub-title (optional)
  - Centered on the screen
- Bible reading
  - Large main title
  - Smaller sub-title (optional)
  - Reading text
  - Copyright information
  - Centered horizontally
  - Aligned to top for scrolling
- Song lyrics
  - Large main title
  - Song lyrics arranged for continuous scrolling
    - show all choruses
  - Copyright information
  - Centered on the screen
  - Aligned to top for scrolling

The entire interface reacts the the user's dark mode preferences.

### Left and Right Arrows
Moves the user to the previous and next items in the service plan

### Jump ahead
Displays the titles of each item in the service plan.
Allows the user to jump to current item if page reloads.

### Share
Displays QR code to share access to app with another person

### Font settings
There is a drawer for font settings which allows the user to change between five font styles and modify the size to suit their needs.


