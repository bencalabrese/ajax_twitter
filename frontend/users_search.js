var FollowToggle = require("./follow_toggle");

function UsersSearch(el) {
  this.$el = $(el);
  this.$input = this.$el.find('input');
  this.$ul = this.$el.find('ul');

  this.$input.on('input', this.handleInput.bind(this));
}


UsersSearch.prototype.handleInput = function (event) {
  $.ajax({
    url: '/users/search',
    method: 'GET',
    dataType: 'json',
    data: { query: this.$input.val() },
    success: function(data) {
      this.renderResults(data);
    }.bind(this)
  });
};


UsersSearch.prototype.renderResults = function (data) {
  this.$ul.empty();

  data.forEach(function(datum) {
    this.renderUserLI(datum);
  }.bind(this));
};

UsersSearch.prototype.renderUserLI = function (datum) {
  var user = datum.user;
  var followState = datum.followed ? "followed" : "unfollowed";

  var $a = $("<a>" + user.username + "</a>");
  $a.attr('href', user.id);

  var $button = $('<button>');
  $button.addClass('follow-toggle');

  var buttonOptions = { userId: user.id, followState: followState };
  new FollowToggle($button, buttonOptions);

  var $li = $("<li>").append($a).append($button);

  this.$ul.append($li);
};

module.exports = UsersSearch;
