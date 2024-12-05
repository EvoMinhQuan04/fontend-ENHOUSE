//sidebar
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
function KiemTra(){
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

//load
var savelist = JSON.parse(localStorage.getItem("save"));
savelist.forEach(element => {
    var obj = JSON.parse(localStorage.getItem(element));
    if(search(obj.k,savelist)){
        var heart =document.getElementById(obj.k);
        heart.classList.remove("fa-regular");
        heart.classList.add("fa-solid");
    }
})

//click
function getLink(link){
    location.href = link;
}

function save(key){
    var save = JSON.parse(localStorage.getItem("save"));
    var heart =document.getElementById(key);
    if(!search(key,save)){
        heart.classList.remove("fa-regular");
        heart.classList.add("fa-solid");
        save.push(key);
        localStorage.setItem("save",JSON.stringify(save));
    }
    else{
        heart.classList.remove("fa-solid");
        heart.classList.add("fa-regular");
        var index = save.indexOf(key);
        save.splice(index,1);
        localStorage.setItem("save",JSON.stringify(save));
    }
}

function search(key,list){
    var check = false;
    list.forEach(element => {
        if(element==key) check=true;
    });
    return check;
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