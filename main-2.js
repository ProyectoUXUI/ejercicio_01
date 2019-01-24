$(document).ready(function () {
    $('input:radio[name=genero]:checked').change(function () {
        if ($("input[name='genero']:checked").val() == 'masculino') {
            alert("Bienvenido");
        }
        if ($("input[name='genero']:checked").val() == 'femenino') {
            alert("Bienvenida");
        }
    });
});