fetch('js-learning-checklist.json')
    .then(res => res.json())
    .then(data => {
        loadMaterials(data)
    })

// const xhr = new XMLHttpRequest()
// xhr.open("GET", "js-learning-checklist.json")
// xhr.send()
// xhr.onload = () => {
//     let e = JSON.parse(xhr.responseText)
//     loadMaterials(e)
// }

function loadMaterials(Materials) {
    const container = document.querySelector('.container')
    for (let prop in Materials) {
        let div = document.createElement('div')
        div.classList.add('checklist')
    
        let h2 = document.createElement('h2')
        h2.innerHTML = prop
        
        div.append(h2)
        
        for (let i in Materials[prop]) {
            let label = document.createElement('label')
            let num = Number(i) + 1
            label.innerHTML = `<input type="checkbox" id="${prop + ' ' + num}">${Materials[prop][i]}`
            div.append(label)
        }
        
        container.append(div)
    }

    addEvent()
}

function addEvent() {
    let checkbox = document.querySelectorAll('input')
    checkbox.forEach(el => {
        let id = el.getAttribute('id')
        el.addEventListener('click', () => {
            saveProgress(id)
        })

        loadProgress(el, id)
    });
}

function saveProgress(id) { // To save the checked input to local storage
    if (!localStorage.getItem('progress')) {
        let arr = [id]
        localStorage.setItem('progress', JSON.stringify(arr))
    } else {
        let arr = JSON.parse(localStorage.getItem('progress')) // array
        // console.log(typeof get);
        arr.push(id)
        localStorage.setItem('progress', JSON.stringify(arr))
    }
}

function loadProgress(el, id) { // to load checked input from local storage
    let arr = JSON.parse(localStorage.getItem('progress'))     

    for (let i in arr) {
        if (arr[i] == id) el.setAttribute('checked', 'checked') 
    }
}