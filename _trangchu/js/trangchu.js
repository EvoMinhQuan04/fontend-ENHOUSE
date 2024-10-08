
var frm = document.getElementById("frmSearch");
var frmBtn = document.getElementById("TimKiembtn");
console.log(frmBtn)

//Kiem tra Input khac rong
function KiemTra()
{
    if (frm.input.value.trim().length == 0)
    return false;
}

function frmValidate(){
    return KiemTra();
}

// Ham hien totop
var totop = document.getElementById("totop");
window.onscroll = () => {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300)
        totop.classList.add("activeTotop")
    else
        totop.classList.remove("activeTotop")
}


//account
var option = document.getElementsByClassName("nav-menu")[0].getElementsByTagName("a");
option[5].innerHTML = "<li class=\"end\"><i class='bx bxs-log-in'></i><span>Đăng nhập</span></li>"
var login = JSON.parse(localStorage.getItem("login"));
if(login=="true"){
    var now = JSON.parse(localStorage.getItem("now"));
    var tk = JSON.parse(localStorage.getItem(now));
    var user = document.getElementsByClassName("user")[0].getElementsByTagName("div");
    user[1].innerHTML = "<a href=\"#\"> <i class='bx bxs-user'></i>" +tk.name+ "</a>";
    var option = document.getElementsByClassName("nav-menu")[0].getElementsByTagName("a");
    option[5].innerHTML = "<li class=\"end\"><i class='bx bxs-log-out'></i><span>Đăng xuất</span></li>";
}

