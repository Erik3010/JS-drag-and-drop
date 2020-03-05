let dragContainer = document.querySelector('.draggable-container'),
    draggable = document.querySelector('.draggable'),
    dropContainer = document.querySelector('dropable-container'),
    dropable = document.querySelectorAll('.dropable');

draggable.addEventListener('dragstart', function() {
    dropable.forEach((el, i) => {
        el.classList.add('active');
        dragContainer.classList.add('empty');
        // addClassDragContainer();
    })
})

draggable.addEventListener('dragend', function() {
    dropable.forEach((el, i) => {
        el.classList.remove('active');
        el.classList.remove('over');
        dragContainer.classList.remove('empty');
        // addClassDragContainer();
    })
})

dropable.forEach((drop, i) => {
    drop.addEventListener('dragenter', function() {
        drop.classList.add('over');
    })

    drop.addEventListener('dragleave', function(e) {
        drop.classList.remove('over');
    })

    drop.addEventListener('dragover', function(e) {
        e.preventDefault();
    })

    drop.addEventListener('drop', function(e) {
        // console.log(draggable.parentNode)
        if(e.target != draggable) {
            draggable.parentNode.removeChild(draggable);
            e.target.appendChild(draggable);
        }
    })

})

dragContainer.addEventListener('dragover', function(e) {
    e.preventDefault();
})

dragContainer.addEventListener('drop', function(e) {
    // console.log(e);
    if(e.target != draggable) {
        draggable.parentNode.removeChild(draggable);
        e.target.appendChild(draggable);
    }
})

function checkChild(el) {
    if(el.hasChildNodes) {
        return true;
    }else{
        return false;
    }
}

// function addClassDragContainer() {
    // if(!checkChild(dragContainer)) {
    //     dragContainer.classList.add('empty');
    //     alert('ok')
    // }
// }

// function checkFulled(el) {
//     if(!checkChild) {

//     }
// }