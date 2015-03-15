$('#contact-form').on('submit', function(e) {
    e.preventDefault(); // предотвратим отправку формы - действие по умолчанию
    var that = $(e.target); // получаем ссылку на источник события - форму #contact-form
    $.ajax({ // отправляем данные
        // URL развернутого скрипта Google Apps Script
        url: 'https://script.google.com/macros/s/AKfycbylGnFmXbaji9DXEPY9kOAf6gQpkE33jQ861R1Dy61AwVre6QQ/exec',
        data: $(this).serialize(), // собираем запрос
        jsonp: 'cb', // имя параметра запроса
        jsonpCallback: 'bingo', // имя функции
        dataType:'jsonp', // тип данных
        success: function bingo(data){
            console.log(data); // проверим данные, полученные с бэкэнда
            if (data == 'Error') {
                alertForm({form: that, type: 'alert-danger', msg: 'Не удалось отправить сообщение.'});
                return;
            }
            alertForm({form: that, type: 'alert-success', msg: 'Ваше сообщение отправлено.'});
            that.find('textarea').val('');
        },
        error: function(){
            alertForm({form: that, type: 'alert-danger', msg: 'Не удалось отправить сообщение.'});
        }
    });
});

function doGet(e){

}
$('#telephone-form').on('submit', function(e) {
    e.preventDefault(); // предотвратим отправку формы - действие по умолчанию
    var that = $(e.target); // получаем ссылку на источник события - форму #contact-form
    $.ajax({ // отправляем данные
        // URL развернутого скрипта Google Apps Script
        url: 'https://script.google.com/macros/s/AKfycbylGnFmXbaji9DXEPY9kOAf6gQpkE33jQ861R1Dy61AwVre6QQ/exec',
        data: $(this).serialize(), // собираем запрос
        jsonp: 'cb', // имя параметра запроса
        jsonpCallback: 'bingo', // имя функции
        dataType:'jsonp', // тип данных
        success: function bingo(data){
            console.log(data); // проверим данные, полученные с бэкэнда
            if (data == 'Error') {
                alertForm({form: that, type: 'alert-danger', msg: 'Не удалось отправить сообщение.'});
                return;
            }
            alertForm({form: that, type: 'alert-success', msg: 'Ваше сообщение отправлено.'});
            that.find('textarea').val('');
        },
        error: function(){
            alertForm({form: that, type: 'alert-danger', msg: 'Не удалось отправить сообщение.'});
        }
    });
});

// функция вывода сообщений в модальную форму
function alertForm(alert) {
    var div = $('<div class="alert ' + alert.type + '" style="display: none;">' + alert.msg + '</div>');
    alert.form.prepend(div);
    div.slideDown(400).delay(3000).slideUp(400, function() {
        alert.form.closest('.modal').modal('hide');
        div.remove();
    });
}

$('#navbar').affix();
$(document).on("click", ".scroll", function (t) {
    t.preventDefault();
    var e = 0;
    e = $(this.hash).offset().top > $(document).height() - $(window).height() ? $(document).height() - $(window).height() : $(this.hash).offset().top, $("html,body").animate({scrollTop: e - 56}, 500, "swing")
})