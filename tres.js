/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados. 
nombre del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el nombre de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	let nombre;
	let destino;
	let temporada;
	let cantpasajeros;
	let bariloche=0;
	let cataratas=0;
	let salta=0;
	let lugarmaselegido1;
	let lugarmaselegido2;
	let respuesta;
	let cantidaddevisitas;
	let nombretitularmáspasajeros;
	let cantidadmáspasajeros=0;
	let invierno=0;
	let personasinvierno=0;
	let promedio;


	let flagbariloche=0;
	let flagcataratas=0;
	let flagsalta=0;
	let sumaflags;

	do 
	{
		nombre=prompt("Ingrese el nombre del pasajero").toLowerCase();
		while(!(isNaN(nombre)))
		{
			nombre=prompt("El nombre ingresado no es válido. Inténtelo nuevamente").toLowerCase();
		}

		destino=prompt("Ingrese el destino a elegir (Bariloche, Cataratas o Salta) ").toLowerCase();
		while(destino !='bariloche' && destino !='cataratas' && destino !='salta') 
		{
			destino=prompt("El destino es incorrecto. Ingréselo nuevamente. ").toLowerCase();
		}

		temporada=prompt("Ingrese la temporada en la que desea viajar (Otoño, invierno, verano o primavera) ").toLowerCase();
		while(temporada !='otoño' && temporada !='invierno' && temporada !='verano' && temporada !='primavera')
		{
			temporada=prompt("La temporada ingresada no es válida. Ingréselo nuevamente. ").toLowerCase();
		}

		cantpasajeros=parseInt(prompt("Ingrese la cantidad de pasajeros (mayor a cero) ").toLowerCase());
	
		while(cantpasajeros <=0)
		{
			cantpasajeros=parseInt(prompt("La cantidad ingresada no es válida. Inténtelo nuevamente ").toLowerCase());
		}

		

		if(destino == 'bariloche') 
		{
			bariloche++;
		}
		else if(destino == 'cataratas')
		{
			cataratas++;
		}
		else
		{
			salta++;
		}

		if(cantidadmáspasajeros<cantpasajeros)
		{
			cantidadmáspasajeros=cantpasajeros;
			nombretitularmáspasajeros=nombre;
		}
		
		if(temporada=='invierno')
		{
			invierno++;
			personasinvierno+=cantpasajeros;
		}
		respuesta=prompt("¿Desea ingresar otro viaje? Ingrese 'si' para realizarlo ").toLowerCase();

	}while (respuesta == 'si');

	
	
	if(bariloche>=salta && bariloche>=cataratas)
	{
		flagbariloche=1;
		cantidaddevisitas=bariloche;

	}
	if(salta>=bariloche && salta>=cataratas)
	{
		flagsalta=1;
		cantidaddevisitas=salta;
	}
	if(cataratas>=bariloche && cataratas>=salta)
	{
		flagcataratas=1;
		cantidaddevisitas=cataratas;
	}
	
	sumaflags=flagbariloche + flagsalta + flagcataratas;

	//a
	
	if(sumaflags==1)
	{
		if(flagbariloche==1)
		{
			lugarmaselegido1="Bariloche";

		}
		else if(flagsalta==1)
		{
			lugarmaselegido1="Salta";
		}
		else
		{
			lugarmaselegido1= "Cataratas";
		}
		console.log("El destino más visitado es " + lugarmaselegido1);
		alert("El destino más visitado es " + lugarmaselegido1);

	}

	if(sumaflags==2)
	{
		if(flagbariloche==1)
		{
			lugarmaselegido1="Bariloche";
		}
		if(flagsalta==1)
		{
			if(lugarmaselegido1=="Bariloche")
			{
				lugarmaselegido2="Salta";
			}
			else
			{
				lugarmaselegido1="Salta";
			}
		if(flagcataratas==1)
		{
			lugarmaselegido2="Cataratas";
		}
		}
		console.log("Los destinos más visitados son " + lugarmaselegido1 + " y " + lugarmaselegido2);
		alert("Los destinos más visitados son " + lugarmaselegido1 + " y " + lugarmaselegido2);
	}
	
	if(sumaflags==3)
	{
		console.log("Todos los destinos tuvieron " + cantidaddevisitas + " cantidad de visitas.");
		alert("Todos los destinos tuvieron " + cantidaddevisitas + " cantidad de visitas.");
	}
	
	 //b

	 console.log("El nombre del titular que lleva más pasajeros es " + nombretitularmáspasajeros);
	 alert("El nombre del titular que lleva más pasajeros es " + nombretitularmáspasajeros);

	 //c
	 if (invierno!=0)
	 {
		promedio=personasinvierno/invierno;
	 }
	 else 
	 {
		 promedio=0
	 }
	console.log("El promedio de gente que viajo en invierno es " + promedio);
	alert("El promedio de gente que viajo en invierno es " + promedio);
}
