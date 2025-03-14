document.getElementById('btnquery').addEventListener('click',function() {
    let circulo = document.querySelector(".circulos .circulo");
    circulo.classList.toggle("ativo");

});


document.getElementById("btnqueryAll").addEventListener("click", function () {
    let todosCirculos = document.querySelectorAll(".circulo");
    todosAtivos = true;
    todosAtivos = Array.from(todosCirculos).every(el => el.classList.contains('ativo'));

    todosCirculos.forEach(circ => {
        circ.classList.toggle("ativo", !todosAtivos);
    });
});
