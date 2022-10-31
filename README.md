# Noelani's Weekend Redux Feedback Loop

## Description

This app allows a use to rate on a scale from 1 to 5 how they're feeling, how well they're understanding the content, how well they feel supported, then leave any additional comments if they'd like. Each user input is gathered from a seperate page and user is sent to next page when the inputs have been filled and "next" button clicked. When all inputs are taken, a new page will show the client a review of their feedback. When the client submits, that feedback is sent back to the server and stored in a database. The user can then navigate back to the homepage to fill out another feedback form. 

### Prerequsites

- Node.js

## Installation

1. npm install
2. createdb prime_feedback
    psql -d prime_feedback -f data.sql
3. in seperate termianls, npm run server and npm run client

## Usage

1. Click 'start' button to be sent to first form input
2. rate your feelings, click next
3. rate your understanding, click next
4. rate your support level, click next
5. see review of your feedback
6. submit review to server
7. go back to homepage to start again 

## Built With

- Node.js
- JavaScript
- React
- Redux
- SQL 
- HTML
- CSS

