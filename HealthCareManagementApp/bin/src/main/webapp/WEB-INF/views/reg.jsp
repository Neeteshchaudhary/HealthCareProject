<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
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