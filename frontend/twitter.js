var FollowToggle = require('./follow_toggle');
var UsersSearch = require('./users_search');

$(function() {
  $('.follow-toggle').each(function(idx, button){
    new FollowToggle(button);
  });

  $('.users-search').each(function(idx, search){
    new UsersSearch(search);
  });
});
