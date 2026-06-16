let con = document.querySelector(".container");
let btt = document.querySelector("#btn");
let bxx = document.createElement("div");
let tm = document.querySelector("#timer");
let main = document.querySelector("main")
let scc = document.querySelector("#score");
let gov = document.querySelector("#gameover")
// bxx.classList.add("box");




let time =0;
let sc =0;
let int ;
let ck = true;


const color = ()=>{

    let r = Math.floor(Math.random() * 256);
    let g =  Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r},${g},${b})`;
}


const randombox = ()=>{
     let mainH = con.clientHeight - bxx.offsetHeight;
        let mainW = con.clientWidth - bxx.offsetWidth; 

        let tp = Math.random() * mainH;
        let lf = Math.random() * mainW;
        bxx.style.backgroundColor = color();

        bxx.style.top = `${tp}px`;
        bxx.style.left = `${lf}px`;
}

const logic = ()=>{
    con.append(bxx)
    clearInterval(int);
   
    int = setInterval(()=>{
        time += 1;
        tm.textContent = time;
        randombox();

    },1000)

    setTimeout(()=>{
        clearInterval(int);
        tm.textContent = 0;
        gov.style.display = "flex"
        ck = false;
        // scc.textContent= 0;
    },10000)
}



bxx.addEventListener("click",()=>{
  sc += 1
 scc.textContent = sc;
})


btt.addEventListener("click",()=>{
    
    clearInterval(int)
    bxx.classList.add("box");
    if(ck == true){
     logic()
    }
  


})