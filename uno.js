
function mostrar()
{
	alert("Ejercicio 1");

	let nombre;
  let edad;
  let sexo;
  let puesto
  let sueldo;
  let respuesta;
  let acumSueldoPro = 0;
  let acumSueldoA = 0;
  let acumSueldoQa = 0;
  let contSueldoPro = 0;
  let contSueldoA = 0;
  let contSueldoQa = 0;
  let promedioPro;
  let promedioA;
  let promedioQa;
  let maxSueldo;
  let flagMSueldo = 1;
  let sexoMSueldo;
  let flagMSMujer = 1;
  let nombreMSMujer;
  let sueldoMujer;
  let contProNb = 0;

  do {
    nombre = prompt("ingrese nombre");

    edad = parseInt(prompt("Edad:"));
		while(isNaN(edad)){
			edad = parseInt(prompt("Error. Ingrese una edad válida:"));
    }
    
    sexo = prompt("ingrese sexo: f/m/nb")
		while(sexo != "f" && sexo != "m" && sexo != "nb"){
			sexo = prompt("error. ingrese sexo: f/m/nb");
    }

    puesto = prompt("ingrese puesto: programador/analista/Qa");
		while(isNaN(puesto) && puesto != "programador" && puesto != "analista" && puesto != "Qa"){
			puesto = prompt("error al ingresar puesto, ingrese puesto: programador/analista/Qa");
    }

    sueldo = parseInt(prompt("ingrese sueldo entre 15000 y 70000:"));
		while(sueldo < 15000 || sueldo > 70000 || isNaN(sueldo)){
			sueldo = parseInt(prompt("error al ingresar sueldo, entre 15000 y 70000"));
    }

    // Punto A
    switch (puesto){
      case "programador":
      acumSueldoPro = sueldo;
      contSueldoPro++;

      break;
      case "analista":
      acumSueldoA = sueldo;
      contSueldoA++;

      break;
      case "Qa":
      acumSueldoQa = sueldo;
      contSueldoQa++;

      break;

    }

    //B
   if(flagMSueldo || sueldo > maxSueldo){
    maxSueldo = sueldo;
    sexoMSueldo = sexo;
    flagMSueldo = 0;
   }

   //C
   if( sexo == "f" && (flagMSMujer || sueldo > sueldoMujer)){
    sueldoMujer = sueldo;
    nombreMSMujer = nombre;
    flagMSMujer = 0;
   }

   //D
   if(puesto == "programador" && sexo == "nb" && sueldo >= 20000 && sueldo <= 55000){

    contProNb++;
   }

    respuesta = prompt("quiere ingresar otro empleado?");
  } while (respuesta == "si");

  // punto A
  if(contSueldoPro != 0){
    promedioPro = acumSueldoPro / contSueldoPro;

    console.log("A sueldo promedio de programadores: " + promedioPro);
  }

  if(contSueldoA != 0){
    promedioA = acumSueldoA / contSueldoA;

    console.log("A sueldo promedio de analista: " + promedioA);
  }
  
  if(contSueldoQa != 0){
    promedioQa = acumSueldoQa / contSueldoQa;
    console.log("A sueldo promedio de Qa: " + promedioQa);

  }

  //punto B
  console.log("sexo con mayor sueldo: " + sexoMSueldo + " con un sueldo de: " + maxSueldo);

  //punto C
  console.log("el nombre del empleado femenino con mas sueldo es: " + nombreMSMujer);

  //punto D
  if(sexo == "nb" && puesto  == "programador"){ 
    console.log("La cantidad de programadores no binarios es " + contProNb);

}else{
    console.log("No hay programadores no binarios");
}

}
