var titulo=document.getElementById("titulo");
var parrafo=document.getElementsByClassName("parrafo");
var cuerpo=document.getElementById("cuerpo");
titulo.innerText="Nuevo título";
parrafo[0].innerText="Parrafo 1 modificado.";
parrafo[1].innerText="Párrafo 2 modificado.";
parrafo[2].innerText="Párrafo 3 modificado.";
parrafo[0].outerHTML="<div>Párrafo 1 modificado<div>";
cuerpo.style.backgroundColor="#f4f4f4";
cuerpo.style.textAlign="center";
titulo.style.color="#333";
título.style.fontWeight="blond"
título.style.marginBottom="15px";
título.style.text-transform.uppercase;
for(var i=0;i<parrafos.length;i++){
    parrafo[i].style.fontWeight="18px";
    parrafo[i].style.padding="10px";
    parrafo[i].style.width="60%";
    parrafo[i].style.borderleft="solid 5px";

}
parrafo[0].color="#e74c3c";
parrafo[0].backgroundColor="#ffe6e6";
parrafo[0].border="#c0392b";
parrafo[1].color="#2ecc71";
parrafo[1].backgroundColor="#eaffea";
parrafo[1].border="#27ea60";
parrafo[2].color="3498db";
parrafo[2].backgroundColor="#e6f2ff";
parrafo[2].border="#2980b9";