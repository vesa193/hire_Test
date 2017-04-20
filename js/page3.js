$(document).ready(function() {
	/*Filters*/
	var filterArray = ['srb', 'ger', 'fra'];
	var elArray = [];
	
	var toggleFilter = function(el){
		
		if(el){
			if( filterArray.indexOf($(el).data('filter')) > -1){
				filterArray.splice(filterArray.indexOf($(el).data('filter')), 1);
			}else{
				filterArray.push($(el).data('filter'))
			}
		}

		//Btn Filter
		$('#filters .filter-btn').each(function(){
			if( filterArray.indexOf($(this).data('filter')) > -1 ){
				$(this).addClass('active');
			}else{
				$(this).removeClass('active');
			}
		});
		

		//Table filter
		$('#filter-table tr').each(function(){
			elArray = $(this).data('filter').split(" ");
			
			if( filterArray.indexOf(elArray[0]) > -1 && filterArray.indexOf(elArray[1]) > -1){
				$(this).show();
			}else{
				$(this).hide();
			}
		});
	};
	
	toggleFilter();
	
	$('.filter-btn').on('click', function(){
		toggleFilter($(this));
	});

//Gmap init
	function initialize() {
	    var map = new google.maps.Map(document.getElementById("myMap"), {
	     zoom: 12,
	     center: new google.maps.LatLng(40.779502, -73.967857)
	    });
	    var iconBase = 'markers/';
        var icons = {
          velika: {
            icon: iconBase + 'big.png'
          },
          srednja: {
            icon: iconBase + 'medium.png'
          },
          mala: {
            icon: iconBase + 'low.png'
          }
        };

        var features = [
          {
            position: new google.maps.LatLng(40.779502, -73.967857),
            type: 'velika'
          }, {
            position: new google.maps.LatLng(40.763075, -73.993751),
            type: 'srednja'
          }, {
            position: new google.maps.LatLng(40.765283, -73.962318),
            type: 'mala'
          }
        ];

        // Create markers.
        features.forEach(function(feature) {
          var marker = new google.maps.Marker({
            position: feature.position,
            icon: icons[feature.type].icon,
            map: map
          });
        });
	}
	google.maps.event.addDomListener(window, 'load', initialize);
//END OF DOC READY
});