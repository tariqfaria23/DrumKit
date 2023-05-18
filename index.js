
function play(e){
    const a=document.querySelector(`audio[data-key="${e.keyCode}"`);
    const k=document.querySelector(`.key[data-key="${e.keyCode}"`);
    if(!a) return;
    a.currentTime=0;
    a.play();
    k.classList.add('playing');
}

function removePlaying(e){
    if(e.propertyName!="transform") return;
    this.classList.remove('playing');
}

const p=Array.from(document.querySelectorAll('.key'))

window.addEventListener('keydown',play);
p.forEach((ps)=>ps.addEventListener('transitionend',removePlaying))