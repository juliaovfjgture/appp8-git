// JavaScript Document
$(document).ready(function(e) {
    document.addEventListener("deviceready",function(){ //escuchador de eventos
		$('#izquierda').on("swipeleft",function(){ //Deslizar a la izquierda
			navigator.notification.alert("Deslizo hacia la izquierda",function(){"aplicacion7","ok"}); //aparece mensaje alert
	});//cierra swipe izquierda
	$('#derecha').on("swiperight",function(){ //desliza derecha
		navigator.notification.confirm("¿Qué quieres hacer?",function(op){switch(op) //aparece para confirmar
		{
			case 1: 
			navigator.notification.beep(1); //suena el dispositivo
			break
			
			case 2:
			navigator.notification.vibrate(3000);//vibra el dispositivo
			break
		 }
		},"aplicacion7","Beepear,Vibrar,Cancelar");
		});
	},false);
});
