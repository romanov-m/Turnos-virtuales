function fechaactual(){
    const ahora=new Date();
    const fechaHora=ahora.toLocaleString();
    document.getElementById("fechaHora").textContent=fechaHora;
}
fechaactual();