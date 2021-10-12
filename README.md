# Vue Tailwind HackerNews and The Movie Database feed dashboard

> ✨ Bootstrapped with Create Snowpack App (CSA).

## Available Scripts

### npm run start or yarn start

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### npm run build

Builds a static copy of your site to the `build/` folder.
Your app is ready to be deployed!

### npm run createConfig or yarn createConfig

Using NodeJS, this file will create a snowpack.config.mjs file for you that has necessary settings to run snowpack and the build and start commands for local dev. It also serves as a place to provide environmental variables in Snowpack. This build step omits the environmental variables from a git repo since .env files will be ignored, but still allows their use in Netlify builds. Local dev uses your .env file and Netlify will pull in your custom variables you enter.

### npm run netlify or yarn netlify

This project was designed to run on Netlify, and this command will simply combine the build environment command with the build command so you only need one command on Netlify.

## Setup

### Supabase

Create a .env file and place your credentials. This will write out and expose your Supabase URL and API key in your code, but will allow you to not write it to Github.
[See the Supabase documentation for Vue](https://supabase.io/docs/guides/with-vue-3)

### The Movie Database

The Movie Database allows developers to make API calls using a credential obtained by creating an account and logging in.
[See the Movie Database documentation](https://developers.themoviedb.org/4/getting-started/authorization)

### Hacker News

Hacker News allows unauthenticated requests to re-create the app from the Firebase database.
[See the Hacker News API documentation](https://github.com/HackerNews/API)

### Local Development

For local development, you may wish to import your TMDB API key or token into your project from your environment. In the MovieDB.vue component, delete the Supabase call at the top of the script, and uncomment the data['TMDB'] line.

In your .env file add each of the following:  
SUPABASE_URL=  
SUPABASE_ANON_KEY=  
TMDB_TOKEN=  

Or you can include a TMDB_API_KEY= and include it at the end of your url. 

### Dashboard custom feeds or user data

Delete the folder for external-api and rename the parent components, and this project might provide a very basic wrapper for different use cases. This project could be used as a general guide for how to set up some common styles of API calls and display basic results.

### API keys and tokens

The approach taken here for security around exposing API keys and tokens includes keeping track of and rotating the keys themselves rather than securing them in the code base. This project is set up to not expose keys in Github, and also allow easy updates to a rotated key without having to modify the project code. It does not keep keys secret from client side code. A better approach would be to protect these keys using backend servers, or a hybrid combination of both approaches, especially for more sensitive data.