const form = document.getElementById("form-nomes");
const imgAprovado = '<img src="./images/aprovado.png" alt = "Emoji celebrando"/>';
const imgReprovado = '<img src="./images/reprovado.png" alt = "Emoji chorando"/>';
const nomes = [];
const numero = [];

let linhas = '';

form.addEventListener("submit", function(e) {
    e.preventDefault()

    adicionaContato();
    atualizaAgenda();
    
});

function adicionaContato() {
    const inputNomeContato = document.getElementById("nome-contato");
    const inputNumeroContato = document.getElementById("numero-contato");

    if (nomes.includes(inputNomeContato.value)) {
        alert(`O Contato: ${inputNomeContato.value} já consta na agenda, se deseja incluir novo número para ${inputNomeContato.value}, cadastre o nome de contato como: ${inputNomeContato.value}+1`);
        } else {
        nomes.push(inputNomeContato.value);
        numero.push(parseInt(inputNumeroContato.value));
    
        let linha = '<tr>';
        linha += `<td> ${inputNomeContato.value}</td>`;
        linha += `<td> ${inputNumeroContato.value}</td>`;
        linha += '</tr>';
    
        linhas += linha;
        }
    
        inputNomeContato.value = '';
        inputNumeroContato.value = '';
    }

function atualizaAgenda() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
