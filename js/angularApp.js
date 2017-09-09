var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){

	$routeProvider

	.when('/', {

		templateUrl: 'index.html',
		controller: 'mainController'
	}) 

	.when('/gallery',{
		templateUrl:'gallery.html',
		controller: 'galleryController'
	})

	.when('/techniques',{
		templateUrl:'techniques.html',
		controller: 'tecController'
	})

	.when('/contact', {
		templateUrl: 'contact.html',
		controller: 'contactController'
	})


	.when('/legal',{
		templateUrl:'legal.html',
		controller: 'legalController'
	})


});

myApp.controller('mainController', ['$scope', '$log','$timeout', function($scope, $log, $timeout){
 	
	$scope.isValid = 0;
	$scope.navClick = function(){
			$scope.isValid = 1;
			return $scope.isValid; 
		
	};
	
	
}]);

myApp.controller('galleryController', ['$scope', '$log', '$timeout', function($scope, $log, $timeout){ 

		$scope.isValid = 0;
		$scope.navClick = function(){
			$scope.isValid = 1;
			return $scope.isValid; 
		
		};
	

	
	


		$scope.counter = 1;
		$scope.fantasyClick = function(){
			$scope.counter = 0;
			$scope.picname = "";
			$scope.headline = "";
			$scope.descrtextone = ""; 
			$scope.descrtexttwo = "";
			$scope.descrtextthree = "";


			$timeout(function(){
				$scope.counter = 1;
				$scope.picname = "img/fantasy-big.png";
				$scope.headline = "Stadthäuser";
				$scope.descrtextone = "Das Aquarell zeigt einen Straßenzug mit Häusern, die in einer Großstadt stehen. Die Farbwahl der Fassaden ist frei gewählt.";
				$scope.descrtexttwo = "Alle meine Bilder habe ich mir Bleistift vorgezeichnet. Beim Skizzieren von Architektur sind viele Details zu berücksichtigen. Man kann direkt in der jeweiligen Umgebung malen oder ein Foto bzw. eine Buchvorlage nutzen.";
				$scope.descrtextthree ="Architekturmalerei ist eine selbständige Stilrichtung in der Kunst. Sie kann aber auch darüber hinaus als Ergänzung zur Darstellung von Figuren und Menschen genutzt werden, z.B. als Hintergrundmotiv."
			}, 0);
			return counter;
		};

		$scope.parisClick = function(){

			$timeout(function(){
				$scope.counter = 2;
				$scope.picname = "img/paris-big.png"; 
				$scope.headline = "Blick von Sacre-Coeur auf Paris";
				$scope.descrtextone = "Das Bild hat ein auf dem Hügel von Sacre Coeur aufgenommenes Foto zur Vorlage. Es zeigt den Blick von der Kirche auf die Stadt Paris. Dabei sind die Gebäude der Metropole stark generalisiert und abgewandelt.";
				$scope.descrtexttwo = "Sacre-Coeur liegt auf dem höchsten Punkt von Montmatre. Das Bauwerk wird auch liebevoll als \"Zuckerbäckerkirche\" bezeichnet, dessen Bau 1873 von der französischen Nationalversammlung beschlossen wurde.";
				$scope.descrtextthree ="Das Aquarell kann man durchaus dem Stil der Landschaftsmalerei zuordnen, bei dem nicht nur Naturlandschaften abgebildet werden, sondern auch Ausblicke auf Kulturlandschaften. Die Architektur ist auf diesem Bild sehr stark generalisiert und einzelne Details wie Verzierungen sind nicht erkennbar.";
			}, 0);
			return counter;
		};
		$scope.npeopleClick = function(){

			$timeout(function(){
				$scope.counter = 3;
				$scope.picname = "img/nakedpeople-big.png";
				$scope.headline = "Aktkomposition"; 
				$scope.descrtextone = "Dieses Bild stellt eine Aktkomposition verschiedener menschlicher Körper dar. Aktzeichnungen können sich an einem Modell orientieren oder auch als Vorlage Fotos und andere Zeichnungen haben. In diesem Fall wurden mehrere Vorlagen miteinander kombiniert und nach eigenem Empfinden interpretiert.";
				$scope.descrtexttwo = "Der Vorteil beim Zeichnen mit Modell ist, dass man die Figuren und den Raum noch plastischer darstellen kann. Der Nachteil ist es, dass es nicht so leicht es ein Modell zu finden, das sich einem für seine Zeichnungen zur Verfügung stellt. Auch bei der Aktmalerei mit Aquarellfarben lohnt es sich, die Körper vorzuskizzieren. Anschließend kann man die Bleistiftlinien mit schwarzen Pinselstrichen überdecken oder beispielsweise einen schwarzen Buntstift nehmen und die Konturen sauber nachziehen.";
				$scope.descrtextthree ="";
			}, 0);
			return counter;
		};

		$scope.flowerClick = function(){

			$timeout(function(){
				$scope.counter = 4;
				$scope.picname = "img/flower-big.png"; 
				$scope.headline = "Stillleben von Blume";
				$scope.descrtextone = "Diese Zeichnung einer Blume ist ohne Vorlage entstanden. Die Gattung der Malerei von \"leblosen\" Motiven, wie Blumen, Obst oder gedeckten Tischen nennt man Stillleben.";
				$scope.descrtexttwo = "Mit dieser Darstellung nähere ich mich schon mehr der abstrakten Malerei an, wenngleich die Blume immer noch gegenständlich wirkt. In der Kunst gibt es die Unterscheidung zwischen abstrakter und gegenständlicher Malerei. Bei der abstrakten Malerei müssen die Formen nicht zwangsläufig ein gegenständliches, konkret erkennbares Bild ergeben. Berühmte Vertreter dieser Richtung sind Joan Miró oder Wassily Kandinsky. Bei der gegenständlichen Kunst werden, wie der Name schon sagt, Gegenstände, Gebäude, Landschaften oder auch Menschen dargestellt.";
				$scope.descrtextthree ="";
			}, 0);
			return counter;
		};

		$scope.nyClick = function(){

			$timeout(function(){
				$scope.counter = 5;
				$scope.picname = "img/ny-big.png"; 
				$scope.headline = "Blick von Brooklyn Bridge auf Manhatten";
				$scope.descrtextone = "Auf diesem Aquarell ist die Brooklyn Bridge mit ihrem Ausblick auf Manhatten abgebildet. Dabei sind die Wolkenkratzer im Hintergrund stark generalisiert und verändert.";
				$scope.descrtexttwo = "Die Hängebrücke in der Metropole an der Ostküste der USA ist nicht nur ein beliebtes Wahrzeichen, sie verbindet auch Manhatten mit dem Stadtteil Brooklyn. Sie wurde in der zweiten Hälfte des 19. Jahrhunderts errichtet und war zu dieser Zeit ein Ingenieurwerk von besonderem Wert. Doch auch diese Meisterleistung hatte seinen Preis, die Arbeitsbedingungen waren mühsam und gefährlich. Der Bau forderte sogar insgesamt 27 Todesopfer.";
				$scope.descrtextthree ="";
			}, 0);
			return counter;
		};

		$scope.birdsClick = function(){

			$timeout(function(){
				$scope.counter = 6;
				$scope.picname = "img/birds-big.png";
				$scope.headline = "Zwei Vögel"; 
				$scope.descrtextone = "Hauptmotiv dieses Bildes sind die zwei Vögel. Die Farbgebung ist dabei frei gewählt. Man kann gut sehen, dass eine Stärke von Aquarellfarben das Zerlaufen der Farben ist.";
				$scope.descrtexttwo = "Falls man diesen Effekt erreichen will, mischt man einfach unter die Farben noch ein bißchen Wasser. Gut kann man das bei den Körpern der beiden Vögel sehen.";
				$scope.descrtextthree ="Dieses Bild ist mit einer schlichten Vorlage aus dem Internet entstanden, die nur in schwarz-weiß die Konturen des Motiv zeigte. Ich habe diese Konturen mit einem Bleistift auf das Aquarellpapier übertragen.";
			}, 0);
			return counter;
		};

		$scope.flower2Click = function(){

			$timeout(function(){
				$scope.counter = 7;
				$scope.picname = "img/flower2-big.png"; 
				$scope.headline = "Naturstudie Blauer Rittersporn";
				$scope.descrtextone = "Dieses Bild ist schon nicht mehr ein Stillleben, sondern vielmehr eine Naturstudie von Blauem Rittersporn. Neben den Blüten gibt es in diesem Aquarell auch abstrakte Elemente im Hintergrund.";
				$scope.descrtexttwo = "Durch das Mischen von Farbtönen kann man mit Aquarellfarben auch leicht unterschiedliche Abstufungen einer Farbe erlangen. In diesem Fall finden wir verschiedenste Blautöne vor, die sich einmal daraus ergeben, dass man unterschiedliche Blautöne kaufen kann. Zum anderen habe ich aber die Farben immer wieder mit Weiß, Schwarz, Grau oder Wasser gemischt. Das Mischen von Farben, um einen neuen Farbton zu bekommen, ist eine der Stärken von Aquarellfarben.";
				$scope.descrtextthree ="";
			}, 0);
			return counter;
		};

		$scope.forestClick = function(){

			$timeout(function(){
				$scope.counter = 8;
				$scope.picname = "img/forest-big.png"; 
				$scope.headline = "Fantasiewald";
				$scope.descrtextone = "Mit Aquarellfarben wie auch mit anderen Farbmaterialien kann man gut Fantasiebilder erzeugen. Hier auf diesem Aquarell ist deutlich zu erkennen, dass die Bäume durch die Farbgebung unrealistisch, besser gesagt fantasievoll wirken. Der Wald hat dadurch ein wenig den Charakter eines Märchenwaldes.";
				$scope.descrtexttwo = "Es zeigt sich also, dass der Künstler immer auch ein stückweit durch Effekte die Wahrnehmung und Interpretation des Betrachters beeinflussen möchte. Oder aber kann es auch sein, dass ein Künstler eine Auftragsarbeit macht und ein Bild für einen ganz speziellen Zweck malt. Wenn ich den Auftrag habe, eine Mangazeichnung zu machen, gehe ich anders vor, als wenn ich ein Portrait eines berühmten Politikers zeichen möchte.";
				$scope.descrtextthree ="";
			}, 0);
			return counter;
		};

		$scope.amsterdamClick = function(){

			$timeout(function(){
				$scope.counter = 9;
				$scope.picname = "img/amsterdam-big.png"; 
				$scope.headline = "Frühling in Amsterdam";
				$scope.descrtextone = "Dieses Bild zeigt eine Gracht in Amsterdam. Die Bäume stehen dabei in voller Blüte.";
				$scope.descrtexttwo = "Die Farben sind frei gewählt und geben dem Bild einen fantasievollen Charakter. Merkmal der Stadt sind nicht nur die Hausboote, sondern auch die vielen Fahrräder, die man hier auf der Brücke sehen kann.";
				$scope.descrtextthree ="";
			}, 0);
			return counter;
		};

		$scope.fhousesClick = function(){

			$timeout(function(){
				$scope.counter = 10;
				$scope.picname = "img/fantasyhouses-big.png"; 
				$scope.headline = "Fantasiestraße";
				$scope.descrtextone = "Auf diesem Bild sind mehrere, stark eigeninterpretierte Häuser an einer Straße abgebildet. Sie sind bunt und besitzen einen Fantasiecharakter.";
				$scope.descrtexttwo = "Wichtig bei diesem Bild ist, dass mit der langgezogenen Straße auch die Perspektive zum Ausdruck kommt. Architekturgemälde werden oft mit Fluchtpunkten auf einer Horizontlinie gemalt. Dadurch entsteht der Eindruck, dass die Formen nach hinten hin kleiner werden. Die Horizontlinie spiegelt demnach die Höhe des Betrachters im Raum wider. Insgesamt verleiht das perspektivische Zeichnen den Bildern von der Anordnung der Körper her einen realistischen Charakter. ";
				$scope.descrtextthree ="";
			}, 0);
			return counter;
		};

		$scope.harlemClick = function(){

			$timeout(function(){
				$scope.counter = 11;
				$scope.picname = "img/harlem-big.png"; 
				$scope.headline = "Diner in Harlem";
				$scope.descrtextone = "Diesem Bild liegt eine Fotoaufnahme zugrunde. Es zeigt ein Schnellrestaurant im New Yorker Stadtteil Harlem.";
				$scope.descrtexttwo = "Harlem ist längst nicht mehr das gefährliche Ghetto, was es einst war. Vor allem die 125th Straße, der Martin Luther King Boulevard ist lebendig, vielfältig und tagsüber für Touristen durchaus zugänglich.";
				$scope.descrtextthree ="Gerade East Harlem am Rande der Upper East Side merkt man aber noch die Unterschiede des Stadtviertels zum Rest von Manhatten.";
			}, 0);
			return counter;
		};
		$scope.florenceClick = function(){

			$timeout(function(){
				$scope.counter = 12;
				$scope.picname = "img/florence-big.png"; 
				$scope.headline = "Ponte Vecchio in Florenz";
				$scope.descrtextone = "Florenz ist nicht nur bekannt für seinen Dom, sondern auch für die beliebte Touristenattraktion Ponte Vecchio.";
				$scope.descrtexttwo = "Das bedeutet so viel wie \"Alte Brücke\". Heute findet man vor allem Händler auf der Brücke, die ihre Waren den zahlreichen Touristen in Florenz anbieten.";
				$scope.descrtextthree ="";
			}, 0);
			return counter;
		}; 

}]);  


myApp.controller('tecController', ['$scope', '$log','$timeout', function($scope, $log, $timeout){
        $scope.picsDemoClick = function (){
            
            $timeout(function(){
				$scope.isvalid = 1;
			}, 10);
			return isvalid;
        };
    
        $scope.back1 = function(){
            
            $timeout(function(){
				$scope.backvalid = 1;
			}, 10);
			return backvalid;
        };
    
        $scope.back2 = function(){
            
            $timeout(function(){
				$scope.backvalid = 2;
			}, 10);
			return backvalid;
        };
    
        $scope.back3 = function(){
            
            $timeout(function(){
				$scope.backvalid = 3;
			}, 10);
			return backvalid;
        };
    
         $scope.back4 = function(){
            
            $timeout(function(){
				$scope.backvalid = 4;
			}, 10);
			return backvalid;
        };
    
        $scope.forward1 = function(){
            
            $timeout(function(){
				$scope.forwardvalid = 1;
			}, 10);
			return backvalid;
        };
    
        $scope.forward2 = function(){
            
            $timeout(function(){
				$scope.forwardvalid = 2;
			}, 10);
			return backvalid;
        };
    
        $scope.forward3 = function(){
            
            $timeout(function(){
				$scope.forwardvalid = 3;
			}, 10);
			return backvalid;
        };
    
        $scope.forward4 = function(){
            
            $timeout(function(){
				$scope.forwardvalid = 4;
			}, 10);
			return backvalid;
        };
	
    
    
}]);

myApp.controller('contactController', ['$scope', '$log','$timeout', '$http', function($scope, $log, $timeout, $http){

	$scope.contactForm = {}; 

	$scope.onSubmit = function(valid) {


		if(!valid){ 
			$scope.error ="Bitte geben Sie Ihren Namen ein.";
			$scope.error2 ="Bitte geben Sie eine gültige Emailadresse ein";
			$scope.error3 ="Bitte geben Sie eine Nachricht ein.";
			$scope.preventdefault; 
		}else{
			var request = $http({
            method: "post",
            url: "contact_form_mail.php",
            data: {
                name: $scope.contactForm.name,
                email: $scope.contactForm.email,
                message: $scope.contactForm.message
            }
        	});

        	request.success(function (data) {
            	alert("Vielen Dank für Ihre Nachricht!");
       		});

		}

	}; 

	$scope.counter = 0;
      $scope.change = function() {
        $scope.counter++;
     };

}]);



myApp.controller('legalController', ['$scope', '$log','$timeout', function($scope, $log, $timeout){


}]);





myApp.directive("mobilenavlist", function(){
	return {
		restrict: 'AECM', 
		templateUrl: 'directives/mobilenavlist.html', 
		replace: true
	}

}); 