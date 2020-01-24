let draggingElement;

function mouseDown(event) {
  event.preventDefault();
  if (event.target.matches('.draggable-item')) {
    console.log('mousedown', event);
    draggingElement = event.target;
    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseup', mouseUp);
  }
  // Using classLists
  // if(event.target.classList.contains('draggable-item')){
  //   console.log('mousedown', event);
  //   document.addEventListener('mousemove', mouseMove);
  //   document.addEventListener('mouseup', mouseUp);
  // }
}

function mouseMove(event) {
  draggingElement.style.top = `${event.clientY}px`;
  draggingElement.style.left = `${event.clientX}px`;
  console.log('mousemove', event);
}

function mouseUp(event) {
  console.log('mouseup', event);
  document.removeEventListener('mousemove', mouseMove);
  document.removeEventListener('mouseup', mouseUp);
}

document.addEventListener('mousedown', mouseDown);
