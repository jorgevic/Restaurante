function initialize() {
	//ROADMAP//HYBRID//TERRAIN//SATELLITE
	var infoWindow;
	var myOptions = {
		center: new google.maps.LatLng(43.37443,-2.891808),
		zoom: 12,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);

	var image = 'assets/images/position2.png';
	var myLatLng = new google.maps.LatLng(43.37443,-2.891808);
	var gatikaMarker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		icon: image
	});

	google.maps.event.addListener(gatikaMarker, 'click', function() {
		infowindow = new google.maps.InfoWindow();
		var contentString = "<p><b>Lur Gatika</b><br>";
		contentString += "Barrio Igartua s/n<br>48110 Gatika - Bizkaia<br>Tfno: 94 615 63 44<br>Coordenadas para el GPS:<br>latitud: 43.37443<br>longitud: -2.891808<br></p>";
		// Replace our Info Window's content and position
		infowindow.setContent(contentString);
		infowindow.setPosition(myLatLng);
		infowindow.open(map);
	});
}
