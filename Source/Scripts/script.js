function changeText() {
    var ans = window.confirm("Segur@ que desea cambiar el color de fondo?");

if(ans)
{
    var objList = document.getElementsByClassName('col-sm-4');
    var i = objList.length;

    while(i--) {
        objList[i].style.backgroundColor = "blue";
    }
}    
}
