time = document.querySelector("#time");

setInterval(function() {
    let d = new Date();
    let time2 = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    time.textContent = time2;
},1000);

