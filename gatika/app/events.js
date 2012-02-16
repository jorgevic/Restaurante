var Acciones = {};
App.Events = (function(lng, app, undefined) {

	Acciones.deslizar = function() {
		var queSec = $$('section.show').attr('id');
		var atributo = '#contenedor_'+queSec+' img';
		var img = lng.dom(atributo);
		var id = img.attr('id');
		var id = id.replace("imagen","");
		var salon = queSec;
		var maximo = 3;
		var imgAntes = parseInt(id);
		App.View.moveImg({
			salon : salon,
			maximo : maximo,
			imgAntes: imgAntes
		});
	}
	
	lng.dom('#imagenes').tap(function(event){
			setTimeout(function() {
				Acciones.deslizar();
		}, 100);
	});
	lng.dom('#imagenes').swipe(function(event){
			setTimeout(function() {
				Acciones.deslizar();
		}, 100);
	});
	lng.dom('#tapMenus').tap(function(event){
			setTimeout(function() {
				app.Services.muestra();
		}, 100);
	});
	lng.dom('#emailEnvio').tap(function(event){
			setTimeout(function() {
				app.Services.envioMail();
		}, 100);
	});


	return {

	}

})(LUNGO, App);
