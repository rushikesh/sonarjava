var app = angular.module("sonarJavaApp", []);
app.config(function ($sceProvider) {
    // Completely disable SCE.
    $sceProvider.enabled(false);
});
app.controller("myCtrl", function ($scope) {
    var vm = this;
    vm.java = "";
    vm.debt = ["All", "Maintainability", "Understandability", "Changeability", "Data", "Readability", "Reliability", "Architecture", "Instruction", "Efficiency", "Processor use", "Logic", "Testability", "Unit level", "Exception handling", "Memory use", "Portability", "Compiler", "Security", "Errors", "Synchronization", "API abuse", "Security features", "OS", "Hardware", "Software", "Input validation and representation", "Language", "Unit tests coverage"];
    vm.java = java;
    $scope.$watch('ctrl.debtDD', function () {
        vm.searchTerm = '';
        vm.java = java.filter(function (obj) {
            if (vm.debtDD == "All") {
                return true;
            } else {
                return (obj.rule.debtCharName == vm.debtDD || obj.rule.debtSubCharName == vm.debtDD)
            }

        });
    });
    vm.openPopUp = function (event, data) {
        mevent = event;
        vm.title = data.name;
        vm.severity = data.severity;
        vm.debtChar = data.debtCharName + '->' + data.debtSubCharName;
        vm.debtCost = data.debtRemFnOffset;
        vm.desc = data.htmlDesc;
        $('#myModal').modal('show');
    };
});

$(document).ready(function () {
    $("#myModal").on('hidden.bs.modal', function () {
        window.scrollTo(mevent.pageX, mevent.pageY - 800);
    });
});