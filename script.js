const text =
"Main jaanta hu shayad tum mujhse gussa ho... 🥺❤️\n\nPar ek baat sach hai...\nMain tumhe kabhi intentionally hurt nahi karna chahta.\n\nTum meri favourite person ho.\nMain har din better banne ki koshish karunga... Sirf tumhare liye. ❤️";

let i = 0;
const typing = document.getElementById("typing");

function typeWriter() {
    if (i < text.length) {
        typing.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 45);
    }
}

window.onload = () => {

    setTimeout(() => {
        document.getElementById("loading").style.opacity = "0";

        setTimeout(() => {
            document.getElementById("loading").style.display = "none";
        },1000);

    },2500);

    typeWriter();

}

const hearts = document.getElementById("hearts");

setInterval(()=>{

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";
heart.style.left=Math.random()*100+"vw";
heart.style.top="100vh";
heart.style.fontSize=(20+Math.random()*20)+"px";
heart.style.animation="fly 6s linear";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},6000);

},300);

const style=document.createElement("style");

style.innerHTML=`

@keyframes fly{

0%{
transform:translateY(0);
opacity:1;
}

100%{
transform:translateY(-120vh);
opacity:0;
}

}

`;

document.head.appendChild(style);
