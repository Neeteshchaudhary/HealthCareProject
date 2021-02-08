<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<title>Wound Health | Login</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="css/bootstrap.min.css">
<script src="js/jquery.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link
	href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css"
	rel="stylesheet"
	integrity="sha384-T8Gy5hrqNKT+hzMclPo118YTQO6cYprQmhrYwIiQ/3axmI1hQomh7Ud2hPOy8SP1"
	crossorigin="anonymous">

<script src="js/eWound.js"></script>

<script src="js/back_history.js"></script>
<link rel="stylesheet" href="css/style.css">
<script src="js/login.js"></script>
<script src="js/host.js"></script>
<script src="js/resetPass.js"></script>
<link rel="shortcut icon" href="images/logo.png" />
</head>
<body>
	<div id="fullscreen_bg" class="reg_bg" />
	<center>
		<h1>Registration Page</h1>
		<form method="post" action="/regData">
			<table>
				<tr>
					<td>Name:</td>
					<td><input type="text" name="uname"></td>
				</tr>
				<tr>
					<td>Email:</td>
					<td><input type="email" name="uemail"></td>
				</tr>
				<tr>
					<td>Phone:</td>
					<td><input type="tel" name="uphone"></td>
				</tr>
				<tr>
					<td>Password:</td>
					<td><input type="password" name="upwd"></td>
				</tr>
				<tr>
					<td>DOB:</td>
					<td><input type="date" name="udob"></td>
				</tr>
				<tr>
					<td>Gender:</td>
					<td><input type="radio" name="gender" value="male">Male
						<input type="radio" name="gender" value="female">Female</td>
				</tr>
				<tr>
					<td>Country:</td>
					<td><select name="ucountry">
							<option value="India">India</option>
							<option value="Canada">Canada</option>
							<option value="Others">Others</option>
					</select></td>
				</tr>
				<tr>
					<td></td>
					<td><input type="submit" name="Register"></td>
				</tr>
			</table>
	</center>
</body>
</html>