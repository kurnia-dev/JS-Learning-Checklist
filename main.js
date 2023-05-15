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
            label.innerHTML = `<input type="checkbox" id="${num}">${Materials[prop][i]}`
            div.append(label)
        }
        
        container.append(div)
    }
}