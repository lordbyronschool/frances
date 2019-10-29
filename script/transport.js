$(document).ready(function(){

	$("#train").click(function(){
     var url = "frances/transport/pages/train.html"; 
     $(location).attr('href',url);
     });
	$("#voiture").click(function(){
     var url = "frances/transport/pages/voiture.html"; 
     $(location).attr('href',url);
     });
	$("#moto").click(function(){
     var url = "frances/transport/pages/moto.html"; 
     $(location).attr('href',url);
     });
	$("#velo").click(function(){
     var url = "frances/transport/pages/velo.html"; 
     $(location).attr('href',url);
     });
	$("#bus").click(function(){
     var url = "frances/transport/pages/bus.html"; 
     $(location).attr('href',url);
     });
	$("#avion").click(function(){
     var url = "frances/transport/pages/avion.html"; 
     $(location).attr('href',url);
     });
	$("#bateau").click(function(){
     var url = "frances/transport/pages/bateau.html"; 
     $(location).attr('href',url);
     });
	
	$("#volver").click(function(){
     var url = "frances/transport/transport.html"; 
     $(location).attr('href',url);
     });

});


