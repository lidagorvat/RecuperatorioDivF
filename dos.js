/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más liviano de los sólidos
*/function mostrar()
{
  let marca;
  let precio;
  let peso;
  let tipo;
  let respuesta;
  let sumapeso=0;
  let preciocaroliquido=0;
  let marcacaraliquido;
  let flagliquido=0
  let pesolivianosolido=0;
  let flagsolido=0
  let marcalivianasolido;

  do 
  {
    marca=prompt("Ingrese la marca del producto ");

    precio=parseFloat(prompt("Ingrese el precio del producto "));
    
    while((!(precio>0)) || isNaN(precio))
    
    {
      precio=parseFloat(prompt("El precio no es válido. Ingréselo nuevamente  "));
    }

    peso=parseFloat(prompt("Ingrese el peso del producto "));
    
    while((!(peso>0)) || isNaN(peso))

    {
      peso=parseFloat(prompt("El peso no es válido. Ingréselo nuevamente "));
    }

    tipo=prompt("Ingrese el tipo de producto (sólido o líquido)").toLowerCase();

    while(tipo != 'sólido' && tipo != 'líquido' && tipo != 'solido' && tipo != 'liquido')
    {
      tipo=prompt("El tipo de producto no es válido. Ingréselo nuevamente ").toLowerCase();
    }
  
    sumapeso += peso;

    if((preciocaroliquido<precio || flagliquido == 0) &&  tipo == 'liquido')
  
    {
      preciocaroliquido=precio;
      marcacaraliquido=marca;
      flagliquido = 1;
    }

    if((pesolivianosolido>peso || flagsolido == 0) && tipo =='solido')
    {
      pesolivianosolido=peso;
      marcalivianasolido=marca;
      flagsolido = 1;
    }
    respuesta=prompt("¿Quiere seguir agregando productos? (INGRESE 'SI' PARA CONTINUAR AGREGANDO PRODUCTOS) ").toLowerCase();
    
  }while(respuesta == 'si');
   

   //a
   alert("El peso total de la compra es de " + sumapeso);
   
   //b
   if(flagliquido==1)
   {
   alert("La marca más cara de los líquidos es " + marcacaraliquido + " y cuesta " + preciocaroliquido);
   }
   else
   {
     alert("No se han registrado líquidos");
   }

   //c
   if (flagsolido==1)
   {
   alert("La marca más liviana de los sólidos es " + marcalivianasolido);
   }
   else
   {
     alert("No se han registrado sólidos");
   }

}
