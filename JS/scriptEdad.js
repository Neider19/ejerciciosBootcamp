function verificarEdad() {

    const edad = document.getElementById('edad').value;

    resultado.classList.remove("mensaje-error", "mensaje-invalido", "mensaje-valido");
    if (edad.length > 3 || edad > 125) {
        resultado.textContent = "La edad es mayor a la esperada";
        resultado.classList.add("mensaje-error");
    }
    else if (edad >= 18) {
        resultado.textContent = 'Eres mayor de edad';
        resultado.classList.add("mensaje-valido");
    }
    else if (edad > 0 && edad < 18) {
        resultado.textContent = 'Eres menor de edad';
        resultado.classList.add("mensaje-error");
    }
    else if (edad == "") {
        resultado.textContent = 'La edad no puede estar vacia, por favor ingresa tu edad';
        resultado.classList.add("mensaje-invalido");
    }
    else {
        resultado.textContent = 'La edad no puede ser negativa o igual a 0';
        resultado.classList.add("mensaje-error")
    }

}

