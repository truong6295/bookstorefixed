<%-- <%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%> --%>
<div class="generic-container">
	<div class="panel panel-default">
		<!-- Default panel contents -->
		<div class="panel-heading">
			<span class="lead">Specific Book </span>
		</div>
		<div class="panel-body">
			<div class="formcontainer">
				<div class="alert alert-success" role="alert"
					ng-if="ctrl.successMessage">{{ctrl.successMessage}}</div>
				<div class="alert alert-danger" role="alert"
					ng-if="ctrl.errorMessage">{{ctrl.errorMessage}}</div>
				<form ng-submit="ctrl.submit()" name="myForm"
					class="form-horizontal">
					<input type="hidden" ng-model="ctrl.book.idbook" />
					<div class="row">
						<div class="form-group col-md-12">
							<label class="col-md-2 control-lable" for="author">author</label>
							<div class="col-md-7">
								<input type="text" ng-model="ctrl.book.author" id="author"
									class="username form-control input-sm"
									placeholder="Enter your author" required >
							</div>
						</div>
					</div>

					<div class="row">
						<div class="form-group col-md-12">
							<label class="col-md-2 control-lable" for="catergory">catergory</label>
							<div class="col-md-7">
								<input type="text" ng-model="ctrl.book.catergory" id="catergory"
									class="form-control input-sm"
									placeholder="Enter your end catergory" required />
							</div>
						</div>
					</div>

					<div class="row">
						<div class="form-group col-md-12">
							<label class="col-md-2 control-lable" for="description">description</label>
							<div class="col-md-7">
								<input type="text" ng-model="ctrl.book.description"
									id="description" class="form-control input-sm"
									placeholder="Enter your description" required />
							</div>
						</div>
					</div>
					<div class="row">
						<div class="form-group col-md-12">
							<label class="col-md-2 control-lable" for="namebook">namebook</label>
							<div class="col-md-7">
								<input type="text" ng-model="ctrl.book.namebook" id="namebook"
									class="form-control input-sm" placeholder="Enter your namebook"
									required />
							</div>
						</div>
					</div>
					<div class="row">
						<div class="form-group col-md-12">
							<label class="col-md-2 control-lable" for="price">price</label>
							<div class="col-md-7">
								<input type="text" ng-model="ctrl.book.price" id="price"
									class="form-control input-sm" placeholder="Enter your price"
									required ng-pattern="ctrl.onlyNumbers" />
							</div>
						</div>
					</div>
					<div class="row">
						<div class="form-actions floatRight">
							<input type="submit"
								value="{{!ctrl.book.idbook ? 'Add' : 'Update'}}"
								class="btn btn-primary btn-sm"
								ng-disabled="myForm.$invalid || myForm.$pristine" />
							<button type="button" ng-click="ctrl.reset()"
								class="btn btn-warning btn-sm" ng-disabled="myForm.$pristine">Reset
								Form</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
	<div class="panel panel-default">
		<!-- Default panel contents -->
		<div class="panel-heading">
			<div class="form-group">
			<label class="lead" style="cursor: pointer">Seach of type <input
				type="checkbox" style="cursor: pointer" ng-model="all"/></label>
			<div>
				<label class="radio-inline"> <input type="radio" name="optradio" ng-disabled="!all" ng-model="check1" value="check1">Seach of ID
				</label> <label class="radio-inline"> <input type="radio" name="optradio" ng-disabled="!all" ng-model="check1" value="check2">Seach of author
				</label> <label class="radio-inline"> <input type="radio" name="optradio" ng-disabled="!all" ng-model="check1" value="check3">Seach of catergory
				</label>
				<label class="radio-inline"> <input type="radio" name="optradio" ng-disabled="!all" ng-model="check1" value="check4">Seach of namebook
				</label>
				<label class="radio-inline"> <input type="radio" name="optradio" ng-disabled="!all" ng-model="check1" value="check5">Seach of price
				</label>
			</div>
			</br><input ng-model="seach" id="search" class="form-control" ng-disabled="!all" placeholder="Filter text">
			<div class="lead">List of Books</div>
			</div>
		</div>
		<div class="panel-body">
			<div class="table-responsive">
				<table class="table table-hover">
					<thead>
						<tr>
							<th>idBook</th>
							<th>author</th>
							<th>catergory</th>
							<th>description</th>
							<th>namebook</th>
							<th>price</th>
							<th width="100"></th>
							<th width="100"></th>
						</tr>
					</thead>
					<tbody>
						<tr
							ng-repeat="u in getData() | startFrom:currentPage*pageSize | limitTo:pageSize">
							<td>{{u.idbook}}</td>
							<td>{{u.author}}</td>
							<td>{{u.catergory}}</td>
							<td>{{u.description}}</td>
							<td>{{u.namebook}}</td>
							<td>{{u.price}}</td>
							<td><button type="button" ng-click="ctrl.editBook(u.idbook)"
									class="btn btn-success custom-width">Edit</button></td>
							<td><button type="button"
									ng-click="ctrl.removeBook(u.idbook)"
									class="btn btn-danger custom-width">Remove</button></td>
						</tr>
					</tbody>
				</table>
			</div>
			<!-- paging -->
			<div class="form-group">
				<select ng-model="pageSize" id="pageSize" class="form-control"
					style="height: 50%">
					<option value="1">1</option>
					<option value="10">10</option>
					<option value="15">15</option>
					<option value="20">20</option>
				</select>
				<ul class="pager">
					<li ng-class="{disabled:currentPage == 0}"><a
						ng-click="currentPage == 0 ? currentPage : currentPage =currentPage-1">Previous</a></li>
					<li>{{currentPage+1}}/{{numberOfPages()}}</li>
					<li
						ng-class="{disabled:currentPage >= getData().length/pageSize - 1}"><a
						ng-click="currentPage >= getData().length/pageSize - 1 ? currentPage : currentPage=currentPage+1">Next</a></li>
				</ul>
			</div>

		</div>
	</div>
</div>