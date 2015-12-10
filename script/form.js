function previewPost(event) {
  event.preventDefault();
  var title = $('#title').val();
  var author = $('#author').val();
  var authorUrl = $('#authorUrl').val();
  var category = $('#category').val();
  var publishedOn = $('#publishedOn').val();
  var body = $('#body').val();
  body = marked(body);

  var stored = {title: title, author: author, authorUrl: authorUrl, category: category, publishedOn: publishedOn, body: body};

  var newPost = new Article(stored);
  var storedArt = JSON.stringify(stored);
  $('#preview').append(newPost.toHTML());
  $('#article-json').text(storedArt);

};

$(document).ready(function() {
  $('#newArticle').submit(previewPost);
});
