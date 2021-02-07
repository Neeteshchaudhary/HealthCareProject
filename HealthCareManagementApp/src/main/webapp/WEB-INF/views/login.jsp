<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1" isELIgnored="false"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
   <form method="POST">
       <table>
           <tr>
               <td>User Name:</td>
               <td><input type="text" name="user_name" required></td>
           </tr>
           <tr>
            <td>Password:</td>
            <td><input type="password" name="user_pwd" required></td>
        </tr>
        <tr>
            <td></td>
            <td><input type="submit" value="Login to continue"></td>
        </tr>
       </table>
    </form>
    <h1>Welcome to Login Page :: ${name}</h1>
</body>
</html>