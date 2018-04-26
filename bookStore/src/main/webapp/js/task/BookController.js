'use strict';
 
angular.module('crudApp').controller('BookController',
    ['BookService', '$scope',function( BookService, $scope) {
    	$scope.currentPage = 0;
        $scope.pageSize = 10;
        $scope.seach = '';
        $scope.all=false;
        $scope.data=[];
        $scope.check1='';
        $scope.numberOfPages=function(){
            return Math.ceil($scope.getData().length/$scope.pageSize);                
        };
        $scope.data=getAllBooks();
        $scope.getData = function () {
        	var arr = [];
        	if($scope.seach == ''|| $scope.seach ==null || $scope.all==false) {
        		arr= getAllBooks();
            } else if($scope.check1=='check1'){
            	for(var ea=0; ea < $scope.data.length ;ea++) {
            		if($scope.data[ea].idbook==($scope.seach)) {
                        arr.push($scope.data[ea]);
                    }
                }
            }else if($scope.check1=='check2'){
            	for(var ea=0; ea < $scope.data.length ;ea++) {
            		if($scope.data[ea].author==($scope.seach)) {
                        arr.push($scope.data[ea]);
                    }
                }
            }else if($scope.check1=='check3'){
            	for(var ea=0; ea < $scope.data.length ;ea++) {
            		if($scope.data[ea].catergory==($scope.seach)) {
                        arr.push($scope.data[ea]);
                    }
                }
            }else if($scope.check1=='check4'){
            	for(var ea=0; ea < $scope.data.length ;ea++) {
            		if($scope.data[ea].namebook==($scope.seach)) {
                        arr.push($scope.data[ea]);
                    }
                }
            }else if($scope.check1=='check5'){
            	for(var ea=0; ea < $scope.data.length ;ea++) {
            		if($scope.data[ea].price==($scope.seach)) {
                        arr.push($scope.data[ea]);
                    }
                }
            }
        	return arr;
           };
        	$scope.checkauthor=function(){
        		switch($scope.ctrl.book.author){
        		case null:
        			return 'myForm.price.$touched && myForm.myName.$invalid';
        		default:
        			return null;
        		}
        	};
        
        var self = this;
        self.book = {};
        self.books=[];
        self.bookCatergorys=[];
        self.bookNames=[];
        self.bookAuthors=[];
        self.bookPrices=[];
 
        self.submit = submit;
        self.editBook = editBook;
        self.reset = reset;
        self.getAllBooks= getAllBooks,
        self.createBook= createBook,
        self.updateBook= updateBook,
        self.removeBook= removeBook,
 
        self.successMessage = '';
        self.errorMessage = '';
        self.done = false;
 
        self.onlyIntegers = /^\d+$/;
        self.onlyNumbers = /^\d+([,.]\d+)?$/;
        
 
        function submit() {
            console.log('Submitting');
            if (self.book.idbook === undefined || self.book.idbook === null) {
                console.log('Saving New book', self.book);
                createBook(self.book);
            } else {
                updateBook(self.book, self.book.idbook);
                console.log('book updated with id ', self.book.idbook);
            }
        }
 
        function createBook(book) {
            console.log('About to create book');
            BookService.createBook(book)
                .then(
                    function (response) {
                        console.log('book created successfully');
                        self.successMessage = 'book created successfully';
                        self.errorMessage='';
                        self.done = true;
                        self.book={};
                        $scope.myForm.$setPristine();
                    },
                    function (errResponse) {
                        console.error('Error while creating User');
                        self.errorMessage = 'Error while creating User: ' + errResponse.data.errorMessage;
                        self.successMessage='';
                    }
                );
        }
 
 
        function updateBook(book, id){
            console.log('About to update book');
            BookService.updateBook(book, id)
                .then(
                    function (response){
                        console.log('book updated successfully');
                        self.successMessage='book updated successfully';
                        self.errorMessage='';
                        self.done = true;
                        $scope.myForm.$setPristine();
                    },
                    function(errResponse){
                        console.error('Error while updating book');
                        self.errorMessage='Error while updating book '+errResponse.data;
                        self.successMessage='';
                    }
                );
        }
 
 
        function removeBook(id){
            console.log('About to remove book with id '+id);
            BookService.removeBook(id)
                .then(
                    function(){
                        console.log('book '+id + ' removed successfully');
                    },
                    function(errResponse){
                        console.error('Error while removing book '+id +', Error :'+errResponse.data);
                    }
                );
        }
 
 
        function getAllBooks(){
        	return BookService.getAllBooks();
        }
 
        function editBook(id) {
            self.successMessage='';
            self.errorMessage='';
            BookService.getIdBook(id).then(
                function (book) {
                    self.book = book;
                },
                function (errResponse) {
                    console.error('Error while removing book ' + id + ', Error :' + errResponse.data);
                }
            );
        }
        function reset(){
            self.successMessage='';
            self.errorMessage='';
            self.book={};
            $scope.myForm.$setPristine(); //reset Form
        }
    }
]);
angular.module('crudApp').filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});