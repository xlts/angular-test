app.controller('ArticlesController', [
    '$scope',
    'articles',
    function ($scope, articles) {

        //$scope.articles = articles.articles;

        $scope.articles = [
            { id: 1, author: 'psitnik', title: 'art1', text: 'art1_text asdasdsadsadsadsadsadsa sdsadasdas as gregefwdasdas dasdasdasdsadsadsadsadsadsa sdsadasdas as gregefwdasdas dasdasdasdsadsadsadsadsadsa sdsadasdas as gregefwdasdas dasd' },
            { id: 2, author: 'psitnik', title: 'art2', text: 'art2_text sjdsjkdsa9disaidsaio dsdi0sid02id02id02id du02dui02idi0 2 sjdsjkdsa9disaidsaio dsdi0sid02id02id02id du02dui02idi0 2 sjdsjkdsa9disaidsaio dsdi0sid02id02id02id du02dui02idi0 2' },
            { id: 3, author: 'psitnik', title: 'art3', text: 'art3_text asdasdghhhh4h4h44h4h4h4h4h4lhp4h44h4h[4h4lh[2422323113311 art3_text asdasdghhhh4h4h44h4h4h4h4h4lhp4h44h4h[4h4lh[2422323113311 art3_text asdasdghhhh4h4h44h4h4h4h4h4lhp4h44h4h[4h4lh[2422323113311' }
        ];

    }]);

app.controller('ArticleItemController', [
    '$scope',
    '$stateParams',
    'articles',
    function ($scope, $stateParams, articles) {

        $scope.articles = [
           { id: 1, author: 'psitnik', title: 'art1', text: 'art1_text asdasdsadsadsadsadsadsa sdsadasdas as gregefwdasdas dasdasdasdsadsadsadsadsadsa sdsadasdas as gregefwdasdas dasdasdasdsadsadsadsadsadsa sdsadasdas as gregefwdasdas dasd' },
           { id: 2, author: 'psitnik', title: 'art2', text: 'art2_text sjdsjkdsa9disaidsaio dsdi0sid02id02id02id du02dui02idi0 2 sjdsjkdsa9disaidsaio dsdi0sid02id02id02id du02dui02idi0 2 sjdsjkdsa9disaidsaio dsdi0sid02id02id02id du02dui02idi0 2' },
           { id: 3, author: 'psitnik', title: 'art3', text: 'art3_text asdasdghhhh4h4h44h4h4h4h4h4lhp4h44h4h[4h4lh[2422323113311 art3_text asdasdghhhh4h4h44h4h4h4h4h4lhp4h44h4h[4h4lh[2422323113311 art3_text asdasdghhhh4h4h44h4h4h4h4h4lhp4h44h4h[4h4lh[2422323113311' }
        ];

        $scope.article = $scope.articles[$stateParams.id - 1];
       // $scope.articleItem = articles.articles[$stateParams.id];
    }]);

app.controller('AboutController', [
    '$scope',
    function ($scope) {
        
        $scope.aboutText = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.';
    }]);