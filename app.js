let tg = window.Telegram.WebApp;
let sent = document.getElementById("sent");
tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

 sent.addEventListener("click", () => {
            document.getElementById("error").innerText = '';
            let title = document.getElementById("product_title").value;
            let name = document.getElementById("user_name").value;
            let company = document.getElementById("user_company").value;
            let mail = document.getElementById("user_mail").value;
            let phone = document.getElementById("user_phone").value;
            
            if (name.length < 2) {
                document.getElementById("error").innerText = 'Введите корректное ФИО';
                return;
            } 
//поменять длину фио
            
            if (company.length < 1) {
                document.getElementById("error").innerText = 'Если Вы не являетесь представителем какой-либо компании, введите 0';
                return;
            }
            
            if (mail.length < 7) {
                document.getElementById("error").innerText = 'Введите корректный адрес электронной почты';
                return;
            }
            
            if (phone.length < 9) {
                document.getElementById("error").innerText = 'Введите корректный номер телефона в формате 8ХХХХХХХХХХ';
                return;
            }
      let data = {
                title: title,
                name: name,
                company: company,
                mail: mail,
                phone: phone
            }

            tg.sendData(JSON.stringify(data));
     
       sent.addEventListener("click", () => {
            document.getElementById("form").style.display = "none";
            document.getElementById("container").style.display = "block";
        });

let item = "";
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");

btn1.addEventListener("click", function(){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вы выбрали услугу СЭД «ДЕЛО»!");
        item ="1";
        tg.MainButton.show();
    }
});

btn2.addEventListener("click", function(){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вы выбрали услугу СЭД «Архивное дело»!");
        item ="2";
        tg.MainButton.show();
    }
});

btn3.addEventListener("click", function(){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вы выбрали услугу «EOS for SharePoint»!");
        item ="3";
        tg.MainButton.show();
    }
});

btn4.addEventListener("click", function(){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вы выбрали услугу «Мобильное приложение»!");
        item ="4";
        tg.MainButton.show();
    }
});

btn5.addEventListener("click", function(){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вы выбрали услугу «Система криптографического обеспечения КАРМА!»");
        item ="5";
        tg.MainButton.show();
    }
});

Telegram.WebApp.onEvent("mainButtonClicked", function(){
    
    tg.sendData(item);

  }); 
      
     
let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name} 
${tg.initDataUnsafe.user.last_name}`; 


usercard.appendChild(p);    
   
     

