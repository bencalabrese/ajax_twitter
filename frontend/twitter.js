var FollowToggle = require('./follow_toggle');

$(function() {
  $('.follow-toggle').each(function(idx, button){
    new FollowToggle(button);
  });
});
