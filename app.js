let tg = window.Telegram.WebApp;
let order = document.getElementById("order");
let container = document.getElementById("container");
tg.expand();
tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";
order.addEventListener("click", () => {
            document.getElementById("main").style.display = "none";
            document.getElementById("form").style.display = "block";
            document.getElementById("container").style.display = "none";
            document.getElementById("user_name").value = tg.initDataUnsafe.user.first_name + " " + tg.initDataUnsafe.user.last_name;
        });
let item = "";
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
btn1.addEventListener("click", function () {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText("Вы выбрали услугу СЭД «ДЕЛО»!");
        item = "1";
        tg.MainButton.show();
    }
});
btn2.addEventListener("click", function () {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText("Вы выбрали услугу СЭД «Архивное дело»!");
        item = "2";
        tg.MainButton.show();
    }
});
btn3.addEventListener("click", function () {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText("Вы выбрали услугу «EOS for SharePoint»!");
        item = "3";
        tg.MainButton.show();
    }
});
btn4.addEventListener("click", function () {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText("Вы выбрали услугу «Мобильное приложение»!");
        item = "4";
        tg.MainButton.show();
    }
});
btn5.addEventListener("click", function () {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText("Вы выбрали услугу «Система криптографического обеспечения КАРМА!»");
        item = "5";
        tg.MainButton.show();
    }
});
Telegram.WebApp.onEvent("mainButtonClicked", function () {
    tg.sendData(item);
});
let usercard = document.getElementById("usercard");
let p = document.createElement("p");
p.innerText = `${tg.initDataUnsafe.user.first_name} ${tg.initDataUnsafe.user.last_name}`;
usercard.appendChild(p);
