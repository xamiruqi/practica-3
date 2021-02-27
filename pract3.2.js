let primario = prompt("num uno ");
let secundario = prompt("num dos ");
if (primario > 0)
{
    document.writeln(primario + " Es positivo");
}
else if (primario < 0)
{
    document.writeln(primario + " Es negativo");
}
if (secundario > 0)
{
    document.writeln(secundario + " Es positivo");
}
else if(secundario < 0)
{
    document.writeln(secundario + " Es negativo");
}

if(primario>0 && secundario>0)
{
  document.writeln(" Dos de dos positivos");
}
else if(primario >0 && secundario<0)
{
    document.writeln(" Uno de dos positivos");
}

else if(primario<0 && secundario<0)
{
  document.writeln(" Dos de dos negativos");
}