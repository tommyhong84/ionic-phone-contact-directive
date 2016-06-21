angular.module('starter.controllers', [])

  .controller('DashCtrl', function ($scope) {
  })

  .controller('ChatsCtrl', function ($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.contacts = [
      {
        id: 1,
        name: 'Jackey',
        description: 'hhhhhhhhhhhh'
      },
      {
        id: 2,
        name: 'Cassi',
        description: 'hhhhhhhhhhhh'
      },
      {
        id: 3,
        name: '李浩周',
        description: 'hhhhhhhhhhhh'
      },
      {
        id: 4,
        name: 'Tommy',
        description: 'hhhhhhhhhhhh'
      },
      {
        id: 5,
        name: 'Hihku',
        description: 'hhhhhhhhhhhh'
      },
      {
        id: 6,
        name: 'Jackey3',
        description: 'hhhhhhhhhhhh'
      },
      {
        id: 5,
        name: 'Hihku',
        description: 'hhhhhhhhhhhh'
      },
      {
        id: 6,
        name: 'Jackey3',
        description: 'hhhhhhhhhhhh'
      },
      {
        id: 1,
        name: 'Jackey',
        description: 'hhhhhhhhhhhh'
      },
      {
        id: 2,
        name: 'fCassi',
        description: 'hhhhhhhhhhhh'
      },
      {
        id: 3,
        name: '李浩周',
        description: 'hhhhhhhhhhhh'
      },
      {
        id: 4,
        name: 'oTommy',
        description: 'hhhhhhhhhhhh'
      },
      {
        id: 5,
        name: 'aHihku',
        description: 'hhhhhhhhhhhh'
      },
      {
        id: 6,
        name: 'Jackey3',
        description: 'hhhhhhhhhhhh'
      },
      {
        id: 5,
        name: 'mdHihku',
        description: 'hhhhhhhhhhhh'
      },
      {
        id: 6,
        name: 'pJackey3',
        description: 'hhhhhhhhhhhh'
      }
    ];


  })

  .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  })

  .controller('AccountCtrl', function ($scope) {
    $scope.settings = {
      enableFriends: true
    };
  });

