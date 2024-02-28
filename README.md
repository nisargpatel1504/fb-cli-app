# FB CLI App

The FB CLI App is a Node.js command-line application designed to fetch user data from Facebook's Graph API at regular intervals while respecting rate limits. It leverages Winston for robust logging capabilities.

## Features

- Fetches basic user information from Facebook's Graph API.
- Implements rate limiting to adhere to Facebook's API usage policies.
- Uses Winston for logging information, warnings, and errors.

## Getting Started

To get a local copy up and running, follow these simple steps:

### Installation

1. Clone the repository:
   -git clone https://your-repository-url/fb-cli-app.git
   -cd fb-cli-app
   
2. npm install

3. Create a .env file in the root directory and add your Facebook Graph API access token:
   -FACEBOOK_ACCESS_TOKEN=YourAccessTokenHere

4. Start program
  -npm start

The app will start fetching user data from Facebook's Graph API at specified intervals, logging the output.

Configuration
You can configure the application behavior and logging level through the .env file:

FACEBOOK_ACCESS_TOKEN: Your Facebook Graph API access token.
LOG_LEVEL: The logging level for Winston ('info', 'warn', 'error').
