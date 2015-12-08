var checkCat = [];
var checkAuth = [];

var Article = function(props) {
  this.title = props.title;
  this.author = props.author;
  this.authorUrl = props.authorUrl;
  this.category = props.category;
  this.body = props.body || marked(this.markdown);
  this.publishedOn = props.publishedOn;
  blog.articles.push(this);
};

Article.prototype.toHTML = function() {
  var source = $('#entry-template').html();
  var template = Handlebars.compile(source);
  var result = template(this);
  return result;
};

blog.createArticles = function() {
  for (var i = 0; i < blog.rawData.length; i++) {
    var temp = new Article(blog.rawData[i]);

    $('main').prepend(temp.toHTML());
  };
};

blog.dropDown = function() {
  for (var i = 0; i < blog.rawData.length; i++) {
    var cate = blog.rawData[i].category;
    checkCat.push(cate);
  }

  $.each($.unique(checkCat), function(i, value){
    var $menu1 = $('.categories').clone();
    $menu1.attr('value', value);
    $menu1.removeAttr('class').text(value);
    $('#filterCategories').append($menu1);
  });

};

blog.dropDown2 = function() {
  for (var i = 0; i < blog.rawData.length; i++) {
    var cate = blog.rawData[i].author;
    checkAuth.push(cate);
  }

  $.each($.unique(checkAuth), function(i, value){
    var $menu1 = $('.authors').clone();
    $menu1.attr('value', value);
    $menu1.removeAttr('class').text(value);
    $('#filterAuthors').append($menu1);
  });
};

blog.filterMenu1 = function() {

  $('select[id="filterCategories"]').change(function() {
    $('#filterAuthors').find('option:first').attr('selected', 'selected');
    $('main').find('article').show();
    if ($(this).val() !== 'none'){
      $('.category:not(:contains(' + $(this).val() + '))').parent().hide();
    };
  });
};

blog.filterMenu2 = function() {
  $('select[id="filterAuthors"]').change(function() {
    $('#filterCategories').find('option:first').attr('selected', 'selected');
    $('main').find('article').show();
    if ($(this).val() !== 'none'){
      $('.author:not(:contains(' + $(this).val() + '))').parent().hide();
    };
  });
};

blog.sortRawDate = function() {
  blog.rawData.sort(function (a, b) {
    if (a.publishedOn < b.publishedOn) {
      return 1;
    }
    if (a.publishedOn > b.publishedOn) {
      return -1;
    }
    return 0;
  });
};

blog.hideArticles = function() {
  $('article p:not(:first-child)').hide();
  $('article').on('click', '.read-on', function(event) {
    event.preventDefault();
    $(this).parent().find('p').fadeIn();
    $(this).hide();
  });
};

blog.tabDrop = function() {
  $('#aboutTab').on('click', function(event) {
    event.preventDefault();
    $('.tab1').hide();
    $('.tab2').show();
  });
};
blog.contentReturn = function() {
  $('#homeTab').on('click', function(event) {
    event.preventDefault;
    $('.tab2').hide();
    $('.tab1').show();
  });
};

$(document).ready(function() {
  blog.sortRawDate();
  blog.createArticles();
  blog.hideArticles();
  blog.dropDown();
  blog.dropDown2();
  blog.filterMenu1();
  blog.filterMenu2();
  blog.tabDrop();
  blog.contentReturn();
});
