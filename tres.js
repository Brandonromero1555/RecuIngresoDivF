function mostrar()
{
	alert("Ejercicio 3");

	  let nombre;
	  let cantidad;
	  let marca;
	  let respuesta;
	  let precio;
	  let subtotal = 0;
	  let importe;
	  let descuento;
	  let acumLamparas = 0;
	  let acumA = 0;
	  let contA = 0;
	  let acumI = 0;
	  let contI = 0;
	  let acumF = 0;
	  let contF = 0;
	  let promA = 0;
	  let promI = 0;
	  let promF = 0;
      let marcaMasVentas;
	
	  do {
	    nombre = prompt("ingrese nombre:");
	    while (!isNaN(nombre)) {
	      nombre = prompt("Error. Ingrese nombre valido:  ");
	    }
	    cantidad = parseInt(prompt("ingrese cantidad de lamparas:  "));
	
	    marca = prompt("ingrese marca felipelamparas / argentinaluz / illuminatis:  ");
	    while (marca != "felipelamparas" && marca != "argentinaluz" && marca != "illuminatis"){
	    marca = prompt( "Error, ingrese marca Felipelamparas/Argentinaluz/Illuminatis: " );
	    }
	    precio = parseInt(prompt("ingrese precio:"));

	    while (isNaN(precio) || precio <= 0) {
	      precio = parseInt(prompt("error, ingrese precio"));
	    }
	
	    
	
	
	
	    importe = precio * cantidad;
	    subtotal += importe;
	
	    
	    acumLamparas += cantidad;
	
	    
	    if (marca == "felipelamparas") {
	      acumF += cantidad;
	      contF++;
	    } else if (marca == "argentinaluz") {
	      acumA += cantidad;
	      contA++;
	    } else {
	      acumI += cantidad;
	      contI++;
	    }
	
	    respuesta = prompt("quiere ingresar otro cliente?");
	  } while (respuesta == "si");
	
	  if (marca == "felipelamparas" && acumLamparas > 5) {
	    descuento = 0.1;
	  } else if (marca == "argentinaluz" && acumLamparas >= 3) {
	    descuento = 0.05;
	  } else {
	    descuento = 0;
	  }
	
	 
	  console.log("la empresa recaudó $" + subtotal);
	
	  
	  if (descuento != 0) {
	    console.log("en concepto de descuentos, la empresa perdio " + descuento);
	  } else {
	    console.log("la empresa no tuvo perdidas en concepto de descuento");
	  }
	
	  
	  if (contA != 0) {
	    promA = acumA / contA;
	    console.log(
	      "el promedio de cantidad de lamparas vendidas de argentinaluz es " + promA
	    );
	  }
	  if (contI != 0) {
	    promI = acumI / contI;
	    console.log(
	      "el promedio de cantidad de lamparas vendidas de illuminatis  es " + promI
	    );
	  }
	  if (contF != 0) {
	    promF = acumF / contF;
	    console.log(
	      "el promedio de cantidad de lamparas vendidas de felipelamparas es " +
	        promF
	    );
	  }
	
	  
	  if (contA > contF && contA > contI) {
	    marcaMasVentas = "argentinaluz";
	  } else if (contF >= contA && contF > contI) {
	    marcaMasVentas = "felipelamparas";
	  } else {
	    marcaMasVentas = "illuminatis";
	  }
	  console.log("La marca que mas ventas relizó fue " + marcaMasVentas);
	


}

