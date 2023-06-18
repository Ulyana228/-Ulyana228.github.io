


// Подключение к API Telegram
const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot('5999053915:AAGRsnJHDpeqhIRGSB2bLgBmJs7WT8jk9JQ', { polling: true });

// Обработчик событий нажатия на кнопки
bot.on('callback_query', (query) => {
  const buttonData = query.data;
  const chatId = query.message.chat.id;

  if (buttonData === 'about') {
    // Выполнение JavaScript кода для страницы "О компании"
    executeAboutPageJavaScript(chatId);
  } else if (buttonData === 'form') {
    // Выполнение JavaScript кода для страницы "Форма обратной связи"
    executeFormPageJavaScript(chatId);
  } else if (buttonData === 'catalogue') {
    // Выполнение JavaScript кода для страницы "Каталог"
    executeCataloguePageJavaScript(chatId);
  } else if (buttonData === 'orders') {
    // Выполнение JavaScript кода для страницы "Мои заказы"
    executeOrdersPageJavaScript(chatId);
  }
});

// Функции для выполнения JavaScript кода для каждой страницы
function executeAboutPageJavaScript(chatId) {
let tg = window.Telegram.WebApp;
tg.expand();
tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

function hideOtherPages() {
  document.getElementById("about").style.display = "none";
  document.getElementById("form").style.display = "none";
  document.getElementById("catalogue").style.display = "none";
}

  hideOtherPages();
  showPage('about');
  
}

function executeFormPageJavaScript(chatId) {
let tg = window.Telegram.WebApp;
let sent = document.getElementById("sent");
tg.expand();
tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";
  hideOtherPages();
  showPage('form');     
  sent.addEventListener("click", () => {
               
    document.getElementById("error").innerText = '';
    let name = document.getElementById("user_name").value;
    let company = document.getElementById("user_company").value;
    let mail = document.getElementById("user_mail").value;
    let phone = document.getElementById("user_phone").value;
    let subscribe = document.getElementById("subscribe").value;       

    if (name.length < 10) {
        document.getElementById("error").innerText = 'Введите корректное ФИО';
        return;
    }

    if (company.length < 1) {
        document.getElementById("error").innerText = 'Введите корректное название вашей компании';
        return;
    }

    if (mail.length < 7) {
        document.getElementById("error").innerText = 'Введите корректный адрес электронной почты';
        return;
    }

    if (phone.length < 10) {
        document.getElementById("error").innerText = 'Введите корректный номер телефона в формате 8ХХХХХХХХХХ';
        return;
    }

    
    let data = {
        title: title,
        name: name,
        company: company,
        mail: mail,
        phone: phone
    };

    tg.sendData(JSON.stringify(data));
});
}

function executeCataloguePageJavaScript(chatId) {
  let tg = window.Telegram.WebApp;
  let container = document.getElementById("container");
  let item = "";
  let btn1 = document.getElementById("btn1");
  let btn2 = document.getElementById("btn2");
  let btn3 = document.getElementById("btn3");
  let btn4 = document.getElementById("btn4");
  let btn5 = document.getElementById("btn5");  
  tg.expand();
  tg.MainButton.textColor = "#FFFFFF";
  tg.MainButton.color = "#2cab37";
   document.getElementById("main").style.display = "none";
            document.getElementById("form").style.display = "none";
            document.getElementById("container").style.display = "block";
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

  hideOtherPages();
  showPage('catalogue');
}

function executeOrdersPageJavaScript(chatId) {
  // Ваш JavaScript код для страницы "Мои заказы"
  bot.sendMessage(chatId, 'JavaScript код для страницы "Мои заказы"');
}

   
     

