var app = angular.module('app', ['ui.router']);

app.config([
'$stateProvider',
'$urlRouterProvider',
function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('articles', {
          url: '/articles',
          templateUrl: 'views/articles.html',
          controller: 'ArticlesController'
      }).state('articleItem', {
          url: '/articles/{id}',
          templateUrl: 'views/article_item.html',
          controller: 'ArticleItemController'
      }).state('home', {
          url: '/home',
          templateUrl: 'views/home.html',
          controller: 'HomeController'
      }).state('about', {
          url: '/about',
          templateUrl: 'views/about.html',
          controller: 'AboutController'
      });

    $urlRouterProvider.otherwise('home');
}]);


app.factory('articles', [function () {
    var o = {
        articles: []
    };
    return o;
}]);