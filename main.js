const links = document.querySelectorAll('nav a')

for(let link of links){
    link.addEventListener('click', pedirPagina)
}

function pedirPagina(event){
    event.preventDefault(event.target)
    const url = "html/" + event.target.dataset.pagina + ".html"
    const miPagina = document.querySelector("#inicio")

    fetch(url)
        .then(pagina => {
            return pagina.text()
        })
        .then( page => {
            miPagina.innerHTML = page
        })
        .catch(err => console.error(err))
}