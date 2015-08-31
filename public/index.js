var app = angular.module("youTubeApp",[]);

app.factory('SearchBarFactory',function($http){
    return{
        searchYoutube: function(nameOfVideo){
            var query ={};
            query.name= nameOfVideo;
            return $http.get('/api/search/',{params:query}).then(function(results){
                return results.data
            })
        }
    }
});
app.controller('HomeController', function (SearchBarFactory, $scope) {

            $scope.searchForVideo = function(nameOfVideo){
                    console.log('Video is ', nameOfVideo)
                    //ensures dynamic search stops when full phrase is entered
                   SearchBarFactory.searchYoutube(nameOfVideo).then(function(results){
                        console.log(results)
                        $scope.results= results.items;
                   })
            }

        

    });