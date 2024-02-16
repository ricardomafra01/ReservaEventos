document.addEventListener('DOMContentLoaded', () => {
    const btnReservar = document.getElementById('btnReservar');
    if (btnReservar) {
        btnReservar.addEventListener('click', realizarReserva);
    }
});

function realizarReserva() {
    const nome = document.getElementById('nome').value;
    const espaco = document.getElementById('espaco').value;
    const data = document.getElementById('data').value;

    // Aqui você deve inserir lógica para inserir esses dados no banco de dados local.
    // Use os valores de 'nome', 'espaco' e 'data' para realizar a inserção.
    // Isso pode envolver o uso de bibliotecas ou métodos específicos do banco de dados que está utilizando localmente.
}