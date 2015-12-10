var blogStats = {};
var articles = [];
var authors = [];
var totalNumberOfWords = [];
var totalWordCount;


$.getJSON( 'script/hackerIpsum.json',function ( data ) {


  blogStats.pluck = function(key, val) {
    var plucked = val.map(function(item) {
      return item[key];
    });
    return plucked;
  };

  blogStats.authorCount = function () {
    var authorsUnique = blogStats.pluck('author', data);
    var $uniqueAuthors = $.unique(authorsUnique).length;
    authors.push($uniqueAuthors);
    $('#stats').append('<p>Number of Authors: ' + authors + '</p>');
    console.log(authors);
  };
  blogStats.articlesCount = function() {
    articles.push(data.length);

    $('#stats').append('<p>Number of Articles: ' + articles + '</p>');
    console.log(articles);
  };

  blogStats.add = function(a, b) {
    return a + b;
  };

  blogStats.average = function(a, b) {
    return a / b;
  };

  blogStats.totalWords = function() {
    totalNumberOfWords = blogStats.pluck('markdown', data);
    lengthOfWords = totalNumberOfWords.map(function(str) {
      str = str.replace('##', '');
    });
    lengthOfWords = totalNumberOfWords.map(function(item) {
      return item.split(' ').length;
    });

    totalWordCount = lengthOfWords.reduce(blogStats.add);
    console.log('total ' + totalWordCount);
    $('#stats').append('<p>Total number of words: ' + totalWordCount + '</p>');

  };

  blogStats.averageWords = function() {
    var averageTotal = blogStats.average(totalWordCount, data);
    $('#stats').append('<p>Average words per post: ' + averageWords + '</p>');
  };


  blogStats.authorCount();
  blogStats.articlesCount();
  blogStats.totalWords();

});
