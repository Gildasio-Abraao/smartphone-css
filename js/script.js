var dayName = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
var monName = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Agosto", "Outubro", "Novembro", "Dezembro"];
var now = new Date;

function Timer() {
    let today = new Date(); 
    let h = today.getHours();
    let m = today.getMinutes();
    var hours = document.getElementById('hour').innerHTML = `${h}`;
    var min = document.getElementById('minute').innerHTML = `${m}`;
    var text = document.getElementById('day').innerText = `${dayName[now.getDay()]}, ${monName[now.getMonth()]} ${now.getDate()}`;
    setTimeout('Timer()', 500);
    if(hours < 10) {
        hours = document.getElementById('hour').innerHTML = `0${h}`;
    }
    else {
        return false;
    }
    if(min < 10) {
        min = document.getElementById('minute').innerHTML = `0${m}`;
    }
    else {
        return false;
    }
}
