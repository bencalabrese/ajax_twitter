function FollowToggle (el) {
  this.$el = $(el);
  this.userId = this.$el.attr('data-user-id');
  this.followState = this.$el.attr('data-initial-follow-state');
  this.render();
  this.$el.on("click", this.handleClick.bind(this));
}

FollowToggle.prototype.TOGGLE_OPTIONS = {
  followed: "unfollowed",
  unfollowed: "followed"
};

FollowToggle.prototype.render = function () {
  if(this.followState === "followed") {
    this.$el.text('Unfollow!');
  }else {
    this.$el.text('Follow!');
  }
};

FollowToggle.prototype.handleClick = function (event) {
  event.preventDefault();

  var options = {
    url: "/users/" + this.userId + "/follow",

    success: function() {
      // debugger
      this.followState = this.TOGGLE_OPTIONS[this.followState];
      this.render();
    }.bind(this),

    error: function() {
      // debugger
      this.followState = this.TOGGLE_OPTIONS[this.followState];
      this.render();
    }.bind(this),

    dataType: "json"
  };

  if (this.followState === "followed") {
    options.method = "DELETE";
  } else {
    options.method = "POST";
  }

  $.ajax(options);
};


module.exports = FollowToggle;
