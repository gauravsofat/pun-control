var punify = function() {
  var twit = require('twit');
  var config = require('./config.js'); // import config file containing keys and tokens

  var twitter = new twit(config);
  var content = 'Adventure. Excitement. A Jedi craves not these things.';
  twitter.get('search/tweets', {
    q: 'adventure OR excitement -filter:retweets',
    count: 1,
    result_type: 'recent',
    tweet_mode: 'extended',
    lang: 'en'
  }).catch(function(err) {
    console.log('Caught Error', err.stack);
  }).then(function(result) {
    var tweet = result.data.statuses[0];
    var tweetID = tweet.id_str;
    var username = tweet.user.screen_name;
    twitter.post('statuses/update', {
      status: '@' + username + ' ' + content,
      in_reply_to_status_id: tweetID
    }, function(err, data, response) {
      if (err) {
        console.log('Caught Error', err.stack);
      }
      //console.log(data);
    })
  });
}

punify(); // call function to punify the tweet
