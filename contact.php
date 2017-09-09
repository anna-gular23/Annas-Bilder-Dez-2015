
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
  <header class="site-header" role="banner">
  <div class="navbar-wrapper">
    <div class="navbar navbar-default navbar-fixed-top navground" role="navigation">
      <div class="container">
        <div class="navbar-header">
           <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse" aria-expanded="false" >
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="/"><img src="img/logoheading.png" class="logo" /></a>
        </div><!-- navbar-header -->
        <div class="navbar-collapse collapse">
            <ul class="nav navbar-nav navbar-right">
              <li><a href="#/">Home</a></li>
              <li><a href="#/gallery">Bildergalerie</a></li>
              <li><a href="#/techniques">Maltechnik</a></li>
              <li class="active"><a href="#/contact">Kontakt</a></li>
              <li><a href="#/legal">Impressum</a></li>
            </ul>
          </div><!-- navbar-collapse -->    
      </div><!-- container -->

    </div><!-- navbar -->
    </div><!-- navbar-wrapper -->
    </header>
    
    <!-- Jumbo Section -->
    <section id="jumbo-header">
      <div class="container clearfix">
        <div class="row">
          <div class="col-md-12 col-lg-12">
            <div class="jumboPixContact">
              <div class="jumbotextContact">
                <h1>Kontakt und Fragen</h1>
                <p>Falls Sie Fragen oder Anregungen zu meinen Bildern haben, k&ouml;nnen Sie sich 
                &uuml;ber das Kontaktformular direkt an mich wenden. Ich schreibe dann gerne zur&uuml;ck. </p>
              </div><!-- jumbotext -->
            </div><!-- jumboPixHeader -->
          </div><!-- col -->
        </div><!-- row -->
      </div><!-- container -->
    </section>

    <!-- Main Form Section -->
    <section id="main-form">
      <div class="container">
        <div class="row contentBoxContact">
          <div class="col-md-12 contact-heading">
            <h3>Kontaktieren Sie mich über das folgende Formular <h3>
            
            <form  novalidate="novalidate" role="form" class="clearfix contactform" name="myForm" ng-submit="onSubmit(myForm.$valid)" ng-model="contactForm">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group" ng-class="{'has-feedback': !myForm.name.$valid && (!myForm.name.$pristine), 'has-success': myForm.name.$valid && !myForm.name.$pristine}">
                    <label for="inputError2">Ihr Name
                    </label> 
                      <input  type="text" class="form-control input-lg" id="inputError2" name="name" ng-model="contactForm.name" aria-describedby="inputError2Status" required="required" ng-pattern="/[a-zA-Z0-9]+/" >
                    <span ng-model="error" id="inputError2Status" ng-if="!myForm.name.$valid" >{{error}}</span>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group" ng-class="{'has-feedback': !myForm.email.$valid  && (!myForm.email.$pristine), 'has-success': myForm.email.$valid && !myForm.email.$pristine}">
                    <label for="contact-email" for="inputError2">Ihre Emailadresse</label>
                      <input type="email" class="form-control input-lg" id="inputError2"  name="email"  ng-model="contactForm.email"  required="required">
                      <span ng-model="error" id="inputError2Status" ng-if="!myForm.email.$valid" >{{error2}}</span>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group" ng-class="{'has-feedback': !myForm.message.$valid && (!myForm.message.$pristine), 'has-success': myForm.message.$valid && !myForm.message.$pristine}">
                    <label for="inputError2">Ihre Nachricht</label>
                      <textarea class="form-control input-lg" id="inputError2"  rows="5" name="message"  ng-model="contactForm.message" required="required" ng-pattern="/[a-zA-Z0-9]+/"> </textarea>
                      <span ng-model="error" id="inputError2Status" ng-if="!myForm.message.$valid">{{error3}}</span>
                  </div>
              </div>
              <input  type="submit" class="btn btn-info btn-lg pull-right submit-btn" value="Kontakt aufnehmen">
            </form>
          </div><!-- col -->
        </div><!-- row -->
      </div><!-- container -->

    </section><!-- main-gallery -->

    <!-- Footer area -->
    <footer>
      <div class="container">
        <div class="row footerBox">

        <div class="col-md-4 footer-content">
          <ul class="unstyled nav-footer">
             <li>
                <img src="img/arrowFooter.png" /><a href="#/">H<span class="sm-caps">ome</span></a>
              </li>
              <li>
                <img src="img/arrowFooter.png" /><a href="#/gallery">B<span class="sm-caps">ildergalerie</span></a>
              </li>
              <li>
                <img src="img/arrowFooter.png"/><a href="#/techniques">M<span class="sm-caps">altechnik</span></a>
              </li>
              <li>
                <img src="img/arrowFooter.png" /><a href="#/contact" >K<span class="sm-caps">ontakt</span></a>
              </li>
              <li>
                <img src="img/arrowFooter.png" /><a href="#/legal">I<span class="sm-caps">mpressum</span></a>
              </li>
            </ul>
        </div><!-- col -->

        <div class="col-md-4 footer-content">
          <ul class="unstyled nav-socmedia">
            <li>
              <span class="sm-caps follow">Follow me on: </span>
            </li>
            <li>  <img src="img/twitterlogo.png" /><span class="sm-caps soc-media">twitter.com/annastoermer</span>
            </li>
            <li><img src="img/instagramLogo.png" /><span class="sm-caps soc-media">instagram.com/paulanna23</span></li>
            <li><img src="img/linkedInLogo.png" /><span class="sm-caps soc-media">LinkedIn</span><li/>
          </ul>
        </div><!-- col -->

        <div class="col-md-4 footer-content">
          <p>Copyright Anna St&ouml;rmer &copy; 2015</p>
        </div><!-- col -->

        </div><!-- row -->
      </div><!-- container -->
    </footer>

    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>

    
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <!--<script src="../../assets/js/ie10-viewport-bug-workaround.js"></script>-->
  </body>
</html>
