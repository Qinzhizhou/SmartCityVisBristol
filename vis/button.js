var area1;
var area2;
var area3;
var area4;
var area5;
var areas;
// Button1
document.getElementById("disableButton").onclick = function() {myFunction1()};
    function myFunction1() {
    markers.disableClustering();
}
    ("disableButton", function () {	
});
// Buton2
document.getElementById("enableButton").onclick = function() {myFunction2()}; 
    function myFunction2() {
    markers.enableClustering();
}
    ("disableButton", function () {	
});


// Button4
document.getElementById("Areaselected").onclick = function() {myFunction4()};

var llength = [];
var IDs = [];
var idinside =[]


function time_sort(a, b) {
    
    return new Date(a["Date Time"]).getTime() - new Date(b["Date Time"]).getTime();
}
    function myFunction4(){
        times = times + 1
        console.log(times)
        // Barchart area
        var Length = datachosentiles.length;
        var sumcounts = 0;
    
        var markerinside;
        for (var x =0; x < Length; x++){
            markerinside = datachosentiles[x]-1
            sumcounts += Countonmap[markerinside].Flow;
            idinside.push(Countonmap[markerinside].CountDeviceID);
        }
        selected_value.push(sumcounts);
        selected_devices.push("Selected Area")  
        selectareasbar();

        var op = [];
        var counts =[];
        
        
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
             
             
             areas = [area1, area2, area3, area4, area5];
        
            document.getElementById('1').innerHTML = "Line 1: " +  area1;
            document.getElementById('2').innerHTML = "Line 2: " +  area2;
            document.getElementById('3').innerHTML = "Line 3: " +  area3;
            document.getElementById('4').innerHTML = "Line 4: " +  area4;
            document.getElementById('5').innerHTML = "Line 5: " +  area5;


            return areas, area1, area2, area3, area4, area5;
            
            
         }
         areas = [area1, area2, area3, area4, area5];
        selectedinfor()
        console.log(areas)

        for (var i = 0; i< idinside.length; i ++){
            op[i] = (line_data.filter(e=> e['Count Device ID'] == idinside[i]))
            op[i].sort(time_sort);
        }
               
        function sum(op,c) {
            var s = 0;
                for (var i = 0;i<op.length;i++) {
                s += op[i][c]["Hourly Flow"];
                }
        return s;
        }

        for (var i =0; i <168; i ++){
            counts[i] = sum(op,i)
            date_time[i] = op[0][i]["Date Time"]
            traffic_counts.push(counts[i])
        }
        if (traffic_counts.length> 168*5){
			alert("The maximu line number is 5, please clear the data")
			myFunction3()
		}
        putlinechart()

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

    // Find the max value
    var arr = traffic_counts;
    var max = arr.reduce(function(a, b) {
    return Math.max(a, b);
    }, 0);
    putheatmap()
        // Need to be initialized for the next draw
		datachosenid = [];
		datachosentiles = [];
    } 

    ("disableButton", function () {	
});



// Button3
document.getElementById("cleardataButton").onclick = function() {myFunction3()};
    function myFunction3() {
        selected_devices = [];
		selected_value = [];
        traffic_counts = [];
        dataincalendar = [];
        idinside =[]
        IDs = [];
        putlinechart()
        selectchartMaker()
        emptycalendar()
        selectedinfor()
}

    ("disableButton", function () {	
});