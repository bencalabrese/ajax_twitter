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
    success: function(users) {
      this.renderResults(users);
    }.bind(this)
  });
};


UsersSearch.prototype.renderResults = function (users) {
  this.$ul.empty();
  var self = this;
  users.forEach(function(user) {
    debugger

    var $a = $("<a>" + user.username + "</a>");
    $a.attr('href', user.id);

    var buttonOptions = { userId: user.id };


    var $button = $('<button></button>');
    $button.addClass('follow-toggle');

    var $li = $("<li></li>").append($a);


    self.$ul.append($li);
  });
};

module.exports = UsersSearch;
