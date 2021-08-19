window.onload = function(){

    var map;

    function initialize(){
        var mapProp = {
            center: new google.maps.LatLng(-27.648598,-48.577423),
            scrollWheel: false,
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        map = new google.maps.Map(document.getElementById("mapa"),mapProp);
    }

    function addMarker(lat,lng,icon,content,click){
        var latLng = {'lat': lat, 'lng': lng};
        var marker = new google.maps.Marker({
            position: latLng,
            map: map,
            icon: icon
        });
        var infoWindow = new google.maps.InfoWindow({
            content: content,
            maxWidth: 200,
            pixelOffset: new google.maps.Size(0,20)
        });

        if(click == true){
            google.maps.event.addListener(marker,'click',function(){
                infoWindow.open(map, marker);
            });
        }else{
            infoWindow.open(map, marker);
        }
    }

    var legenda = '<p style="color: black; font-size: 13px; padding: 10px 0; border-bottom: 1px solid black;">Meu Endereço Personalizado</p>';
    var legenda2 = '<p style="color: black; font-size: 13px; padding: 10px 0; border-bottom: 1px solid black;">Meu Endereço Personalizado 2</p>';

    initialize();
    addMarker(-27.616637,-48.592322,'',legenda,true);
    addMarker(-27.600000,-48.592000,'',legenda2,false);
}