function TweetCompose(form) {
  this.$form = $(form);

  this.$form.on("submit", this.submit.bind(this));
}

TweetCompose.prototype.submit = function (event) {
  event.preventDefault();

  var formData = this.$form.serializeJSON();
  this.$form.find(":input").prop("disabled", true);

  $.ajax({
    url: "/tweets",
    method: "POST",
    dataType: "json",
    data: formData,
    success: this.handleSuccess.bind(this)
  });

};

TweetCompose.prototype.handleSuccess = function (tweet) {
  this.clearInput();
  this.$form.find(":input").prop("disabled", false);

  var $li = $("<li>");
  $li.text(JSON.stringify(tweet));

};

TweetCompose.prototype.clearInput = function () {
  this.$form.find(":input").val("");
};

module.exports = TweetCompose;
