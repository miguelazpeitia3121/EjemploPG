// JavaScript Document
//Codigo html para google
//Aqui se le quita myCenter
/*var myCenter=new google.maps.LatLng(27.45419843297281,-99.52730566263199);
var marker;*/

function initialize(lat, lon)
{
var latlng = new google.maps.LatLng(lat, lon);	
var myOptions = {
  center:latlng,
  zoom:15,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };

var map=new google.maps.Map(document.getElementById("googleMap"),myOptions);

var marker=new google.maps.Marker({
  position:latlng,
  map: map, 
  title:"Mi posición"
  //lo quito para las pruebas iniciales
  //animation:google.maps.Animation.BOUNCE
  });
//lo quito para las pruebas iniciales
/*marker.setMap(map);

var infowindow = new google.maps.InfoWindow({
  content:"Miguel Alvarez Home!!!"
  });

infowindow.open(map,marker);*/
}
// Se quita por que es para html
//google.maps.event.addDomListener(window, 'load', initialize);


//codigo adicional para phonegap

//Codigo de la clase
$(document).ready(function(){
	document.addEventListener("deviseready", function(){ 
	navigator.geolocation.getCurrentPosition(function(position){
		initialize(positoin.coords.latitude, position.cords.longitude); 
	}, function(err){
		navigator.notification.alert('Error: ' + err.code, function(){  }, 'Geolocalizaci&oacute;n', 'Aceptar');	
	}); 
	
	}, false);
	
});