function FollowToggle (el) {
  this.$el = $(el);
  this.userId = this.$el.attr('data-user-id');
  this.followState = this.$el.attr('data-initial-follow-state');
  this.render();
  this.$el.on("click", this.handleClick.bind(this));
}

FollowToggle.prototype.TOGGLE_OPTIONS = {
  unfollowing: "unfollowed",
  following: "followed"
};

FollowToggle.prototype.render = function () {
  switch (this.followState) {
    case "followed":
      this.$el.text('Unfollow!');
      this.$el.prop("disabled", false);
      break;
    case "unfollowed":
      this.$el.text('Follow!');
      this.$el.prop("disabled", false);
      break;
    case "unfollowing":
      this.$el.text('Unfollowing...');
      this.$el.prop("disabled", true);
      break;
    case "following":
      this.$el.text('Following...');
      this.$el.prop("disabled", true);
      break;
  }
};

FollowToggle.prototype.handleClick = function (event) {
  event.preventDefault();

  var options = {
    url: "/users/" + this.userId + "/follow",

    success: function() {
      this.followState = this.TOGGLE_OPTIONS[this.followState];
      this.render();
    }.bind(this),
    
    dataType: "json"
  };

  if (this.followState === "followed") {
    options.method = "DELETE";
    this.followState = "unfollowing";
  } else {
    options.method = "POST";
    this.followState = "following";
  }

  this.render();

  $.ajax(options);
};


module.exports = FollowToggle;
