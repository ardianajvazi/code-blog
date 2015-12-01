// var blogArticles = [];

var Article = function(props) {
  this.title = props.title;
  this.author = props.author;
  this.authorUrl = props.authorUrl;
  this.body = props.body;
  this.publishedOn = props.publishedOn;
};


Article.prototype.toHTML = function() {
  var $template = $('#template').clone();
  $template.removeAttr('id');
  $template.find('.title').html(this.title);
  $template.find('.author').html('<a href="' + this.authorUrl + '">' + 'By: ' + this.author + '</a>' + ' date ' + this.publishedOn);
  $template.find('.body').html(this.body);
  // $template.find('.publishedOn').html(this.publishedOn);
  $('main').append($template);
};

blog.rawData.sort(function (a, b) {
  if (a.publishedOn < b.publishedOn) {
    return 1;
  }
  if (a.publishedOn > b.publishedOn) {
    return -1;
  }
  return 0;
});

for (var i = 0; i < blog.rawData.length; i++) {
  var temp = new Article(blog.rawData[i]);
  temp.toHTML();

};
