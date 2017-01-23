/**
 * @author
 * @since 1/23/2017
 */
angular.module('MyApp', ['ngRoute'])

.controller('View1Ctrl', function($scope){

    $scope.notes = new array();


    $scope.addNote = function ($note){
        $scope.notes.push($note);
        console.log($scope.notes);
    }
});
