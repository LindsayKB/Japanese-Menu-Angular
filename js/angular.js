var app = angular.module("JapaneseMenu", []);

app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [{
    name: 'Edamame',
    description: 'Steamed Edamame served with soy sauce',
    price: 4.00,
	url: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Edamame_by_Zesmerelda_in_Chicago.jpg'
  }, {
    name: 'Chicken Kaarage',
    description: 'Deep fried chicken with sweet and spicy sauce',
    price: 9.95,
	url: 'https://static01.nyt.com/images/2018/07/25/dining/HK-karaage-horizontal/merlin_141075300_74569dec-9fc2-4174-931d-019dddef3bb8-articleLarge.jpg'
  }, {
    name: 'Vegetable Tempura',
    description: 'Various vegetables lightly fried and served with soy sauce.',
    price: 6.99,
	url: 'https://static01.nyt.com/images/2013/10/23/dining/23JPFLEX1/23JPFLEX1-articleLarge.jpg'
  }];

  $scope.ramens = [{
    name: 'Tonkotsu',
    description: '2 pieces chashu (house-made pork shoulder), chopped green onion, cloud ear mushrooms, sesame seeds and seaweed.',
    price: 9.80,
	url: 'https://s3-media0.fl.yelpcdn.com/bphoto/o0CQt_Ki3SKPsGRjQDgrNA/o.jpg'
  }, {
    name: 'Kuro Ma-Yu',
    description: 'Original pork bone broth seasoned with flame-roasted garlic oil. Topped with 2 pieces of chashu, bean sprouts, green onion, cloud ear mushrooms and sesame seeds.',
    price: 11.00,
	url: 'https://s3-media0.fl.yelpcdn.com/bphoto/uAjnEkHY59MbfnxZ-ZhERA/o.jpg'
  }, {
    name: 'Veggie Ramen',
    description: 'Flame roasted tomato and soy milk based soup with spinach noodles and a dash of pesto. Topped with 2 pieces tofu with broccoli, paprika and micro greens.',
    price: 12.00,
	url: 'https://s3-media0.fl.yelpcdn.com/bphoto/SeIsf52urxyFGa5xw2dlLg/o.jpg'
  }];
  $scope.sushis = [{
    name: 'Rainbow Roll',
    description: 'California roll, smelt egg, assorted fish',
    price: 13.99,
	url: 'https://i.ytimg.com/vi/I-W3jLmaMRw/maxresdefault.jpg'
  }, {
    name: 'Y2K Roll',
    description: 'Crab meat and avocado inside. Salmon on top.',
    price: 13.99,
	url: 'https://www.gannett-cdn.com/-mm-/8886fbfc43984dda399761692836a2e661a3e2bc/c=0-73-1406-864/local/-/media/2016/08/19/Camarillo/wp-PVCS-focus805-962-Y2K.jpg'
  }, {
    name: 'Spider Roll',
    description: 'Lightly fried soft shell crab, avocado, green salad & gobo',
    price: 12.99,
	url: 'https://i.ytimg.com/vi/DiaY-TPvDWE/maxresdefault.jpg'
  }];
}]);