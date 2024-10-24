//load
localStorage.setItem("login",JSON.stringify("false"));
// Hàm kiểm tra Email
var arrId = [];

function emailConfirm(id)
{
    var input = document.getElementById(id);
    var inputParent = input.parentElement.parentElement;
    var errorMessage = input.parentElement.parentElement.querySelector(".error-message");

    input.onblur = (e) => {
        if (input.value.trim().length == 0)
        {
            inputParent.classList.add("invalid");
            errorMessage.textContent = "Vui lòng không để trống !"
        }
        else if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(input.value) == false)
        {
            inputParent.classList.add("invalid");
            errorMessage.textContent = "Email không hợp lệ !";
        }
        else{
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

// Hàm kiểm tra họ tên
function nameConfirm(id) {
    var input = document.getElementById(id);
    var inputParent = input.parentElement.parentElement;
    var errorMessage = input.parentElement.parentElement.querySelector(".error-message");
    input.onblur = (e) => {
        if (input.value.trim().length == 0)
        {
            inputParent.classList.add("invalid");
            errorMessage.textContent = "Vui lòng không để trống !"
        }
        else if (/^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/i.test(input.value) == false)
        {
            inputParent.classList.add("invalid");
            errorMessage.textContent = "Tên không hợp lệ !"
        }
        else
        {
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

// Kiểm tra sdt
function phoneConfirm(id) {
    var input = document.getElementById(id);
    var inputParent = input.parentElement.parentElement;
    var errorMessage = input.parentElement.parentElement.querySelector(".error-message");
    input.onblur = (e) => {
        if (input.value.trim().length == 0)
        {
            inputParent.classList.add("invalid");
            errorMessage.textContent = "Vui lòng không để trống !"
        }
        else if (/(84|0[3|5|7|8|9])+([0-9]{8})\b/g.test(input.value) == false)
        {
            inputParent.classList.add("invalid");
            errorMessage.textContent = "Số điện thoại không hợp lệ !"
        }
        else
        {
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

// Kiểm tra mk
function passConfirm (id, num = 8)
{
    var input = document.getElementById(id);
    var inputParent = input.parentElement.parentElement;
    var errorMessage = input.parentElement.parentElement.querySelector(".error-message");
    input.onblur = (e) => {
        if (input.value.trim().length == 0)
        {
            inputParent.classList.add("invalid");
            errorMessage.textContent = "Vui lòng không để trống !"
        }
        else if (input.value.length < num)
        {
            inputParent.classList.add("invalid");
            errorMessage.textContent = `Mật khẩu tối thiểu ${num} kí tự`;
        }
        else
        {
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

//Hàm nhập lại mk
function rpassConfirm(id) {
    var input = document.getElementById(id);
    var inputParent = input.parentElement.parentElement;
    var errorMessage = input.parentElement.parentElement.querySelector(".error-message");
    var pw = document.getElementById("pw");
    input.onblur = (e) => {
        if (input.value.trim().length == 0)
        {
            inputParent.classList.add("invalid");
            errorMessage.textContent = "Vui lòng không để trống !"
        }
        else if (input.value !== pw.value)
        {
            inputParent.classList.add("invalid");
            errorMessage.textContent = "Mật khẩu nhập lại không khớp !";
        }
        else
        {
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
function frmConfirm(){
    let check = 1;
    arrId.forEach((e) => {
        var input = document.getElementById(e);
        var inputParent = input.parentElement.parentElement;
        var errorMessage = input.parentElement.parentElement.querySelector(".error-message");
        if (input.value.trim().length == 0)
        {
            inputParent.classList.add("invalid");
            errorMessage.textContent = "Vui lòng không để trống !";
            check = 0;
        }
        if(inputParent.classList.contains("invalid"))
        {
            check = 0;
        }
    })
    if (check == 0)
        return false;
    else{
        var fullname = document.getElementById("fullname").value;
        var name = fullname.split(" ");
        var tk = document.getElementById("email").value;
        var mk = document.getElementById("pw").value;
        var data = {
            mk: mk,
            name: name[name.length-1]
        }
        localStorage.setItem(tk,JSON.stringify(data));
        alert("Đăng ký thành công !\nVui lòng đăng nhập để có trải nghiệm tốt nhất")
        return true;
    }
}
