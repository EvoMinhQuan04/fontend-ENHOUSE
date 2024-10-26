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

//popup
function show(key){
    document.getElementById("popup").classList.toggle("active");
    document.getElementsByTagName("body")[0].classList.toggle("hideScroll");
    var obj = JSON.parse(localStorage.getItem(key));
    document.getElementById("review-img").src = obj.p;
    document.getElementById("review-name").innerHTML = obj.t;
    document.getElementById("review-address").innerHTML = obj.a;
    document.getElementById("review-price").innerHTML = obj.v;
}
function hide(){
    document.getElementById("popup").classList.toggle("active");
    document.getElementsByTagName("body")[0].classList.toggle("hideScroll");
}
//form
function submit(){
    var name = document.getElementById("name");
    var sdt = document.getElementById("sdt");
    var email = document.getElementById("email");
    var noidung =document.getElementById("noidung");
    var check = true;
    
    if(name.value.length==0){
        errorname("on","Không được để trống");
        check = false;
    }
    if(sdt.value.length==0){
        errorsdt("on","Không được để trống");
        check = false;
    }
    else if(!/\d{10}/.test(sdt.value)){
        errorsdt("on","Số điện thoại gồm 10 kí tự số");
        check = false;
    }
    if(email.value.length==0){
        erroremail("on","Không được để trống");
        check = false;
    }
    else if(!/\w+@\w+[.\w+]{1,3}/.test(email.value)){
        erroremail("on","Email không hợp lệ");
        check = false;
    }
    if(noidung.value.length==0){
        errornoidung("on","Không được để trống");
        check = false;
    }

    if(check==true){
        alert("Gửi thông tin đến người đăng thành công");
        location.reload();
    }
}
function errorname(toggle,message){
    var element = document.getElementById("name");
    element.placeholder = message;
    if(toggle=="on"){
        element.classList.add("error");
        element.value = "";
    }
    else element.classList.remove("error");
}
function errorsdt(toggle,message){
    var element = document.getElementById("sdt");
    element.placeholder = message;
    if(toggle=="on"){
        element.classList.add("error");
        element.value = "";
    }
    else element.classList.remove("error");
}
function erroremail(toggle,message){
    var element = document.getElementById("email");
    element.placeholder = message;
    if(toggle=="on"){
        element.classList.add("error");
        element.value = "";
    }
    else element.classList.remove("error");
}
function errornoidung(toggle,message){
    var element = document.getElementById("noidung");
    element.placeholder = message;
    if(toggle=="on"){
        element.classList.add("error");
        element.value = "";
    }
    else element.classList.remove("error");
}

