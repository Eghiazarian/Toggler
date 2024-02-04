let toggle = document.getElementById('toggle')
let content = document.getElementById('content')
toggle.innerHTML = "show"
content.style.display = 'none'
toggle.onclick = () => {

    if (toggle.innerHTML == 'hide') {
        toggle.innerHTML = "show"
        content.style.display = "none"
        
    } else {
        toggle.innerHTML = "hide"
        content.style.display = "block"
    }


}

