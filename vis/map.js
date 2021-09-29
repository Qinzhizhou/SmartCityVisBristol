var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
				maxZoom: 18,
				attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Points &copy 2012 LINZ'
			}),
			latlng = L.latLng(51.453579,  -2.597723);            
        // Add marker into the map
		var map = L.map('map', {center: latlng, zoom: 14.2, layers: [tiles]});
        var markers =  L.markerClusterGroup();	
		function time_sort(a, b) {
    		return new Date(a["Date Time"]).getTime() - new Date(b["Date Time"]).getTime();
		}
		var idinside =[];
		var llength = [];
		var times = 0;

        for  (var i = 0; i < Countonmap.length; i++) {
			var a = Countonmap[i];
			var title = a.id;
			var line_data = Traffic_count;

			function selectedinfor(){
				llength.push(idinside.length)
				
				var l1 = llength[0];
				var l2 = llength[1] - l1;
				var l3 = llength[2] - l2 - l1;
				var l4 = llength[3] - l3 -l2 -l1;
				var l5 = llength[4] - l4 -l3 -l2 -l1 ;

			
				area1 = idinside.slice(0,l1 );
				area2 = idinside.slice(l1, l1 + l2);
				area3 = idinside.slice(l1 + l2, l1 + l2 + l3);
				area4 = idinside.slice(l1 + l2 +l3, l1 + l2 + l3+ l4);
				area5 = idinside.slice(l1 + l2 + l3+ l4, l1 + l2 + l3+ l4+ l5);
			
			
				document.getElementById('1').innerHTML = "Line 1: " +  area1;
				document.getElementById('2').innerHTML = "Line 2: " +  area2;
				document.getElementById('3').innerHTML = "Line 3: " +  area3;
				document.getElementById('4').innerHTML = "Line 4: " +  area4;
				document.getElementById('5').innerHTML = "Line 5: " +  area5;
				areas = [area1, area2, area3, area4, area5];
			 }
			
			var marker = L.marker(new L.LatLng(a.Lat, a.Long), { title: title }).on('dblclick',function(e) {

				times = times + 1
				console.log(times)
				// Interaction with Echarts using DOM events			
				var device_clicked = this.options.title
				selected_value.push( Countonmap[device_clicked - 1].Flow);
    			selected_devices.push( Countonmap[device_clicked - 1].Description);
				idinside.push(Countonmap[device_clicked - 1].CountDeviceID);
				selectedinfor();

			var linechosen = Countonmap[device_clicked - 1].CountDeviceID;
		

			
		var select = linechosen;
		var op = line_data.filter(e=> e['Count Device ID'] == select)
	
		
    	op.sort(time_sort);
    	for  (var c = 0; c < op.length; c++) {
		// stack one
			traffic_counts.push(op[c]['Hourly Flow'])
			date_time.push(op[c]['Date Time'])	 				
		} 

		dataincalendar = traffic_counts.slice(-168)
	
	function makeinput(){
    	inputem = []
    	for(var d = 0; d < 7; d++)
    {
        for(var i = 0; i < 24; i++ ){
        days =[d, i, dataincalendar[d *24 + i]];
        inputem.push(days)
    }
    
	}return inputem
	}
	
	inputselect = makeinput()
	inputselect = inputselect.map(function (item) {
	return [item[1], item[0], item[2] || '-'];
	});

		  
		// the process fill the data in 
			putbarchart()
			putlinechart()
			emptycalendar()
			putheatmap()

		if (traffic_counts.length> 168*5){
			alert("The maximu line number is 5, please clear the data")
			myFunction3()
		}
		});

		marker.bindPopup(
        "<b>ID:" + a.CountDeviceID + "</b>"+
        "<br> " + a.Description + 
        "<br>Flow in 7 days: " + a.Flow +
        "<br> Latitude: " + a.Lat +
        "<br> Longitude: " + a.Long  
        );
		markers.addLayer(marker);
		}

		map.addLayer(markers);
        
		// Add circle into the map
		circles = Countonmap
		var traffics = L.layerGroup()
    	for(var p in circles){
        	var circle = L.circle([circles[p].Lat, circles[p].Long], {radius:[(circles[p].Flow/650)],
          	color: '#de64b9',
          	fillColor: 'pink',
          	fillOpacity: 0.5,
        	}).addTo(traffics).bindPopup("<b>ID:" + circles[p].CountDeviceID + "</b>"+
                                "<br>" + circles[p].Description + 
                                "<br>Flow in 7 days: " + circles[p].Flow 
                                
        	).openPopup();      
			
      	}

		
		var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

		var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox/light-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr}),
		streets  = L.tileLayer(mbUrl, {id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr});

		var baseLayers = {
			"Grayscale": grayscale,
			"Streets": streets
		};
		var overlays = {
			"Devices with clustering": markers,
			"Traffic Flow": traffics,
		};

		L.control.layers(baseLayers,overlays
			).addTo(map);
			var colors = ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'];

			var drawnItems = new L.FeatureGroup();
			map.addLayer(drawnItems);
			var drawControl = new L.Control.Draw({
				
				edit: {
					featureGroup: drawnItems,
					poly: {
						allowIntersection: false
					}
				},

				draw: {
					marker   : false,
					polygon: {
						allowIntersection: false,
						showArea: true,
						color: '#80FFA5',
					},
					polyline : false,
					rectangle: true,
        			circle   : true,
					circleMarker: false,

				}
			});
			
			L.Polygon.include({
				contains: function (latLng) {
					return turf.inside(new L.Marker(latLng).toGeoJSON(), this.toGeoJSON());
				},
			
			});
			
			L.Rectangle.include({
				contains: function (latLng) {
					return this.getBounds().contains(latLng);
				},
				
			});
			
			L.Circle.include({
				contains: function (latLng) {
					return this.getLatLng().distanceTo(latLng) < this.getRadius();
				},
		
			});

			
			var datachosenid = [];
			var datachosentiles = [];
			var selectingdata = [];

			map.on(L.Draw.Event.CREATED, function (e) {
				markers.eachLayer(function (marker) {
					if (e.layer.contains(marker.getLatLng())) { // selecting the marker inside the drawing shape
						marker.setOpacity(0.3)
						datachosenid.push(Countonmap[marker.options.title - 1].CountDeviceID);		
						datachosentiles.push(marker.options.title);				
						selectingdata.sort(time_sort);
						}					
					});
					

				}
			
			
				);
			 

			map.on(L.Draw.Event.CREATED, function (event) {
			var layer = event.layer;
			drawnItems.addLayer(layer);
			});
			map.addControl(drawControl);

