

let bife = document.getElementById("slide1");
let mila = document.getElementById("slide2");
let parissiene = document.getElementById("slide3");

function textosig(e) {
    e.preventDefault();

    if ( bife.classList.value == 'active') {
        $("#plato").html(" <h5 >Bife de Chorizo</h5> <p>Bife de Chorizo a la parrilla con guarnición de púre.</p>")
    } 
    else if (mila.classList.value === 'active' ) {
        $("#plato").html(" <h5 >Milanesa a Caballo</h5> <p>Milanesa a Caballo (Huevo Frito) con guarnición de papas fritas y queso cheddar con jamón.</p>")
       
    } else if (parissiene.classList.value == 'active'){
        $("#plato").html(" <h5 >Ñoquis Parissiene</h5> <p>Ñoquis Parissiene. Pollo, jamón, queso gratinado y salsa mixta</p>")
    };


   
}

    

  let nuevotexto = document.getElementById("nuevotexto");
   nuevotexto.addEventListener("click", textosig);
    
   console.log(bife.classList.value)
   console.log(mila.classList.value)
   console.log(parissiene.classList.value)
   

    
   function textoprev(e) {
    e.preventDefault();



    if ( bife.classList.value == 'active') {
        $("#plato").html(" <h5 >Bife de Chorizo</h5> <p>Bife de Chorizo a la parrilla con guarnición de púre.</p>")
    } 
    else if (mila.classList.value === 'active' ) {
        $("#plato").html(" <h5 >Milanesa a Caballo</h5> <p>Milanesa a Caballo (Huevo Frito) con guarnición de papas fritas y queso cheddar con jamón.</p>")
       
    } else if (parissiene.classList.value == 'active'){
        $("#plato").html(" <h5 >Ñoquis Parissiene</h5> <p>Ñoquis Parissiene. Pollo, jamón, queso gratinado y salsa mixta</p>")
    };


   
}

    

  let textoant = document.getElementById("textoprv");
  textoant.addEventListener("click", textoprev);