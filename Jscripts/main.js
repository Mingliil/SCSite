window.onload = () =>{
    document.body.style = ("background-image: url('assets/AquelesQueNosSalvaram.png');background-repeat: no-repeat;background-size: cover;");

}
// Source - https://stackoverflow.com/a
// Posted by Siva Charan, modified by community. See post 'Timeline' for change history
// Retrieved 2025-12-21, License - CC BY-SA 3.0
//goat
function TimerEvento(){
var end = new Date('01/03/2026 10:1 AM');
    var _miliseconds = 1;
    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById('countdown').innerHTML = 'EXPIRED!';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);
        var miliseconds = Math.floor((distance % _second) / _miliseconds);

        document.getElementById('countdown').innerHTML = days + 'D ';
        document.getElementById('countdown').innerHTML += hours + ':';
        document.getElementById('countdown').innerHTML += minutes + ':';
        document.getElementById('countdown').innerHTML += seconds + ':';
        document.getElementById('countdown').innerHTML += miliseconds + 'S';
    }

    timer = setInterval(showRemaining, 1);
}
function copyIP() {
    const ip = document.getElementById("serverIp").innerText;
    navigator.clipboard.writeText(ip).then(() => {
        alert(" Copiado: " + ip);
    });
}

if(document.contains(document.getElementById("countdown"))){
    TimerEvento();
}
document.getElementById('CopyBtn').onclick = () =>{
copyIP();
}
