var arrId = [];
localStorage.setItem("login",JSON.stringify("false"));
// Hàm kiểm tra Email
function emailConfirm(id) {
    var input = document.getElementById(id);
    var inputParent = input.parentElement.parentElement;
    var errorMessage = input.parentElement.parentElement.querySelector(".error-message");

    input.onblur = (e) => {
        if (input.value.trim().length == 0) {
            inputParent.classList.add("invalid");
            errorMessage.textContent = "Vui lòng không để trống !"
        }
        else if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(input.value) == false) {
            inputParent.classList.add("invalid");
            errorMessage.textContent = "Email không hợp lệ !";
        }
        else {
            inputParent.classList.remove("invalid");
            input.parentElement.parentElement.querySelector(".error-message").textContent = ""
        }
    }

    input.oninput = () => {
        input.parentElement.parentElement.classList.remove("invalid");
        errorMessage.textContent = ""
    }

    arrId.push(id);
}


// Kiểm tra mk
function passConfirm(id, num = 8) {
    var input = document.getElementById(id);
    var inputParent = input.parentElement.parentElement;
    var errorMessage = input.parentElement.parentElement.querySelector(".error-message");
    input.onblur = (e) => {
        if (input.value.trim().length == 0) {
            inputParent.classList.add("invalid");
            errorMessage.textContent = "Vui lòng không để trống !"
        }
        else {
            inputParent.classList.remove("invalid");
            errorMessage.textContent = ""
        }
    }

    input.oninput = () => {
        inputParent.classList.remove("invalid");
        errorMessage.textContent = ""
    }

    arrId.push(id);
}


// SubmitConfirm

function frmConfirm() {
    let check = 1;
    arrId.forEach((e) => {
        var input = document.getElementById(e);
        var inputParent = input.parentElement.parentElement;
        var errorMessage = input.parentElement.parentElement.querySelector(".error-message");
        if (input.value.trim().length == 0) {
            inputParent.classList.add("invalid");
            errorMessage.textContent = "Vui lòng không để trống !";
            check = 0;
        }
        if (inputParent.classList.contains("invalid")) {
            check = 0;
        }
    })
    var tk = document.getElementById("email");
    var mk = document.getElementById("pw");
    if (check == 0) {
        return false;
    }
    else {
        if (typeof localStorage[tk.value] === "undefined") {
            mk.parentElement.parentElement.classList.add("invalid")
            mk.parentElement.parentElement.querySelector(".error-message").textContent = "Email hoặc mật khẩu không chính xác !";
            mk.value = "";
            return false;
        }
        else {
            var user = JSON.parse(localStorage.getItem(tk.value));
            if (mk.value == user.mk) {
                localStorage.setItem("now", JSON.stringify(tk.value));
                localStorage.setItem("login", JSON.stringify("true"));
                alert("Đăng nhập thành công !");
                return true;
            }
            else {
                mk.parentElement.parentElement.classList.add("invalid");
                mk.parentElement.parentElement.querySelector(".error-message").textContent =
                    "Email hoặc mật khẩu không chính xác !"
                mk.value = "";
                return false;
            }
        }
    }
    
}

