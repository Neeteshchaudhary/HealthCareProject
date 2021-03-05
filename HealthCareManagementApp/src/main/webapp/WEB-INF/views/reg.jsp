<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="css/style_reg.css">

    <title>Registration Form</title>
  </head>
  <body>
    <div class="container">
        <div class="row">
            <div class="col-md-7">
                
            </div>
            <div class="col-md-5">
                <div class="row">
                    <div class="col-md-6">
                        <h3 class="text-left">Registration Form</h3>
                    </div>
                <div class="col-md-6">
                    <span class="glyphicon glyphicon-pencil"></span>
                </div>
                </div>
                <hr>
                <!--close--->
                <!--make another label for text-box-->
                
                <div class="row">
                    <label class="label col-2 control-label">First Name</label>
                    <div class="col-md-8">
                        <input type="text" class="form-control" name="f_name" aria-placeholder="F_name..." ><span style="color: green;">*</span></input>
                    </div>
                    <div class="row">
                        <label class="label col-2 control-label">Middle name <span style="color:green;">*</span></label>
    
                        <div class="col-md-8">
                            <input type="text" class="form-control" name="m_name" aria-placeholder="M_name..."></input>
                        </div>
                        <div class="row">
                            <label class="label col-2 control-label">Last name</label>
                            <div class="col-md-8">
                                <input type="text" class="form-control" name="l_name" aria-placeholder="l_name..."></input>
                            </div>       
                <div class="row">
                    <label class="label col-2 control-label">E-mail</label>
                    <div class="col-md-10">
                        <input type="Email" class="form-control" name="Email" aria-placeholder="E-mail" required></input>
                    </div>
                </div>
                <div class="row">
                    <label class="label col-2 control-label">Password</label>
                    <div class="col-md-10">
                        <input type="password" class="form-control" name="password" aria-placeholder="password"></input>
                    </div>
                </div>
                </div>
                <div class="row">
                    <label class="label col-md-2 control-label">Gender</label>
                    <div class="col-md-10">
                        <input type="radio" name="gnr" value="male"><small>Male</small>
                        <input type="radio" name="gnr" value="male"><small>Female</small>
                    </div>
                </div>
                <div class="row">
                    <label class="label col-2 control-label">Address</label>
                    <div class="col-md-10">
                        <input type="Email" class="form-control" name="Email" aria-placeholder="E-mail" required></input>
                    </div>
                </div>
                <div class="row">
                    <label class="label col-md-2 control-label">Role</label>
                    <div class="col-md-10">
                        <select class="form-control">
                            <option>--Select your role--</option>
                            <option>Doctor</option>
                            <option>Nurse</option>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <label class="label col-md-2 control-label">States</label>
                    <div class="col-md-10">
                        <select class="form-control">
                            <option>---Select State---</option>
                            <option>Odisha</option>
                            <option>West Bengal</option>
                            <option>Andhra Pradesh</option>
                            <option>Tamil Nadu</option>
                            <option>Bihar</option>
                            <option>Gujarat</option>
                        </select>
                    </div>
                </div>
                <div class="btn">
                    <a href="#"><div class="btn btn-info">Submit</div></a>
                    <a href="#"><div class="btn btn-warning">Cancel</div></a>
                    </div>
                <!--close-->
            </div>
        </div>

    </div>

    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js" integrity="sha384-q2kxQ16AaE6UbzuKqyBE9/u/KzioAlnx2maXQHiDX9d4/zp8Ok3f+M7DPm+Ib6IU" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.min.js" integrity="sha384-pQQkAEnwaBkjpqZ8RU1fF1AKtTcHJwFl3pblpTlHXybJjHpMYo79HY3hIi4NKxyj" crossorigin="anonymous"></script>
    -->
  </body>
</html>