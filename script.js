// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) 
// gli elementi della lista individualmente con un ciclo while.


const listaSpesa = [
    'pane',
    'latte',
    'insalata',
    'frutta',
    'cioccolata',
    'affettati',
]

let elementoUl = document.querySelector ('ul')


let i = 0
while (i < listaSpesa.length) {
    const elementiLista = listaSpesa[i]
    console.log(elementiLista)

    let elementoLi = document.createElement ('li')
    elementoLi.append(listaSpesa[i])
    elementoUl.appendChild (elementoLi)


    i++
}




