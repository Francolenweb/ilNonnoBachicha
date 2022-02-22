let bife = document.getElementById("slide1");
let mila = document.getElementById("slide2");
let parissiene = document.getElementById("slide3");
let empanada = document.getElementById("slide4");
let ravioles = document.getElementById("slide5");
let suprema = document.getElementById("slide6");
let matambre = document.getElementById("slide7");

function textosig(e) {
    e.preventDefault();
    
    if ( bife.classList.value == 'active') {
        $("#plato").html(" <h5 >Bife de Chorizo Bachicha</h5> <p>300g de bife de chorizo con 1 huevo frito arriba, acompañado de papas españolas con cebolla  gratinadas</p>")
    } 
    else if (mila.classList.value === 'active' ) {
        $("#plato").html(" <h5 >Milanesa Completa</h5> <p>Milanesa de ternera con 1 huevo frito, acompañada con papas fritas con cheddara y bacon.</p>")
       
    } else if (parissiene.classList.value === 'active' ) {
        $("#plato").html(" <h5 >Ñoquis Parissiene</h5> <p>Ñoquis caseros con Salsa parissiene (salsa blanca, jamon, pollo, champingnones,gratinados con queso)</p>")
       
    }else if (empanada.classList.value === 'active' ) {
        $("#plato").html(" <h5 >Empanada de Carne Casera</h5> <p>Empanada casera con los mejores ingredientes y el mejor sabor.</p>")
       
    }else if (ravioles.classList.value === 'active' ) {
        $("#plato").html(" <h5 >Ravioles a la 'Bachicha'</h5> <p>Ravioles caseros de carne y verdura acompañado de una salsa Bachicha(Bolognesa, Pollo,jamon, muzzarella, champignones y crema, gratinada)</p>")
       
    }else if (suprema.classList.value === 'active' ) {
        $("#plato").html(" <h5 >Suprema Suiza</h5> <p>Suprema de pollo con salsa blanca, gratinada, acompañada con unas papas españolas.</p>")
       
    }else if (matambre.classList.value == 'active'){
        $("#plato").html(" <h5 >Matambrito a la Pizza</h5> <p>Matambre de cerdo con jamon y queso gratinado, acompañado de papas a la española</p>")
    };


}

    

  let nuevotexto = document.getElementById("nuevotexto");
   nuevotexto.addEventListener("click", textosig);
 
   

    
   function textoprev(e) {
    e.preventDefault();



    if ( bife.classList.value == 'active') {
        $("#plato").html(" <h5 >Bife de Chorizo Bachicha</h5> <p>300g de bife de chorizo con 1 huevo frito arriba, acompañado de papas españolas con cebolla  gratinadas</p>")
    } 
    else if (mila.classList.value === 'active' ) {
        $("#plato").html(" <h5 >Milanesa Completa</h5> <p>Milanesa de ternera con 1 huevo frito, acompañada con papas fritas con cheddara y bacon.</p>")
       
    } else if (parissiene.classList.value === 'active' ) {
        $("#plato").html(" <h5 >Ñoquis Parissiene</h5> <p>Ñoquis caseros con Salsa parissiene (salsa blanca, jamon, pollo, champingnones,gratinados con queso)</p>")
       
    }else if (empanada.classList.value === 'active' ) {
        $("#plato").html(" <h5 >Empanada de Carne Casera</h5> <p>Empanada casera con los mejores ingredientes y el mejor sabor.</p>")
       
    }else if (ravioles.classList.value === 'active' ) {
        $("#plato").html(" <h5 >Ravioles de Verdura 'Bachicha'</h5> <p>Ravioles caseros de carne y verdura acompañado de una salsa Bachicha(Bolognesa, Pollo,jamon, muzzarella, champignones y crema, gratinada)</p>")
       
    }else if (suprema.classList.value === 'active' ) {
        $("#plato").html(" <h5 >Suprema Suiza</h5> <p>Suprema de pollo con salsa blanca, gratinada, acompañada con unas papas españolas.</p>")
       
    }else if (matambre.classList.value == 'active'){
        $("#plato").html(" <h5 >Matambrito a la Pizza</h5> <p>Matambre de cerdo con jamon y queso gratinado, acompañado de papas a la española</p>")
    };

   
};

    

  let textoant = document.getElementById("textoprv");
  textoant.addEventListener("click", textoprev);