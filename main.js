fetch('js-learning-checklist.json')
    .then(res => res.json())
    .then(data => {
        loadMaterials(data)
    })


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
            label.innerHTML = `<input type="checkbox" disabled id="${prop + ' ' + num}">${Materials[prop][i]}`
            div.append(label)
        }
        
        container.append(div)
    }
    
    addEvent()
}

function addEvent() {
    let checkbox = document.querySelectorAll('input')
    
    let arr = JSON.parse(localStorage.getItem('progress'))
    if (!arr) {
        checkbox[0].disabled = false
        checkbox[0].parentElement.classList.add('start')
    }

    for (let el of checkbox) {
        let id = el.getAttribute('id')
        
        loadProgress(el, id)

        el.addEventListener('click', () => {
            saveProgress(el, id)
            loadProgress(el, id)
        })
    }
}

function saveProgress(el, id) {
    let arr = JSON.parse(localStorage.getItem('progress'))
    if (!arr) { 
        arr = [id] 
        localStorage.setItem('progress', JSON.stringify(arr)) 
    } else {
        let arr = JSON.parse(localStorage.getItem('progress')) 
        arr.push(id)
        localStorage.setItem('progress', JSON.stringify(arr))
        loadProgress(el, id)
    }
    
    undisabled(arr)
}

function loadProgress(el, id) { 
    let arr = JSON.parse(localStorage.getItem('progress'))
    if (arr) { 
        for (let i in arr) {
            if (arr[i] == id) {
                el.checked = true
                el.parentElement.classList.add('done')
            }
        }
    } 
    
    undisabled(arr)
}

function undisabled(arr) {

    if (arr) { // OK
        let lastEl = document.getElementById(arr.slice(-1)) // get the last progress element
        let nextelem = (!lastEl.parentElement.nextElementSibling) ? 
            lastEl.parentElement.parentElement.nextElementSibling.children[1].children[0] : 
            lastEl.parentElement.nextElementSibling.children[0] // true
            
        nextelem.disabled = false
        nextProgress(nextelem, lastEl)

    } else {
        let firstElem = document.querySelector('label') // get the first progress element // OK
        firstElem.disabled = true
        firstElem.addEventListener('click', () => {
            firstElem.classList.remove('start')
        } )
        let nextelem = firstElem.parentElement.nextElementSibling.children[0] // true
        nextProgress(nextelem, firstElem)
    }
}

function nextProgress(nextelem, lastEl) {
    nextelem.parentElement.classList.add('last-progress')
    lastEl.parentElement.classList.remove('last-progress')
    lastEl.parentElement.classList.add('done')
    lastEl.disabled = true
}

document.querySelector('#reset').addEventListener('click', (e) => {
    e.preventDefault()
    let conf = confirm('Hapus semua progres? Anda akan kehilangan progress Anda sejauh ini.')
    if (conf) {
        localStorage.removeItem('progress')
        window.location.reload()
    }
})