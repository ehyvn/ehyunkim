const cat = document.querySelector(".cat");
const pos = {x:0, y:0};

document.addEventListener("keydown", (ev) => {

  const dir = (ev.key.match(/(?<=^Arrow)\w+/)||[])[0];
  if (!dir) return; // Not an arrow key.
  
  ev.preventDefault(); // Prevent Browser scroll if overflow

  ({
    Left:  () => pos.x -= 10,
    Right: () => pos.x += 10,
    Up:    () => pos.y -= 10,
    Down:  () => pos.y += 10,
  }[dir])(); 
  
  cat.style.transform = `translate(${pos.x}px, ${pos.y}px)`
});


/*let cat = document.querySelector('.cat');
let moveBy = 20;

window.addEventListener('load', () => {
    cat.style.position = 'absolute' ;
    cat.style.left = 0;
    cat.style.top = 0;

});

window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowLeft' :
            cat.style.left = parseInt(cat.style.left) - moveBy + '5';
            
            break;
        case 'ArrowRight' :
            cat.style.left = parseInt(cat.style.left) + moveBy + 'px';
            break;
        case 'ArrowUp' :
            cat.style.top = parseInt(cat.style.left) - moveBy + 'px';
            break;
        case 'ArrowDown' :
            cat.style.top = parseInt(cat.style.left) + moveBy + '5';
            break;            
            
    }
})*/