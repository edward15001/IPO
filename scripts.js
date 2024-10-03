document.addEventListener("DOMContentLoaded", function () {
    // Recuperar el progreso del usuario del localStorage
    let algebraProgress = localStorage.getItem("algebraProgress");

    // Si no hay progreso, inicializar en 0 (ningún ejercicio completado)
    if (!algebraProgress) {
        algebraProgress = 0;
        localStorage.setItem("algebraProgress", algebraProgress);
    }

    // Bloquear los botones de los ejercicios si no se han completado los anteriores
    const ejercicio1Btn = document.getElementById("ejercicio1");
    const ejercicio2Btn = document.getElementById("ejercicio2");
    const ejercicio3Btn = document.getElementById("ejercicio3");
    const ejercicio4Btn = document.getElementById("ejercicio4");
    const ejercicio5Btn = document.getElementById("ejercicio5");
    const ejercicio6Btn = document.getElementById("ejercicio6");

    // Actualizamos el estado de los botones basándonos en el progreso
    if (algebraProgress >= 1) {
        ejercicio2Btn.classList.remove("disabled");
    } else {
        ejercicio2Btn.classList.add("disabled");
        ejercicio2Btn.href = "#";
    }

    if (algebraProgress >= 2) {
        ejercicio3Btn.classList.remove("disabled");
    } else {
        ejercicio3Btn.classList.add("disabled");
        ejercicio3Btn.href = "#";
    }

    if (algebraProgress >= 3) {
        ejercicio4Btn.classList.remove("disabled");
    } else {
        ejercicio4Btn.classList.add("disabled");
        ejercicio4Btn.href = "#";
    }

    if (algebraProgress >= 4) {
        ejercicio5Btn.classList.remove("disabled");
    } else {
        ejercicio5Btn.classList.add("disabled");
        ejercicio5Btn.href = "#";
    }

    if (algebraProgress >= 5) {
        ejercicio6Btn.classList.remove("disabled");
    } else {
        ejercicio6Btn.classList.add("disabled");
        ejercicio6Btn.href = "#";
    }

    // Eventos de clic para actualizar el progreso
    ejercicio1Btn.addEventListener("click", function () {
        alert("Has completado el Ejercicio 1");
        localStorage.setItem("algebraProgress", 1);
        location.reload(); // Recargar la página para actualizar el estado de los botones
    });

    ejercicio2Btn.addEventListener("click", function () {
        if (algebraProgress >= 1) {
            alert("Has completado el Ejercicio 2");
            localStorage.setItem("algebraProgress", 2);
            location.reload();
        }
    });

    ejercicio3Btn.addEventListener("click", function () {
        if (algebraProgress >= 2) {
            alert("Has completado el Ejercicio 3");
            localStorage.setItem("algebraProgress", 3);
            location.reload();
        }
    });

    ejercicio4Btn.addEventListener("click", function () {
        if (algebraProgress >= 3) {
            alert("Has completado el Ejercicio 4");
            localStorage.setItem("algebraProgress", 4);
            location.reload();
        }
    });

    ejercicio5Btn.addEventListener("click", function () {
        if (algebraProgress >= 4) {
            alert("Has completado el Ejercicio 5");
            localStorage.setItem("algebraProgress", 5);
            location.reload();
        }
    });

    ejercicio6Btn.addEventListener("click", function () {
        if (algebraProgress >= 5) {
            alert("Has completado el Ejercicio 6");
            localStorage.setItem("algebraProgress", 6);
        }
    });
});
