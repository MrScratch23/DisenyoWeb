    
    "use strict";


         const video = document.getElementById('miVideo');
        const btnReiniciar = document.querySelector("#btnReiniciar");
 
        btnReiniciar.addEventListener('click', e=> {
            video.load();
        })

        // aqui empieza el jquery
        // tamaño base para el texto
        let font = 16;
        
        $("#color_fondo").change(function(){
            const color = document.querySelector("#color_fondo").value;
            $(".parrafo_texto").css("background", color);
        });



      $("#b_aumentar").click(function() {
       font +=2;
        
        $(".parrafo_texto").css("font-size", font);
      });

      $("#encabezado").click(function() {
         $(".parrafo_texto").hide();
      });