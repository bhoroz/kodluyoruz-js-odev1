let isim = prompt("İsminizi Yazınız!..");
let misafir = document.querySelector('#myName');
if (isim) {
    misafir.innerHTML = isim;
}else{
    misafir.innerHTML = "Lütfen isim giriniz !!!";
    document.querySelector('.blok2').style = "height:3000px;width:100%;position: absolute;z-index: 200;top:0;left:0;background-color: red;color: white;font-size: 40px;";
}



function showTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('myClock').innerHTML =  h + ":" + m + ":" + s;
  setTimeout(showTime, 1000);
  
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
showTime()
