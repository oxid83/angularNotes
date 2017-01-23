/**
 * @author
 * @since 1/23/2017
 */
angular.module('MyApp')

    .controller('View1Ctrl', ['$scope', View1Ctrl]);

// Inject my dependencies
View1Ctrl.$inject = ['$scope'];

// Now create our controller function with all necessary logic
function View1Ctrl($scope) {

    $scope.notes = new Array();

    $scope.addNote = function (){
        console.log("entered");
        $scope.notes.push({
            id: $scope.notes.length,
            content: $scope.note
        });
        console.log($scope);
        $scope.note = null;
    };

    $scope.clear = function (){
        $scope.notes.length = 0;
    }
}
