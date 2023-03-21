
function leaflet(){
	// assign coordinates to a variable
	var parc_des_princes = [48.840910, 2.254640];

	// initialize Leaflet map
	var mymap = L.map('map').setView(parc_des_princes, 20);

	// add tile layer to map
	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
	    maxZoom: 18,
	}).addTo(mymap);

	// set marker at parc des princes and center the map
	var marker = L.marker(parc_des_princes).addTo(mymap);
	mymap.setView(parc_des_princes, 13);
}

