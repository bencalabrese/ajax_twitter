function FollowToggle (el) {
  this.$el = $(el);
  this.userId = this.$el.attr('user-id');
  this.followState = this.$el.attr('initial-follow-state');
}


module.exports = FollowToggle;
