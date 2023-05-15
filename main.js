const container = document.querySelector('.container')


const Materials = {
    "HTML Dasar": ["Pengenalan Web", "Pengenalan HTML", "Pengenalan Web Hosting", "Persiapan", "Membuat Project", "Hello World", "Menjalankan Web di Komputer", "Menjalankan Web di Web Hosting", "Penamaan File HTML", "Heading", "Paragraph", "Entities", "Break Line", "Style", "Formatting", "Comment", "Color", "List", "Link", "Image", "Picture", "Computer Code", "Emoji", "Head", "Favicon", "Block dan Inline", "Video", "Audio", "HTML 5", "Inline Frame", "Table", "Semantic", "Layout", "Responsive", "ID", "Tag Lainnya"], 
    "JavaScript Dasar": ["Pengenalan JavaScript", "Program Hello World", "Komentar", "Tipe Data Number", "Tipe Data Boolean", "Tipe Data String", "Variable", "Operator Matematika", "Operator Perbandingan", "Operator Logika", "Console", "String Template", "Konversi String dan Number", "Tipe Data Array", "Tipe Data Object", "If Expression", "Popup", "Undefined", "Null", "Switch Expression", "Operator typeof", "Operator in", "Ternary Operator", "Nullisth Coalesting Operator", "Optional Chaining", "Falsy dan Truthy", "Operator Logika di Non Boolean", "For Loop", "While Loop", "Do While Loop", "Break dan Continue", "Label", "For In", "For Of", "With Statement", "Function", "Function Parameter", "Function Return Value", "Optional Parameter", "Default Parameter", "Rest Parameter", "Function Sebagai Value", "Anonymous Function", "Function dalam Function", "Scope", "Recursive Function", "Function Generator", "Arrow Function", "Closure", "Object Method", "Kata Kunci this", "Arrow Function di Object", "Getter dan Setter", "Masalah Variable var", "Destructuring", "Strict Mode", "Debugger"], 
    "JavaScript OOP": ["Pengenalan Object Oriented Programming", "Membuat Constructor Function", "Property di Constructor Function", "Method di Constructor Function", "Parameter di Constructor Function", "Constructor Inheritance", "Prototype", "Prototype Inheritance", "Class", "Constructor di Class", "Property di Class", "Method di Class", "Class Inheritance", "Super Constructor", "Super Method", "Getter dan Setter di Class", "Public Class Field", "Private Class Field", "Private Method", "Operator instanceof", "Static Field", "Static Method", "Error", "Error Handling", "Membuat Class Error", "Iterable dan Iterator"], 
    "JavaScript Standard Library": ["Number", "String", "Array", "Object", "JSON", "BigInt", "Date", "Math", "Boolean", "Map", "Set", "Symbol", "RegExp", "Proxy", "Reflect", "Encode", "Base64", "Eval"],
    "JavaScript Modules": ["Pengenalan JavaScript Modules", "Membuat Project", "Live Server", "Tanpa Module", "Membuat Module", "Export", "Import", "Variable di Module", "Class di Module", "Export Multiple", "Alias", "Export Default", "Module Object", "Aggregating Modules", "Dynamic Module Loading"], 
    "JavaScript DOM": ["Pengenalan DOM", "Membuat Project", "Tipe Data", "Document", "Node", "Element", "NodeList", "Attr", "NamedNodeMap", "Text Node", "Event Handler", "Event", "Style", "Inner Text dan Inner HTML", "Window", "Query Selector", "Node Type", "HTML Element", "HTML Form Element", "HTML Table Element", "HTML Element Lainnya"], 
    "Studi Kasus : TodoList": ["Target Aplikasi", "Membuat Halaman", "Menambah Todolist", "Menampilkan Todolist", "Mencari Todolist", "Menghapus Todolist"], 
    "JavaScript Async" : ["Pengenalan Asynchronous", "Callback", "AJAX", "Menerima Data di AJAX", "Respose Status di AJAX", "State di AJAX", "Hookbin", "Alternative Hookbin", "Error CORS", "Mengirim Data dengan AJAX", "URL Search Param", "Form Data dengan AJAX", "Upload File dengan AJAX", "Promise", "Promise Method", "Fetch API", "Async Await", "Web Worker"]
}


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