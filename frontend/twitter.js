var FollowToggle = require('./follow_toggle');
var UsersSearch = require('./users_search');
var TweetCompose = require('./tweet_compose');

$(function() {
  $('.follow-toggle').each(function(idx, button){
    new FollowToggle(button);
  });

  $('.users-search').each(function(idx, search){
    new UsersSearch(search);
  });

  $('.tweet-compose').each(function(idx, form){
    new TweetCompose(form);
  });
});
