var checkCat = [];

var Article = function(props) {
  this.title = props.title;
  this.author = props.author;
  this.authorUrl = props.authorUrl;
  this.category = props.category;
  this.body = props.body;
  this.publishedOn = props.publishedOn;

};


Article.prototype.toHTML = function() {
  var $template = $('#template').clone();
  $template.removeAttr('id');
  $template.find('.title').html(this.title);
  $template.find('.author').html('By: ' + '<a href="' + this.authorUrl + '">' + this.author + '</a>' + ' date ' + this.publishedOn);
  $template.find('.body').html(this.body);
  $template.find('.category').html('Category: ' + this.category);
  $('main').append($template);
};

blog.dropDown = function() {
  for (var i = 0; i < blog.rawData.length; i++) {
    var cate = blog.rawData[i].category;
    checkCat.push(cate);
    // for(var j=0; j<checkCat.length; j++){
    //   if(checkCat[j] != cate)
    //   {
    //     checkCat.push(cate);
    //   }
    // }
  }

  for (var tini = 0; tini < checkCat.length; tini++) {

    var $menu1 = $('.categories').clone();
    $menu1.attr('value', checkCat[tini]);
    $menu1.removeAttr('class').text(checkCat[tini]);
    $('#filterCategories').append($menu1);

  }
};

blog.dropDown2 = function() {
  for (var i = 0; i < blog.rawData.length; i++) {
    var auth = blog.rawData[i].author;
    var $menu2 = $('.authors').clone();
    $menu2.removeAttr('class').text(auth);
    $('#filterAuthors').append($menu2);
  }
};

blog.filterMenu1 = function() {

  $('select[id="filterCategories"]').change(function() {
    $('#filterAuthors').find('option:first').attr('selected', 'selected');
    $('main').find('article').show();
    //alert($(this).val());
    if ($(this).val() !== 'none'){
      $('.category:not(:contains(' + $(this).val() + '))').parent().hide();
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

blog.createArticles = function() {
  for (var i = 0; i < blog.rawData.length; i++) {
    var temp = new Article(blog.rawData[i]);
    temp.toHTML();
  };
  $('#template').remove();
};


blog.hideArticles = function() {
  $('article p:not(:first-child)').hide();
  $('article').on('click', '.read-on', function(event) {
    event.preventDefault();
    $(this).parent().find('p').fadeIn();
    $(this).hide();
  });
};

$(document).ready(function() {
  blog.sortRawDate();
  blog.createArticles();
  blog.hideArticles();
  blog.dropDown();
  blog.dropDown2();
  blog.filterMenu1();
});

//look at data attributes
