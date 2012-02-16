
App.View = (function(lng, app, undefined) {

	var imagenes = [
		'assets/images/basajaun1.jpg',
		'assets/images/basajaun2.jpg',
		'assets/images/basajaun3.jpg',
		'assets/images/mari1.jpg',
		'assets/images/mari2.jpg',
		'assets/images/mari3.jpg',
		'assets/images/mari3.jpg',
		'assets/images/lamias1.jpg',
		'assets/images/lamias2.jpg',
		'assets/images/lamias3.jpg',
		'assets/images/real1.jpg',
		'assets/images/real2.jpg',
		'assets/images/real3.jpg',
		'assets/images/imperial1.jpg',
		'assets/images/imperial2.jpg',
		'assets/images/imperial3.jpg',
		'assets/images/jardines1.jpg',
		'assets/images/jardines2.jpg',
		'assets/images/jardines3.jpg'
	];


	$$.each(imagenes,function(i, e) {
		var img = new Image();
		img.src = e;
	});

	var moveImg = function(data){
		var imgAhora = data.imgAntes+1;
		var identificador = 'contenedor_'+data.salon;
		if(imgAhora<=data.maximo){
			var _markup = '<div class="containerImg"><a href="#" id="imagenes"><img src="assets/images/'+data.salon+''+imgAhora+'.jpg" id="imagen'+imgAhora+'" style="width:100%"><span class="hand"></span></a></div>';
			lng.View.Scroll.update(identificador, _markup);
		}else{
			imgAhora = 1;
			var _markup = '<div class="containerImg"><a href="#" id="imagenes"><img src="assets/images/'+data.salon+''+imgAhora+'.jpg" id="imagen'+imgAhora+'" style="width:100%"><span class="hand"></span></a></div>';
			lng.View.Scroll.update(identificador, _markup);
		}
	}
	
	var creamenu = function(data){
		lng.View.Scroll.update(data.scrollid, data.code);
	}

	return{
		moveImg: moveImg,
		creamenu: creamenu
	}


})(LUNGO, App);
