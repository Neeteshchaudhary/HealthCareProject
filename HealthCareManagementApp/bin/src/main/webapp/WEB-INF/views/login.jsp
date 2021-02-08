<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1" isELIgnored="false"%>
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
	<div id="fullscreen_bg" class="fullscreen_bg" />
	<div
		style="background: #00000070; height: -webkit-fill-available; top: 0px; position: absolute; width: 100%; height: 100% !important;">
		<center>
			<h3 style="color: white; font-weight: bold; margin-bottom: -10px;">Login</h3>
		</center>

		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="well login-box" style="width: 45%;">
						<form name="myForm" action="" onsubmit="return log_validateForm()"
							method="post" autocomplete="off">
							<div class="col-md-12" style="float: right; margin-bottom: 2%;">
								<img src="images/logo.png" class="img-responsive"
									style="width: 90px; margin: auto; margin-top: 12px;"
									draggable="false"> <img
									src="images/Logo Text Health .png" class="img-responsive"
									style="width: 90px; margin: auto; margin-top: 12px;"
									draggable="false">
							</div>
							<!--	  <h2 class="center">Login</h2>     -->

							<div class="col-md-10">
								<div class="form-group">
									<div class="icon-addon addon-lg">
										<input type="text" placeholder="Email ID" id="log_user"
											class="form-control"> <label><img
											src="images/Email.png" class="img-responsive" style=""></label>
										<p id="log_err"></p>
									</div>
								</div>

							</div>
							<div class="col-md-10">
								<div class="form-group">
									<div class="icon-addon addon-lg">
										<input type="password" placeholder="Password" id="log_pass"
											maxlength="20" class="form-control"> <label>
											<img src="images/NewPasswordicon.png" class="img-responsive"
											style="width: 25px; margin-top: -2px;">
										</label>
										<p id="log_err1"></p>
									</div>
								</div>

							</div>
							<div class="col-md-10">
								<div class="col-md-3 col-xs-8" style="padding: 0px;">
									<input type="submit" class="btn btn-login-submit"
										value="Secure Login">
								</div>
								<div class="col-md-5"
									style="text-align: end; float: right; padding: 0px;">
									<h4>
										<a href="#" data-toggle="modal" data-target="#myModal1"
											style="font-size: 13px; font-weight: bold;">Forgot
											Password ?</a>
									</h4>
								</div>
							</div>


							<div class="ring" id="loading" style="display: none;">Loading</div>
						</form>

						<div class="modal fade bs-example-modal-lg" role="dialog"
							aria-labelledby="myLargeModalLabel" aria-hidden="true"
							id="onload" style="top: 40px;">

							<div class="modal-content"
								style="width: 303px; float: right; font-weight: bold;">
								<div class="modal-body">
									<h4 style="color: green;" id="data_msg"></h4>
								</div>
							</div>

						</div>
					</div>

				</div>
			</div>
		</div>
	</div>
	</div>

	<div class="modal fade" id="myModal1" tabindex="-1" role="dialog"
		aria-labelledby="myModalLabel" aria-hidden="true" style="">
		<div class="modal-dialog" style="margin-top: 10%;">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-label="Close">
						<span aria-hidden="true"><img src="images/CloseIcon.png"
							style="width: 20px;"></span>
					</button>
					<h4 class="modal-title" id="myModalLabel">Forgot Password</h4>

				</div>
				<div class="col-md-12">
					<div class="well login-box" style="height: auto; width: 85%;">
						<form name="myForm" action="" onsubmit="return validateForm()"
							method="post">
							<div class="row">
								<div class="col-md-10">
									<div class="form-group">
										<div class="icon-addon addon-lg">
											<input type="text" placeholder="Email" id="fname"
												class="form-control"> <label><img
												src="images/Email.png" class="img-responsive" style=""></label>
											<p id="err"></p>
										</div>
									</div>

								</div>
							</div>

							<div class="form1">
								<div class="col-md-6"
									style="margin-left: 27%; margin-top: 10px;">
									<input type="submit" class="btn btn-login-submit"
										value="SUBMIT" id="reg_sub" onclick="">
								</div>
							</div>
						</form>
					</div>
				</div>
				<div class="modal-footer"></div>
			</div>
		</div>
	</div>
</body>
</html>