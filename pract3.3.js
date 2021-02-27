let elprimero = prompt("num uno ");
parseInt(elprimero);
let elsegundo = prompt("num dos ");
parseInt(elsegundo);
let eltercero = prompt("num tres ");
parseInt(eltercero);
if((elprimero == elsegundo) && (elsegundo == eltercero))
{
    document.writeln("Es igual");
}
else if(elprimero > elsegundo && elprimero>eltercero)
{
  document.writeln(elprimero + " Es mayor");
}
else if (elsegundo > elprimero && elsegundo > elprimero)
{
 document.writeln(elsegundo+ " Es mayor");
}
else if(eltercero > elsegundo && eltercero > elprimero)
{
  document.writeln(eltercero + " Es mayor");
}
 