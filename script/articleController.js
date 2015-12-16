var articlesController = {};

articlesController.index = function() {
  Article.loadAll(articleView.index); // make sure you include in html <script>

};
