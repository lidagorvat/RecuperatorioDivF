/*
1)De 5  personas que ingresan al hospital se deben tomar y
validar los siguientes datos.
nombre , temperatura, sexo y edad.
a)informar la cantidad de personas de cada sexo.
b)la edad promedio en total
c)la mujer con más temperatura(si la hay)
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	let nombre;
	let temperatura;
	let sexo;
	let edad;
	let contadorf=0;
	let contadorm=0;
	let sumaedades=0;
	let promedio;

	let flagf=0;
	let flagm=0;


	for(let i = 0; i < 5; i++)
	{
		nombre=prompt("Ingrese el nombre del paciente ").toLowerCase();
		
		temperatura=parseFloat(prompt("Ingrese la temperatura del paciente "));
		while(isNaN(temperatura))
		{
			temperatura=parseFloat(prompt("La temperatura ingresada no es válida. Inténtelo nuevamente "));
		}

		sexo=prompt("Ingrese el sexo del paciente (m o f) ").toLowerCase();
		while(sexo !='m' && sexo != 'f')
		{
			sexo=prompt("El sexo ingresado no es válido. Inténtelo nuevamente ").toLowerCase();
		}

		edad=parseInt(prompt("Ingrese la edad del paciente ").toLowerCase());
		while(edad<=0 || isNaN(edad))
		{
			edad=parseInt(prompt("La edad ingresada no es válida. Inténtelo nuevamente ").toLowerCase());
		}
//REVISAR FLAGS
		if(sexo=='f')
		{
			flagf=1
			contadorf++;
		}
		if(sexo=='m')
		{
			flagm=1
			contadorm++;
		}
		if(flagf=0)
		{
			
		}
		
		sumaedades+=edad;
	}
	promedio=sumaedades/5;

	//a
	alert("La cantidad de pacientes femeninos es de " + contadorf + " y la cantidad de pacientes masculinos es de " + contadorm);
	console.log("La cantidad de pacientes femeninos es de " + contadorf + " y la cantidad de pacientes masculinos es de " + contadorm);
	//b
	alert("El promedio de las edades de los pacientes es de " + promedio);
	console.log("El promedio de las edades de los pacientes es de " + promedio);
}
