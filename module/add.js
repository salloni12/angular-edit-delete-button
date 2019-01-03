var app = angular.module("module",[])

app.controller('main', function ($scope, $window) {
    $scope.values = [
        { id: 111, name: "rohan",email:"roham@gmail.com" }
       
        ];

    $scope.Add = function () {
        //Add the new item to the Array.
        console.log("sdfgsfg")
        var val = {};
        val.id=$scope.id;
        val.name = $scope.name;
        val.email=$scope.email;
        $scope.values.push(val);
        //Clear the TextBoxes.
        $scope.id="";
        $scope.name = "";
        $scope.email = "";
    };

    $scope.Delete = function (index) {
        //Find the record using Index from Array.
        var id = $scope.values[index].id;
        if ($window.confirm("Do you want to delete: " + id)) {
            //Remove the item from Array using Index.
            $scope.values.splice(index, 1);
        }
    
    }
});