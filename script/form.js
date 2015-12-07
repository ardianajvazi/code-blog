var newPost = function(post) {
  this.title = post.title;
  this.author = post.author;
  this.authorUrl = post.authorUrl;
  this.category = post.category;
  this.body = post.body;
  this.publishedOn = post.publishedOn;
};

newPost.prototype.toHTML = function(tagTarget) {
  var $templatePost = $('#previewArticle').clone();
  $templatePost.removeAttr('id');
  $templatePost.find('.title').html(this.title);
  $templatePost.find('.author').html('By: ' + '<a href="' + this.authorUrl + '">' + this.author + '</a>' + ' date ' + this.publishedOn);
  $templatePost.find('.category').html('Category: ' + this.category);
  $templatePost.find('.body').html(this.body);
  $('section').append($templatePost);
};

blog.createPost = function() {
  for (var i = 0; i < blog.rawData.length; i++) {
    var tempPost = new newPost(blog.rawData[i]);
    tempPost.toHTML();
  };
  $('#previewArticle').remove();
};
