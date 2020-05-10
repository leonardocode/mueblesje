(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Seleccionar el formulario para validar
      var forms = document.getElementsByClassName('needs-validation');
      // Validar cada campo y prevenir que se envie
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();




/****************************************************
preload
****************************************************/



let cargarImg = $("img");
let cargarScript = $("script");
let cargarCSS = $("link");
let cargarVideos = $("video");
let cargarAudios = $("audio");
let totalObjetos = [];
let numItem = 0;
let valorPorcentaje = 0;
let incremento = 0;
let numCarga = 0;

totalObjetos.push(cargarImg, cargarScript, cargarCSS, cargarVideos, cargarAudios);

totalObjetos.forEach(funcionForEach);

function funcionForEach(item, index){
	
	for(var i = 0; i < item.length; i++){

		numItem++;

		valorPorcentaje = 100/numItem;

	}

	for(var i = 0; i < item.length; i++){

		preload(i, item);	
		
	}

}

function preload(i, item){

	setTimeout(function(){

		$(item[i]).ready(function(){

				numCarga++

				incremento = Math.floor(numCarga * valorPorcentaje);
				
				$("#porcentajeCarga").html(incremento+"%");

				$("#rellenoCarga").css({"width":incremento+"%"});

        if(incremento >= 100)
        {
          $("#preload").delay(400).css({"display":"none"});
          $("body").delay(401).css({"display":"block"});
          
				}

			})

	},i*100);

}