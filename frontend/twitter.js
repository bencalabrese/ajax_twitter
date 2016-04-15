var FollowToggle = require('./follow_toggle');

$(function() {
  $('.follow-toggle').each(function(idx, button){
    var currButton = new FollowToggle(button);
  });
});
