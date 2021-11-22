const API_KEY = "9dc9fbb8cdf3f17b6864a0298f318a9f";

$(function() {
  $('#btn').on('click', function() {
    // 入力された都市名でWebAPIに天気情報をリクエスト
    $.ajax({
      url: "https://api.openweathermap.org/data/2.5/weather?q=" + $('#cityname').val() + "&units=metric&appid=" + API_KEY,
      dataType : 'jsonp',
    }).done(function (data){
      //通信成功
    }).fail(function (data) {
      //通信失敗
    });
    })
  });
});