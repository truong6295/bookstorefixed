
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html ng-app="crudApp">
<head>
<meta http-equiv="Content-Type" content="text/html;">
<title>${title}</title>
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
<link href="css/bootstrap.css" rel="stylesheet" />
<link href="css/app.css" rel="stylesheet" />
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
	<nav class="navbar navbar-expand-md bg-dark navbar-dark"> <a
		class="navbar-brand" ui-sref="home">Home</a>
	<button class="navbar-toggler" type="button" data-toggle="collapse"
		data-target="#collapsibleNavbar">
		<span class="navbar-toggler-icon"></span>
	</button>
	<div class="collapse navbar-collapse" id="collapsibleNavbar">
		<ul class="navbar-nav">
			<li class="nav-item"><a class="nav-link" ui-sref="bookstore">Book
					store</a></li>
		</ul>
	</div>
	</nav>
	<br>

	<div class="container">
		<div ui-view></div>
	</div>
	<!-- script -->
	<script
		src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
	<script
		src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
	<script src="../js/lib/angular.min.js"></script>
	<script src="../js/lib/angular-ui-router.min.js"></script>
	<script src="../js/lib/localforage.min.js"></script>
	<script src="../js/lib/ngStorage.min.js"></script>
	<script src="../js/app.js"></script>
	<script src="../js/task/BookService.js"></script>
	<script src="../js/task/BookController.js"></script>
</body>
</html>