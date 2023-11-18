function uname()
{
var uname= localStorage.getItem('Uname');
var pname='';
pname=uname.toUpperCase();
document.getElementById('usename').innerHTML= pname;
}
uname();