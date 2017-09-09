
<!DOCTYPE html>
<html lang="en" ng-app="myApp">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="img/gallery-london.png">

    <title>Annas Bilder - Start </title>

     <!--Angular.js files -->
    <script src="//code.angularjs.org/1.4.0/angular.min.js"></script>
    <script src="//code.angularjs.org/1.4.0/angular-route.min.js"></script>
    <script src="js/angularApp.js"></script>

    <!-- Google Fonts -->
    <link href='https://fonts.googleapis.com/css?family=Dosis:400,700,800' rel='stylesheet' type='text/css'>

    <!-- Custom CSS -->
    <link href="css/styles.css" rel="stylesheet">
    
    <!-- Bootstrap core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">


    

    <!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
    <!--[if lt IE 9]><script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->
    <!--<script src="../../assets/js/ie-emulation-modes-warning.js"></script>-->

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

  </head>

  <body ng-view ng-controller="contactController">
  
  <?php
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    @$name = $request->name;
    @$email = $request->email;
    @$message = $request->message; 
    mail("info@anna-stoermer.de", "Email von " . $name,  $message, "From: " .$email); 
  ?>
  
    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>

    
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <!--<script src="../../assets/js/ie10-viewport-bug-workaround.js"></script>-->
  </body>
</html>
