var sidebar = document.getElementById("menusidebar");

sidebar.onmousemove = () => {
    sidebar.classList.add("active_menu");
}

sidebar.onmouseout= () => {
    sidebar.classList.remove("active_menu");
}

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


