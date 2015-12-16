// var articleView = {};
//
// articleView.index = function() {
//   var _renderAll = function() {
//     $articles = $('#articles');
//     $articles.show().siblings().hide();
//     $('#spinner').hide();
//     Article.all.forEach(function(article) {
//       $articles.append(articleView.render(article));
//     });
//   };
//
//   if (articleView.template) {
//     _renderAll();
//   } else {
//     $.get('/templates/article.html', function(data, msg, xhr) {
//       articleView.template = Handlebars.compile(data);
//       _renderAll();
//     });
//   }
// };
