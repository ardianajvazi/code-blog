function previewPost(event) {
  event.preventDefault();
  var title = $('#title').val();
  var author = $('#author').val();
  var authorURL = $('#authorURL').val();
  var category = $('#category').val();
  var publishedOn = $('#publishedOn').val();
  var body = $('#body').val();
  console.log(body);
  $('#preview').append(marked(body));
  var stored = {title: title, author: author, authorUrl: authorUrl, category: category, publishedOn: publishedOn, body: body};
  console.log()
  var newPost = new Article.prototype(stored);
  newPost = newPost.toString();
  console.log(newPost);
  $('#preview').append(newPost.toHTML());
  console.log(newPost);
  var storedArt = JSON.stringify(stored);
  $('#article-json').append(storedArt);
};

$(document).ready(function() {
  $('#newArticle').submit(previewPost);
});
