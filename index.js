const h1=document.getElementById("hrs");
const m1=document.getElementById("min");
const s1=document.getElementById("sec");
const ap=document.getElementById("ampm");
function UpdateClock(){
    let ampm="Am";
    let h= new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    if(h > 12){
        h= h - 12;
        ampm= "Pm" ;
    }
    h1.innerText=h;
    m1.innerText=m;
    s1.innerText=s;
    ap, (innerText=ampm);
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    setTimeout(()=>{
        UpdateClock();
    },1000)
}
UpdateClock();
