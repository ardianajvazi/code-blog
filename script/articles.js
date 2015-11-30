var blogArticles = [];

var Article = function(props) {
  this.title = props.title;
  this.author = props.author;
  this.body = props.body;
  this.publishedOn = props.publishedOn;
};

Article.prototype.toHTML = function() {
  return "<article>" +
  "<h1>" + this.title +"</h1>"
 "<h2>" + this.author +"</h2>"
 "<p>" + this.body +"</p>"
 "<p>" + this.publishedOn +"</p>"
  + "</article>"
};

for (var i = 0; i < blog.rawData.length; i++) {
  blog.articles.push(new Article(blog.rawData[i]));
}

console.log(blog.articles);

//
// var blog = new Article (blog);
// console.log(blog);
