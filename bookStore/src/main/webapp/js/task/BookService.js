
'user strict';
 
angular.module('crudApp').factory('BookService',
    ['$localStorage', '$http', '$q', 'urls',
        function ($localStorage, $http, $q, urls) {
 
            var factory = {
                loadAllBooks: loadAllBooks,
                getAllBooks: getAllBooks,
                getIdBook: getIdBook,
                createBook: createBook,
                updateBook: updateBook,
                removeBook: removeBook,
                getlistCatergory: getlistCatergory,
                getName: getName,
                getAuthor: getAuthor,
                getPrice: getPrice,
//                loadIdBook :loadIdBook,
//                loadlistCatergory:loadlistCatergory,
//                loadName :loadName,
//                loadAuthor:loadAuthor,
//                loadPrice:loadPrice
            };
 
            return factory;
            
            function loadAllBooks() {
                console.log('Fetching all books');
                var deferred = $q.defer();
                $http.get(urls.BOOKSTORE_SERVICE_API+"/getAllBook")
                    .then(
                        function (response) {
                            console.log('Fetched successfully all books');
                            $localStorage.books = response.data;
                            deferred.resolve(response);
                        },
                        function (errResponse) {
                            console.error('Error while loading books');
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }
 
            function getAllBooks(){
                return $localStorage.books;
            }
            
            function getIdBook(id) {
                console.log('Fetching task with id :'+id);
                var deferred = $q.defer();
                $http.get(urls.BOOKSTORE_SERVICE_API + "/getIdBook/"+id)
                    .then(
                        function (response) {
                            console.log('Fetched successfully task with id :'+id);
                            $localStorage.book=response.data;
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while loading task with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }
            
//            function loadIdBook(id){
//            	getIdBook(id)
//            	return $localStorage.book;
//            }
 
            function createBook(book) {
                console.log('Creating book');
                var deferred = $q.defer();
                $http.post(urls.BOOKSTORE_SERVICE_API+"/saveBook", book)
                    .then(
                        function (response) {
                            loadAllBooks();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                           console.error('Error while creating task : '+errResponse.data.errorMessage);
                           deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }
 
            function updateBook(book, id) {
                console.log('Updating book with id '+id);
                var deferred = $q.defer();
                $http.put(urls.BOOKSTORE_SERVICE_API+"/updateBook/" + id, book)
                    .then(
                        function (response) {
                            loadAllBooks();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while updating task with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }
 
            function removeBook(id) {
                console.log('Removing book with id '+id);
                var deferred = $q.defer();
                $http.delete(urls.BOOKSTORE_SERVICE_API+"/deleteBook/"+ id)
                    .then(
                        function (response) {
                            loadAllBooks();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while removing task with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }
            function getlistCatergory(catergory){
            	console.log("get list of Category");
            	var deferred = $q.defer();
                $http.get(urls.BOOKSTORE_SERVICE_API+"/getCatergory?catergory="+catergory)
                    .then(
                        function (response) {
                            console.log('Fetched successfully all books of category');
                            $localStorage.bookCatergorys = response.data;
                            deferred.resolve(response);
                        },
                        function (errResponse) {
                            console.error('Error while loading books of category');
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }
//            function loadlistCatergory(catergory){
//            	$http.get(urls.BOOKSTORE_SERVICE_API+"/getCatergory?catergory="+catergory)
//                .then(
//                    function (response) {
//                        console.log('Fetched successfully all books of category');
//                        $localStorage.bookCatergorys = response.data;
//                    },
//                    function (errResponse) {
//                        console.error('Error while loading books of category');
//                    }
//                );
//            	return $localStorage.bookCatergorys;
//            }
            function getName(name){
            	var deferred = $q.defer();
                $http.get(urls.BOOKSTORE_SERVICE_API+"/getName?name="+name)
                    .then(
                        function (response) {
                            console.log('Fetched successfully all books of name');
                            $localStorage.bookNames = response.data;
                            deferred.resolve(response);
                        },
                        function (errResponse) {
                            console.error('Error while loading books of name');
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }
//            function loadName(name){
//            	getName(name);
//            	return $localStorage.bookNames;
//            }
            function getAuthor(author){
            	var deferred = $q.defer();
                $http.get(urls.BOOKSTORE_SERVICE_API+"/getAuthor?author="+author)
                    .then(
                        function (response) {
                            console.log('Fetched successfully all books of author');
                            $localStorage.bookAuthors = response.data;
                            deferred.resolve(response);
                        },
                        function (errResponse) {
                            console.error('Error while loading books of author');
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }
//            function loadAuthor(author){
//            	getAuthor(author);
//            	return $localStorage.bookAuthors;
//            }
            function getPrice(price){
            	var deferred = $q.defer();
                $http.get(urls.BOOKSTORE_SERVICE_API+"/getPrice?price="+price)
                    .then(
                        function (response) {
                            console.log('Fetched successfully all books of price');
                            $localStorage.bookPrices = response.data;
                            deferred.resolve(response);
                        },
                        function (errResponse) {
                            console.error('Error while loading books of price');
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }
//            function loadPrice(price){
//            	getPrice(price);
//            	return $localStorage.bookPrices;
//            }
        }
    ]);