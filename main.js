document.addEventListener('DOMContentLoaded', function(){
    const form = document.querySelectorAll(".form")[0];
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const cursos = document.querySelectorAll(".cursos")[0];
        const nombre = document.querySelectorAll(".nombre")[0].value;
        const apellidos = document.querySelectorAll(".apellidos")[0].value;
        //const mensaje = `Bienvenido ${nombre.options[nombre.selectedIndex].text}`;
        const mensaje = `Bienvenido ${nombre}, al curso de ${cursos.options[cursos.selectedIndex].text}`;
        const mensajeTexto = document.querySelectorAll(".mensaje-texto")[0];

        mensajeTexto.innerHTML = mensaje;

    });
});
