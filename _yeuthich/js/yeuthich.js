//load
var content = document.getElementsByClassName("content");
var savelist = JSON.parse(localStorage.getItem("save"));
if (savelist.length != 0) {
    document.getElementById("status").innerHTML = "Tin đăng đã lưu (" + savelist.length + "/100)";
    savelist.forEach(element => {
        var obj = JSON.parse(localStorage.getItem(element));
        if (search(obj.k, savelist)) {
            content[0].innerHTML += "<div class=\"contentContainer\"><div class=\"flex\"><img src=\"" + obj.p + "\"  onclick=\"getLink('" + obj.l + "')\"></div><div class=\"flex\"><p class=\"tieude\"  onclick=\"getLink('" + obj.l + "')\">" + obj.t + "</p><p class=\"an\"  onclick=\"getLink('" + obj.l + "')\">" + obj.a + "</p><p>" + obj.s + " m<sup>2</sup></p><p class=\"cword\">" + obj.v + "</p></div><div class=\"chat\" onclick=\"show('" + obj.k + "')\"><i class=\"fa-solid fa-phone\"></i> Liên hệ </div><div class=\"tim\" id=\"" + obj.k + "\"  onclick=\"save('" + obj.k + "')\"><i class=\"fa-regular fa-heart\"></i></div><div class=\"post\"  onclick=\"getLink('" + obj.l + "')\"><img src=\"/_user/img/user.jpg\"><p>Người đăng</p></div></div>";
            var element = document.getElementById(obj.k);
            element.classList.add("heart-active");
            var heart = element.getElementsByClassName("fa-heart");
            heart[0].classList.remove("fa-regular");
            heart[0].classList.add("fa-solid");
        }
    })
}
else {
    content[0].innerHTML = "<div class=\"empty\"><p>Bạn chưa lưu tin đăng nào!</p><p>Hãy bấm nút <i class=\"fa-regular fa-heart\" style=\"color: red\"></i> ở tin đăng để lưu và xem lại sau.</p><a href=\"/_chothue/chothue1.html\">Bắt đầu tìm kiếm</a></div>"
}

//click
function getLink(link) {
    location.href = link;
}

function save(key) {
    var element = document.getElementById(key);
    var save = JSON.parse(localStorage.getItem("save"));
    if (!search(key, save)) {
        element.classList.add("heart-active");
        var heart = element.getElementsByClassName("fa-heart");
        heart[0].classList.remove("fa-regular");
        heart[0].classList.add("fa-solid");
        save.push(key);
        localStorage.setItem("save", JSON.stringify(save));
    }
    else {
        element.classList.remove("heart-active");
        var heart = element.getElementsByClassName("fa-heart");
        heart[0].classList.remove("fa-solid");
        heart[0].classList.add("fa-regular");
        var index = save.indexOf(key);
        save.splice(index, 1);
        localStorage.setItem("save", JSON.stringify(save));
    }
}

function search(key, savelist) {
    var check = false;
    savelist.forEach(element => {
        if (element == key) check = true;
    });
    return check;
}

//popup
function show(key) {
    document.getElementById("popup").classList.toggle("active");
    document.getElementsByTagName("body")[0].classList.toggle("hideScroll");
    var obj = JSON.parse(localStorage.getItem(key));
    document.getElementById("review-img").src = obj.p;
    document.getElementById("review-name").innerHTML = obj.t;
    document.getElementById("review-address").innerHTML = obj.a;
    document.getElementById("review-price").innerHTML = obj.v;
}
function hide() {
    document.getElementById("popup").classList.toggle("active");
    document.getElementsByTagName("body")[0].classList.toggle("hideScroll");
}
//form
function submit() {
    var name = document.getElementById("name");
    var sdt = document.getElementById("sdt");
    var email = document.getElementById("email");
    var noidung = document.getElementById("noidung");
    var check = true;

    if (name.value.length == 0) {
        errorname("on", "Không được để trống");
        check = false;
    }
    if (sdt.value.length == 0) {
        errorsdt("on", "Không được để trống");
        check = false;
    }
    else if (!/\d{10}/.test(sdt.value)) {
        errorsdt("on", "Số điện thoại gồm 10 kí tự số");
        check = false;
    }
    if (email.value.length == 0) {
        erroremail("on", "Không được để trống");
        check = false;
    }
    else if (!/\w+@\w+[.\w+]{1,3}/.test(email.value)) {
        erroremail("on", "Email không hợp lệ");
        check = false;
    }
    if (noidung.value.length == 0) {
        errornoidung("on", "Không được để trống");
        check = false;
    }

    if (check == true) {
        alert("Gửi thông tin đến người đăng thành công");
        location.reload();
    }
}
function errorname(toggle, message) {
    var element = document.getElementById("name");
    element.placeholder = message;
    if (toggle == "on") {
        element.classList.add("error");
        element.value = "";
    }
    else element.classList.remove("error");
}
function errorsdt(toggle, message) {
    var element = document.getElementById("sdt");
    element.placeholder = message;
    if (toggle == "on") {
        element.classList.add("error");
        element.value = "";
    }
    else element.classList.remove("error");
}
function erroremail(toggle, message) {
    var element = document.getElementById("email");
    element.placeholder = message;
    if (toggle == "on") {
        element.classList.add("error");
        element.value = "";
    }
    else element.classList.remove("error");
}
function errornoidung(toggle, message) {
    var element = document.getElementById("noidung");
    element.placeholder = message;
    if (toggle == "on") {
        element.classList.add("error");
        element.value = "";
    }
    else element.classList.remove("error");
}

//sidebar

var sidebar = document.getElementById("menusidebar");

sidebar.onmousemove = () => {
    sidebar.classList.add("active_menu");
}

sidebar.onmouseout = () => {
    sidebar.classList.remove("active_menu");
}

var frm = document.getElementById("frmSearch");
var frmBtn = document.getElementById("TimKiembtn");
console.log(frmBtn)

//Kiem tra Input khac rong
function KiemTra() {
    if (frm.input.value.trim().length == 0)
        return false;
}

function frmValidate() {
    return KiemTra();
}

// Ham hien totop
var totop = document.getElementById("totop");

onscroll = () => {
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