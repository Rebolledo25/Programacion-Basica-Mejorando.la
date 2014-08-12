function aleatorio(minimo, maximo)
{
	var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo);
	return numero;
}


var Piedra = 0;
var Papel = 1;
var Tijera = 2;
var Lagarto = 3;
var Spock = 4;
var opciones = ["Piedra", "Papel", "Tijera", "Lagarto", "Spock"];

var opcionUsuario;
var opcionMaquina = aleatorio(0,4);

opcionUsuario = prompt("¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2\nLagarto: 3\nSpock: 4", 0);

alert("Elegiste: " + opciones[opcionUsuario]);
alert("JavaScript eligió: " + opciones[opcionMaquina]);

if (opcionUsuario == Piedra)
{
  if(opcionMaquina == Piedra)
    {
      alert("Empate :|");
    }
  else if(opcionMaquina == Papel)
    {
      alert("Perdiste :(");
    }
  else if(opcionMaquina == Tijera)
    {
      alert("¡Ganaste! :)");
    }
  else if(opcionMaquina == Lagarto)
    {
      alert("¡Ganaste! :)"); 
    }
  else if(opcionMaquina == Spock)
    {
      alert("Perdiste :(");
    }
}

else if (opcionUsuario == Papel)
{
   if (opcionMaquina == Piedra)
 {     	
     alert("¡Ganaste! :)");
 }
   else if (opcionMaquina == Papel)
 {
     alert("Empate :|");
 }
   else if (opcionMaquina == Tijera)
 {
     alert("Perdiste :(");
 }
   else if (opcionMaquina == Lagarto)
 {
     alert("Perdiste :(");
 }   
   else if (opcionMaquina == Spock)
 {
     alert("¡Ganaste! :)");
 }
}

else if (opcionUsuario == Tijera)
{
  if (opcionMaquina == Piedra)
 {
      alert("Perdiste :(");
 }
  else if (opcionMaquina == Papel)
 {
      alert("¡Ganaste! :)");
 }	
  else if (opcionMaquina == Tijera)
 {
      alert("Empate :|");
 }
  else if (opcionMaquina == Lagarto)
 {
      alert("¡Ganaste! :)");
 }
  else if (opcionMaquina == Spock)
 {
      alert("Perdiste :(");
 }
}

else if (opcionUsuario == Lagarto)
{
  if (opcionMaquina == Piedra)
 {
      alert("Perdiste :(");
 }
  else if (opcionMaquina == Papel)
 {
      alert("¡Ganaste! :)");
 }  
  else if (opcionMaquina == Tijera)
 {
      alert("Perdiste :(");
 }
  else if (opcionMaquina == Lagarto)
 {
      alert("Empate :|");
 }
  else if (opcionMaquina == Spock)
 {
      alert("¡Ganaste! :)");
 }
}

else if (opcionUsuario == Spock)
{
  if (opcionMaquina == Piedra)
 {
      alert("¡Ganaste! :)");
 }
  else if (opcionMaquina == Papel)
 {
      alert("Perdiste :(");
 }  
  else if (opcionMaquina == Tijera)
 {
      alert("¡Ganaste! :)");
 }
  else if (opcionMaquina == Lagarto)
 {
      alert("Perdiste :(");
 }
  else if (opcionMaquina == Spock)
 {
      alert("Empate :|");
 }
}

else
{
    alert("Acaba de ingresar un término no válido. Inténtelo de nuevo.");
}
