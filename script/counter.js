var blogStats = {};
var articles = [];
var authors = [];
var totalNumberOfWords = [];
var filteredArray = [];
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
      return str.replace('##', '').split(' ').length;
    });

    filteredArray.push(lengthOfWords);

    console.log(lengthOfWords);

    totalWordCount = lengthOfWords.reduce(blogStats.add);
    console.log('total ' + totalWordCount);
    $('#stats').append('<p>Total number of words: ' + totalWordCount + '</p>');

  };

  blogStats.authorNames = function() {
    var numofArticles = {};
    var countArticles = 0;
    var countWordsperAuthor = 0;
    var numofWords = 0;

    var authorsUniqueR = blogStats.pluck('author', data);
    var authorsArticle = blogStats.pluck('markdown', data);
    var uniqueAuthorsR = $.unique(authorsUniqueR);


/*
    console.log(data[0].markdown);
    for(var j=0; j<data.length; j++){
      if(data[j].author == 'Dr. Tressie Kuphal')
      {
        countArticles++;
      }
    }
    console.log(countArticles);
*/

    uniqueAuthorsR.forEach(function(entry) {
      console.log(entry);
      $('#stats').append('<h1>'+entry+'</h1>');
      data.forEach(function(k) {
        if(k.author == entry)
        {
          countWordsperAuthor += k.markdown.replace('##', '').split(' ').length;
          countArticles++;
        }
      });

      $('#stats').append('<p>Number of articles: '+countArticles+'</p>');
      $('#stats').append('<p>Words written: '+countWordsperAuthor+'</p>');

      countArticles=0;
      countWordsperAuthor=0;
    });
  };


  blogStats.authorCount();
  blogStats.articlesCount();
  blogStats.totalWords();
  blogStats.authorNames();


});
