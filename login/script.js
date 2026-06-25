function cadastro(){
    var nome = $("#user1").val()
    var senha = $("#senha1").val()
    var senhac = $("#senhac").val()
    
    var index = parseInt(localStorage.getItem("usuario_index") || "0")

    for (let i = 0; i < index; i++) {
        let usuario = JSON.parse(localStorage.getItem(`usuario${i}`));

        if (usuario && usuario.user === nome) {
            alert("Esse login ja existe fi");
            return;
        }
    }
    if (senha !== senhac) {
    alert("As senhas são diferentes");
    return;
    }
    const login = {
    user: nome,
    senha: senha
    }
    
    localStorage.setItem(`usuario${index}`, JSON.stringify(login))
    localStorage.setItem("usuario_index", index + 1)
    showLogin()
}

function login(){
    var nome = $("#user2").val()
    var senha1 = $("#senha2").val()
    let encontrou = false

    var index = parseInt(localStorage.getItem("usuario_index") || "0")

    for (let i = 0; i < index; i++) {
        let usuario = JSON.parse(localStorage.getItem(`usuario${i}`));

        if (usuario && usuario.user === nome && usuario.senha === senha1) {
            window.location.href = "../filmes/index.html"
            let encontrou = true
            return
        }
    }
    if(!encontrou){
            alert("senha ou nome incorreto")
        }
}

function showCadastro(){
    $(".btn_cadastro").css("background-color", "#202830")
    $(".btn_login").css("background-color", "#2e3a49")
    $(".cadastro").css("position", "static")
    $(".cadastro").css("transform", "translateX(0px)")
    $(".login").css("position", "absolute")
    $(".cadastrod1").css("transform", "translateX(0px)")
    // $(".choose").css("transform", "translateY(-13px)")
    $(".cadastrod2").css("transform", "translateX(0px)")
    $(".cadastrod3").css("transform", "translateX(0px)")
    $(".divbc").css("transform", "translateX(0px)")
    $(".choose").css("transform", "translateY(-13px)")
    $(".login").css("transform", "translateX(620px)")
    $(".logind1").css("transform", "translateX(620px)")
    $(".logind2").css("transform", "translateX(620px)")
    $(".divbl").css("transform", "translateX(620px)")
}

function showLogin(){
    $(".btn_login").css("background-color", "#202830")
    $(".btn_cadastro").css("background-color", "#2e3a49")
    $(".login").css("position", "static")
    $(".cadastro").css("position", "absolute")
    // $(".choose").css("transform", "translateY(-49px)")
    $(".login").css("transform", "translateX(0px)")
    $(".logind1").css("transform", "translateX(0px)")
    $(".logind2").css("transform", "translateX(0px)")
    $(".divbl").css("transform", "translateX(0px)")
    $(".cadastro").css("transform", "translateX(-620px)")
    $(".cadastrod1").css("transform", "translateX(-620px)")
    $(".cadastrod2").css("transform", "translateX(-620px)")
    $(".cadastrod3").css("transform", "translateX(-620px)")
    $(".divbc").css("transform", "translateX(-620px)")
}
function escc(){
    $(".cadastro").hide()
}

function mosc(){
    $(".cadastro").show()
    $(".cadastrod1").css("transform", "translateX(0px)")
    $(".cadastrod2").css("transform", "translateX(0px)")
    $(".cadastrod3").css("transform", "translateX(0px)")
    $(".divb").css("transform", "translateX(0px)")
}

function escl(){
    $(".login").hide()
}

function mosl(){
    $(".login").show()
    $(".logind1").css("transform", "translateX(0px)")
    $(".logind2").css("transform", "translateX(0px)")
    $(".login button").css("transform", "translateX(0px)")

}

function showPassword(){
    var inputSenha = document.querySelector('#senha1')
    var img_eye = document.querySelector('#eye')

    if(inputSenha.getAttribute("type") === "password"){
        inputSenha.setAttribute("type", "text")
        img_eye.setAttribute("src", "../../public/oio_fechado.png")
    }else{
        inputSenha.setAttribute("type", "password")
        img_eye.setAttribute("src", "../../public/oio_aberto.png")
    }
}

window.onload = showCadastro;