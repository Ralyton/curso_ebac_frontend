let form = document.getElementById('form')
let nome = document.getElementById('nome')
let numero = document.getElementById('numero')
cadastrados = []
let linhas = '' 

function addContato(nomecontato, numerocontato) {
    
    let linha = '<tr>'
    linha += `<td>${nomecontato.value}</td>`
    linha += `<td>${numerocontato.value}</td>`
    linha += '</tr>'

    linhas += linha

    let corpotabela = document.querySelector('tbody')
    corpotabela.innerHTML = linhas

    cadastrados.push(nome.value)

    nomecontato.value = ''
    numerocontato.value = ''
    nomecontato.focus()
}

function resumo() {

    let linha = '<tr>'
    linha += `<td><strong>Cadastrados</strong></td>`
    linha += `<td><strong>${cadastrados.length}</strong></td>`
    linha += '</tr>'

    let pe_tabela = document.querySelector('tfoot')
    pe_tabela.innerHTML = linha
}

form.addEventListener('submit', function(e) {
    e.preventDefault()

    if(nome.value.length == 0 || numero.value.length ==0) {
        alert('[ERRO] Por favor digite os dados para prosseguir!')
    } else {
        addContato(nome, numero)

        resumo()
    }   
})
