# AuthX
This is a Next Js app that specifically manages the User Authentication (SignIn, SignOut, Session)
  - Netlify Deploy - [**https://authguardian.netlify.app**](https://authguardian.netlify.app)
<br>

## Getting Started
  - ### Setup
    - Clone the git repo and install the dependencies
    
      ```bash
      git clone https://github.com/cosmicwhiz/nextjs-authx.git
      cd nextjs-authx
      npm install
      ```
    - Create a copy of `.env.example` file and rename it to `.env`
    - Create your google client id and secret
      - Go to [**console.cloud.google.com**](https://console.cloud.google.com)
      - [**Create**](https://developers.google.com/workspace/guides/create-project) a Google Cloud Project
      - [**Configure**](https://developers.google.com/workspace/guides/configure-oauth-consent#configure_oauth_consent_register_your_app) OAuth Consent Screen and register your app
        You can leave the Scopes as default for now
      - [**Create**](https://developers.google.com/workspace/guides/create-credentials#oauth-client-id) OAuth clientID credentials
        - Add URI **http://localhost:3000** in the `Authorized JavaScript origins`
        - Add **http://localhost:3000** and **http://localhost:3000/api/auth/callback/google** in the `Authorized redirect URIs`
      - Copy the `clientID` and `clientSecret` from the right side of the page and replace the values of environment variables
    - [**Create and setup**](https://www.mongodb.com/docs/atlas/getting-started/#create-an--account.) a **MongoDB Atlas** cluster URI and replace `MONGODB_URI` in the `.env`
    - Go to [**OpenSSL**](https://www.cryptool.org/en/cto/openssl)
        - Write the command: `openssl rand -base64 32` in the terminal
        - Copy the encoded string and replace the `NEXT_AUTH_SECRET` with in the `.env`
    
  - ### Run the development server
    ```bash
    npm run dev
    ```
    Open [**http://localhost:3000**](http://localhost:3000) with your browser to see the result
<br>

## Major Dependencies
  - [**next-auth**](https://next-auth.js.org/getting-started/introduction) is used to manage the following tasks:
    
    - Sign In using Google Provider
    - Sign Out
    - Browser Session to keep the user logged in during the session
<br>

## Thank You
If you find this useful, feel free to contribute to this project by adding more functionality or finding any bugs 🤝

## You can also donate! 💸
Metamsk Account Address: 0x2726c81f38f445aEBA4D54cc74CBca4f51597D17
