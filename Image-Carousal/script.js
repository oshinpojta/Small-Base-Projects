const imgs = document.getElementById("imgs");

let idx = 0;
const img = document.querySelectorAll("#imgs img");

function run() {
    idx++;
    imgs.style.transform = `translateX(${-idx*500}px)`;
    if(idx>img.length-2){
        idx=0;
    }
}
setInterval(run, 2000);