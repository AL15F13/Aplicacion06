// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	$('#bntvibrar').on('tap',
	 function(){
		 navigator.vibrate(1000);
	 }); //tap 'btnvibrar'
	 
	 $('#btnbeep').on('tap',
	  function(){
		 navigator.notification.beep(1)
	 });//Tap 'btnbeep'
	   
	$('#izquierda').on('swipeleft',
	function(){
		alert("!ehK");
	});//Barrido izquierda
	
	$('#derecha').on('swiperight',
	function(){
		alert("Khe¡");
	});//Barrido izquierda
}); 
});

