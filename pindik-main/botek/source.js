function loginFun() {

    const database = ["pepik.ahoj1","jana.pizza2", "karel.kočka3", "eva.12345"]

    let username = document.getElementById("loginUsername").value
    let password = document.getElementById("loginPassword").value

    let loginInfo = username + "." + password;
    console.log(loginInfo);

    for (let i = 0; i < database.length; i++) {
        if (loginInfo === database[i]) {
            document.getElementById("loginText").innerHTML = "Přihlášen";
            window.location.href = "index2.html";
            return;
    
    
        }
    }
document.getElementById("loginText").innerHTML = "Špatné přihlašovací údaje";
}
