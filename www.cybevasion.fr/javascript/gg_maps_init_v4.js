var icon_ville1 = L.icon({
	iconUrl: 'https://www.cybevasion.fr/lib2/google/push_rouge.png',
	iconSize: [16, 28],
	iconAnchor: [8, 28]
});
var icon_ville2 = L.icon({
	iconUrl: 'https://www.cybevasion.fr/lib2/google/push_bleu.png',
	iconSize: [14, 24],
	iconAnchor: [7, 24]
});

var icon_villebis1 = L.icon({
	iconUrl: 'https://www.cybevasion.fr/lib2/google/boule_rouge.png',
	iconSize: [10, 10],
	iconAnchor: [5, 5]
});
var icon_villebis2 = L.icon({
	iconUrl: 'https://www.cybevasion.fr/lib2/google/boule_bleu.png',
	iconSize: [10, 10],
	iconAnchor: [5, 5]
});
var icon_villebis3 = L.icon({
	iconUrl: 'https://www.cybevasion.fr/lib2/google/boule_vert.png',
	iconSize: [10, 10],
	iconAnchor: [5, 5]
});

var icon_photo = L.icon({
	iconUrl: 'https://www.cybevasion.fr/lib2/google/photo.png',
	iconSize: [18, 18],
	iconAnchor: [9, 9]
});
var icon_photo2 = L.icon({
	iconUrl: 'https://www.cybevasion.fr/lib2/google/photo2.png',
	iconSize: [25, 25],
	iconAnchor: [12, 12]
});

var icon_hotel = L.icon({
	iconUrl: 'https://www.cybevasion.fr/lib2/hotel_gg.png',
	iconSize: [33, 33],
	iconAnchor: [16, 16]
});
var icon_hotel2 = L.icon({
	iconUrl: 'https://www.cybevasion.fr/lib2/google/hotel.png',
	iconSize: [21, 21],
	iconAnchor: [10, 10]
});

var icon_parking = L.icon({
	iconUrl: 'https://www.cybevasion.fr/lib2/parking_gg.png',
	iconSize: [18, 18],
	iconAnchor: [9, 9]
});
var icon_gare = L.icon({
	iconUrl: 'https://www.cybevasion.fr/lib2/gare_gg.png',
	iconSize: [18, 18],
	iconAnchor: [9, 9]
});
var icon_aero = L.icon({
	iconUrl: 'https://www.cybevasion.fr/lib2/aero_gg.gif',
	iconSize: [21, 21],
	iconAnchor: [10, 10]
});
var icon_porte = L.icon({
	iconUrl: 'https://www.cybevasion.fr/lib2/porte_gg.png',
	iconSize: [18, 18],
	iconAnchor: [9, 9]
});
var icon_metro = L.icon({
	iconUrl: 'https://www.cybevasion.fr/lib2/metro_gg.png',
	iconSize: [18, 18],
	iconAnchor: [9, 9]
});

var icon_visit360 = L.icon({
	iconUrl: 'https://www.cybevasion.fr/lib2/google/virtual360.png',
	iconSize: [21, 21],
	iconAnchor: [10, 10]
});

var icon_annonce = L.icon({
	iconUrl: 'https://www.cybevasion.fr/lib2/google/push_bleu.png',
	iconSize: [14, 24],
	iconAnchor: [7, 24]
});
var icon_annonce2 = L.icon({
	iconUrl: 'https://www.cybevasion.fr/lib2/google/push_rouge2.png',
	iconSize: [14, 24],
	iconAnchor: [7, 24]
});
var icon_annonce3 = L.icon({
	iconUrl: 'https://www.cybevasion.fr/lib2/google/push_violet.png',
	iconSize: [14, 24],
	iconAnchor: [7, 24]
});

var icon_empty = L.icon({
	iconUrl: 'https://www.cybevasion.fr/lib2/trans.gif',
	iconSize: [1, 1],
	iconAnchor: [1, 1]
});
var icon_poly = L.icon({
	iconUrl: 'https://www.cybevasion.fr/lib2/google/maison.png',
	iconSize: [32, 32],
	iconAnchor: [16, 16]
});
var icon_rue = L.icon({
	iconUrl: 'https://www.cybevasion.fr/lib2/icon_rue.gif',
	iconSize: [21, 18],
	iconAnchor: [10, 9]
});

var icon_drapeau = L.icon({
	iconUrl: 'https://www.cybevasion.fr/lib2/google/drapeau.png',
	iconSize: [21, 32],
	iconAnchor: [0, 32]
});
var icon_drapeau2 = L.icon({
	iconUrl: 'https://www.cybevasion.fr/lib2/google/drapeau2.png',
	iconSize: [12, 32],
	iconAnchor: [6, 32]
});

var icon_tour = [];
for(var i=0; i<=51; i++){
	icon_tour[i] = L.icon({
		iconUrl: 'https://www.cybevasion.fr/lib3/maps/tourisme2/' + i + '.png',
		iconSize: [18, 18],
		iconAnchor: [9, 9]
	});
}
icon_tour['metro'] = L.icon({
	iconUrl: 'https://www.cybevasion.fr/lib3/maps/tourisme2/metro.png',
	iconSize: [18, 18],
	iconAnchor: [9, 9]
});

var icon_tour_paris = [];
for(var h=1; h<=18; h++){
	icon_tour_paris[h] = L.icon({
		iconUrl: 'https://www.cybevasion.fr/lib2/google/paris_c' + h + '.png',
		iconSize: [18, 18],
		iconAnchor: [9, 9]
	});
}

var icon_arrdt = [];
for(var i=1; i<=20; i++){
	icon_arrdt[i] = L.icon({
		iconUrl: 'https://www.cybevasion.fr/lib2/google/label_arrdt_' + i + '.png',
		iconSize: [32, 32],
		iconAnchor: [16, 16]
	});
}

var icon_prov = [];
for(var i=0; i<=39; i++){
	icon_prov[i] = L.icon({
		iconUrl: 'https://www.cybevasion.fr/lib/icones/tourisme/google/' + i + '.png',
		iconSize: [18, 18],
		iconAnchor: [9, 9]
	});
}

var icon_num = [];
for(var i=1; i<=50; i++){
	icon_num[i] = L.icon({
		iconUrl: 'https://www.cybevasion.fr/lib2/google/push_' + i + '.png',
		iconSize: [22, 37],
		iconAnchor: [11, 37]
	});
}

var icon_num2 = [];
for(var i=1; i<=15; i++){
	icon_num2[i] = L.icon({
		iconUrl: 'https://www.cybevasion.fr/lib2/google/push2_' + i + '.png',
		iconSize: [22, 37],
		iconAnchor: [11, 37]
	});
}

var icon_num3 = [];
for(var i=1; i<=15; i++){
	icon_num3[i] = L.icon({
		iconUrl: 'https://www.cybevasion.fr/lib2/google/push3_' + i + '.png',
		iconSize: [22, 37],
		iconAnchor: [11, 37]
	});
}

var icon_labelnum = [];
for(var i=1; i<=25; i++){
	icon_labelnum[i] = L.icon({
		iconUrl: 'https://www.cybevasion.fr/lib2/google/labels/label_' + i + '.gif',
		iconSize: [17, 17],
		iconAnchor: [8, 8]
	});
}


var map;
var ma_carte;

function changeType(a){
	// if(a=='satellite'){
	// 	map.setMapTypeId(google.maps.MapTypeId.SATELLITE);
	// }

	// if(a=='map'){
	// 	map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
	// }

	// if(a=='hybrid'){
	// 	map.setMapTypeId(google.maps.MapTypeId.HYBRID);
	// }

	// if(a=='relief'){
	// 	map.setMapTypeId(google.maps.MapTypeId.TERRAIN);
	// }
	console.log('changeType(', a, ')');
}

function createMarker(my_map, my_position, contenu_html, type_icon, index_gg) {
	var marker = L.marker(my_position, {icon: type_icon}).addTo(my_map);

	if(contenu_html!=""){
		marker.bindPopup(contenu_html);
	}

	return marker;
}

function createMarker2(my_map, my_position, contenu_html, type_icon, index_gg) {
	return createMarker(my_map, my_position, contenu_html, type_icon, index_gg);
}

function affiche_marker(my_marker){
	marqueur[my_marker].openPopup();
	marqueur[my_marker].setIcon(icon_annonce2);
}

function affiche_markerbis(my_marker){
	marqueur[my_marker].openPopup();
	marqueur[my_marker].setIcon(icon_villebis1);
}

function affiche_marker2(my_marker){
	marqueur[my_marker].openPopup();
}

function affiche_marker2kml(my_marker){
	marqueur[my_marker].openPopup();
	kmlinfoWindow.close();
}

function affiche_markerbis2(my_marker){
	marqueur[my_marker].openPopup();
}

function revert_marker(my_marker) {
	marqueur[my_marker].setIcon(icon_annonce);
}

function revert_markerbis(my_marker) {
	marqueur[my_marker].setIcon(icon_villebis2);
}

function revert_marker2(my_marker) {
	// marqueur[my_marker].setZIndex(null);
}

function revert_markerbis2(my_marker) {
	// marqueur[my_marker].setZIndex(null);
}

function revert_markerbis3(my_marker) {
	marqueur[my_marker].setIcon(icon_villebis3);
}

var panorama;

// function createSvMarker(point, contenu_html, type_icon, my_yaw, my_pitch, my_zoom, my_width, my_height) {
// 	var marker = new GMarker(point, type_icon);
// 	var contentNode = document.createElement('div');
// 	contentNode.style.textAlign = 'center';
// 	contentNode.style.width = '600px';
// 	contentNode.style.height = '400px';
// 	contentNode.innerHTML = 'Street View en cours de chargement...';
// 	var smallNode = document.createElement('div');
// 	smallNode.style.width = my_width + 'px';
// 	smallNode.style.height = my_height + 'px';
// 	smallNode.id = 'pano';

// 	GEvent.addListener(marker, "click", function() {
// 		marker.openInfoWindow(smallNode);
// 	});
// 	GEvent.addListener(marker, "infowindowopen", function() {
// 		panorama = new GStreetviewPanorama(smallNode);
// 		myPOV = {yaw:my_yaw,pitch:my_pitch,zoom:my_zoom};
// 		panorama.setLocationAndPOV(point, myPOV);
// 		panorama.checkResize();
// 	});
// 	return marker;
// }

// function createSvPano(latp, lonp, my_yaw, my_pitch, my_zoom) {
// 	panorama = new GStreetviewPanorama(document.getElementById("panoSV"));
// 	panorama.setLocationAndPOV(new GLatLng(latp, lonp), {yaw: my_yaw, pitch: my_pitch, zoom: my_zoom});
// }

function createDragMarker(my_map, my_position, contenu_html, index_gg) {
	var marker = L.marker(my_position, {draggable: true}).addTo(my_map);

	if(contenu_html!=""){
		marker.bindPopup(contenu_html);
	}

	return marker;
}

var marqueur = new Array();
var bounds = L.latLngBounds();

function max_zoom(zoom_level, my_map){
	my_map.options.maxZoom = zoom_level;
	if(my_map.getZoom()>zoom_level){
		my_map.setZoom(zoom_level);
	}
}

// var directionsDisplay;
// var directionsService = new google.maps.DirectionsService(); // A CORRIGER !

// Vérifie si l'API de Google est chargée
function init_google(){
	// defer est la "promise" (promesse) qui contient la valeur de retour de la fonction
	// meilleur qu'un "return" puisqu'on est en fonctionnement asynchrone
	var defer = $.Deferred();

	if(typeof lang_gg_maps == 'undefined'){
		lang_gg_maps = 'fr';
	}
	if(typeof gg_maps_api_key == 'undefined'){
		defer.resolve(false);
	} else {
		if(typeof google != 'undefined' && typeof google.maps != 'undefined'){ // On vérifie si l'API de Google Maps est chargée
			defer.resolve(true);
		} else {
			$.ajax({
				url: 'https://maps.googleapis.com/maps/api/js?v=3&language=' + lang_gg_maps + '&key=' + gg_maps_api_key,
				dataType: 'script',
				cache: true, // Cache autorisé
				success: function (){
					directionsService = new google.maps.DirectionsService();
					directionsDisplay = {};
					defer.resolve(true);
				}
			});
		}
	}
	// On retourne la "promise" (promesse)
	return defer.promise();
}

var is_initIti = false;
function initIti(){
	init_google().then(function(google_api_loaded){
		if(google_api_loaded){
			var myLatLng = {lat: lat_annonce, lng: lon_annonce};

			var ma_carte_gg = new google.maps.Map(document.getElementById('map'), {
				center: myLatLng,
				zoom: 12
			});

			var marker = new google.maps.Marker({
				map: ma_carte_gg,
				position: myLatLng
			});

			directionsDisplay = new google.maps.DirectionsRenderer();
			directionsDisplay.setMap(ma_carte_gg);
			directionsDisplay.setPanel(document.getElementById('directionsPanel'));
			is_initIti = true;
		} else {
			console.error('Pas de clé d\'API disponible pour charger l\'API Google');
		}
	});
}

function calcIti(my_type_iti) {
	init_google().then(function(google_api_loaded){
		if(google_api_loaded){
			if(my_type_iti=='' || my_type_iti==undefined){
				my_travel_mode = google.maps.DirectionsTravelMode.DRIVING;
			}else{
				my_travel_mode = google.maps.DirectionsTravelMode.TRANSIT;
			}
			
			var start = document.getElementById('start_iti').value;
			var end = document.getElementById('end_iti').value;
			var request = {
				origin:start, 
				destination:end,
				travelMode: my_travel_mode,
				unitSystem: google.maps.UnitSystem.METRIC,
				region: 'fr'
			};
			directionsService.route(request, function(response, status) {
				if (status == google.maps.DirectionsStatus.OK) {
					if(!is_initIti){
						initIti();
					}
					directionsDisplay.setDirections(response);
				}else{
					alert('Error: ' + status);
				}
			});
		} else {
			console.error('Pas de clé d\'API disponible pour charger l\'API Google');
		}
	});
}