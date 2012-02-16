var jsons = [];
App.Services = (function(lng, app, undefined) {

	var urls = [
		'http://jorge.sarenet.es/html5/assets/data/menuZafiro.json',
		'http://jorge.sarenet.es/html5/assets/data/menuTxiki.json',
		'http://jorge.sarenet.es/html5/assets/data/menuTopacio.json',
		'http://jorge.sarenet.es/html5/assets/data/menuRubi.json',
		'http://jorge.sarenet.es/html5/assets/data/menuRecena.json',
		'http://jorge.sarenet.es/html5/assets/data/menuLaida.json',
		'http://jorge.sarenet.es/html5/assets/data/menuLaga.json',
		'http://jorge.sarenet.es/html5/assets/data/menuGaztelugatxe.json',
		'http://jorge.sarenet.es/html5/assets/data/menuFinde.json',
		'http://jorge.sarenet.es/html5/assets/data/menuEsmeralda.json',
		'http://jorge.sarenet.es/html5/assets/data/menuDiamante.json',
		'http://jorge.sarenet.es/html5/assets/data/menuDia.json',
		'http://jorge.sarenet.es/html5/assets/data/menuCoctel.json'
	];

	$$.each(urls,function(i, e) {
		var data = {
		};
		lng.Service.get(e, data, function(response) {
			jsons[e] = response;
		});
	});

	var muestra = function(){
		var sectionName = $$('section.show').attr('id');
		var url = 'http://jorge.sarenet.es/html5/assets/data/'+sectionName+'.json';
		var cuenta = jsons[url].length;
		var code = '<div class="recuadros">';
		for(i=0;i<cuenta;i++){
			code += '<p>&nbsp;</p><div class="titulos">'+jsons[url][i].Titulo+'</div><div>\n'+jsons[url][i].Contenido+'</div>\n';
		}
		code += '</div><div style="height: 10px;">&nbsp;</div>';
		var scrollid = 'scroll_'+sectionName;
		//lng.dom(scrollid).html(code);
		//$$(scrollid).html(code);

		App.View.creamenu({
			scrollid : scrollid,
			code : code
		});
		
	}

	function esMail(email) {
		if (email.indexOf("@",1) == -1)  {
		return (false);
		}else {
			if (email.indexOf("@")<2 || email.indexOf(".",email.indexOf("@")+2 || email.indexOf(".")<(email.length - 2) ) == -1){
			return false;
			}
		}
	return true;
	}

	var envioMail = function(){
	
		var nombre = lng.dom('input[name=nombre]').val();
		var email = lng.dom('input[name=email]').val();
		var asunto = lng.dom('input[name=asunto]').val();
		var cuerpo = lng.dom('textarea[name=cuerpo]').val();

		if(nombre == ''){
			window.alert('Debe rellenar el nombre');
			return false;
		}
		if (!esMail(email)) {
			window.alert('Debe insertar un e-mail válido');
			return false;
		}

		var url = 'http://jorge.sarenet.es/html5/envioMail.php';
		var data = {
			nombre: nombre,
			email: email,
			asunto: asunto,
			cuerpo: cuerpo
		};

		lng.Service.get(url, data, function(response) {
			if(response.estado == 'OK'){
				window.alert(response.mensaje);
				lng.dom('input[name=nombre]').val('');
				lng.dom('input[name=email]').val('');
				lng.dom('input[name=asunto]').val('');
				lng.dom('textarea[name=cuerpo]').val('');
			}else{
				window.alert(response.estado);
			}
		});
	
	}

	return {
		muestra : muestra,
		envioMail: envioMail
	}

})(LUNGO, App);
