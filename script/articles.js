var blogArticles = [];

var Article = function(props) {
  this.title = props.title;
  this.author = props.author;
  this.body = props.body;
  this.publishedOn = props.publishedOn;
};


Article.prototype.toHTML = function() {
  var $template = $('#template').clone();
  $template.removeAttr('id');
  $template.find('.title').html(this.title);
  $template.find('.author').html(this.author);
  $template.find('.body').html(this.body);
  $template.find('.publishedOn').html(this.publishedOn);
  $('main').append($template);
};

for (var i = 0; i < blog.rawData.length; i++) {
  var temp = new Article(blog.rawData[i]);
  temp.toHTML();

};
