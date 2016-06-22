/**
 * Created by lihaozhou on 2016/6/20.
 */
(function (angular) {
  'use strict';
  /**
   * version 0.0.1
   * todo: need refactor
   */
  angular.module('lhz-contact', []).directive('lhzContact',
    ['$timeout', '$ionicScrollDelegate', function ($timeout, $ionicScrollDelegate) {
      return {
        restrict: 'EA',
        scope: {
          dataSource: '='
        },
        templateUrl: 'dist/angular-contact.html',
        link: function ($scope) {
          function getLetterCls(letter){
            return letter=='#'?'other':letter;
          }
          $scope.scrollToLetter = function (letter) {
            var doc = document.getElementById('group-' + getLetterCls(letter));
            if (doc && doc.offsetTop && $scope.curGroupName !== letter) {
              $ionicScrollDelegate.scrollTo(0, doc.offsetTop);
              $scope.curGroupName = letter;
            }
          };

          //todo: refactor
          $scope.onContactScroll = function (i) {
            $scope.contactGroups.forEach(function (group) {
              var dom=$('#group-' + group.cls);
              var position = dom.position();
              var h=dom.height();
              if (position && position.top < 0 && position.top >(-h)) {
                //$scope.curGroupName = group.name;
                //$('.cur-header-title').text(group.name);
                $scope.$apply(function(){
                  $scope.curGroupName = group.name;
                });
              }
            });
          };

          //todo: refactor
          function init() {
            var contactGroups = [{name:'#',cls:'other',children:[]}];
             $scope.letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G',
              'H', 'I', 'J', 'K', 'L', 'M', 'N',
              'O', 'P', 'Q', 'R', 'S', 'T', 'U',
              'V', 'W', 'X', 'Y', 'Z','#'];
            $scope.dataSource.forEach(function (item) {
              var groupName = makePy(item.name)[0].toUpperCase()[0];
              var hasGroup = false;
              contactGroups.forEach(function (group) {
                if (group.name === groupName) {
                  hasGroup = true;
                  group.children.push(item);
                }
              });
              if($scope.letters.indexOf(groupName)==-1){
                 hasGroup = true;
                  contactGroups[0].children.push(item);
              }
              if (!hasGroup) {
                contactGroups.push({
                  name: groupName,
                  cls:groupName,
                  children: [item]
                });
              }
              if(contactGroups[0].children.length===0){
                contactGroups=contactGroups.slice(1,contactGroups.length);
              }
            });
            $scope.contactGroups = sortGroups(contactGroups);
            $scope.curGroupName = $scope.contactGroups[0].name;
          }

          function getGroupByName(letter, groups) {
            var result, i = 0, len = groups.length;
            for (; i < len; i++) {
              if (groups[i].name === letter) {
                result = groups[i];
                break;
              }
            }
            return result;
          }

          function sortGroups(groups) {
            var result = [];
            $scope.letters.forEach(function (letter) {
              var group = getGroupByName(letter, groups);
              if (group) {
                result.push(group);
              }
            });
            return result;
          }


          init();

        }
      };
    }]);
})(angular);
