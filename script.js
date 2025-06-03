document.addEventListener("keydown", function(event) {
    if (event.key === "F12" || event.ctrlKey && event.shiftKey && event.key === "I") {
        event.preventDefault();
        alert("Console desativado!");
    }
});

document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
    alert("Botão direito desativado!");
});

setInterval(function () {
    if (window.outerWidth - window.innerWidth > 200 || window.outerHeight - window.innerHeight > 200) {
        alert("Inspeção detectada! A página será fechada.");
        window.location.href = "about:blank";
    }
}, 1000);

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const emailCorreto = "tartaruganinja@gmail.com";
    const senhaCorreta = "Z!@AAB%@KM";

    if (email === emailCorreto && password === senhaCorreta) {
        window.location.href = "home.html";
    } else {
        alert("Email e/ou senha incorretos.");
    }
}