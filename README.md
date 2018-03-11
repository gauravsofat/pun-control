# pun-control
### Description
A Simple Twitter Bot built using the npm twit Twitter API Client. The bot periodically finds recent tweets with the keywords 'adventure' or 'excitement' and replies to the tweet with a quote from Star Wars: The Empire Strikes Back - _'Adventure. Excitement. A Jedi craves not these things.'_
### Installation
__1. Ensure that Node.js and npm have been installed__

Visit the [official downloads page](https://nodejs.org/en/download/) in case of any issue.

__2. Clone the repo__
```bash
git clone https://github.com/gauravsofat/pun-control.git
```
__3. Install Dependencies__
```bash
cd pun-control # Go to the project root directory
npm install
```
__4. Create Your Own Twitter Application__

Follow [this](http://docs.inboundnow.com/guide/create-twitter-application/) guide to create your own Twitter Application to obtain your own API Keys, Secrets and Access Tokens.

__5. Create Config File__

In the project root directory create a file `config.js` which contains your twitter app's access keys and tokens. A typical config.js file should look like this -
```javascript
//config.js

module.exports = {
  consumer_key: '', // insert consumer key (API Key)
  consumer_secret: '',  // insert consumer secret (API Secret)
  access_token: '', //  insert access token
  access_token_secret: '' // insert access token secret
}
```
__6. Run An Instance__
```bash
cd pun-control # Go to the project root directory
npm start
```
Note: An individual call to `npm start` will run the bot _only once._ To ensure that it keeps running you must schedule this task with a tool like cron.
