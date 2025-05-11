const navegarPara = (pagina) => window.location.href = pagina; // Botão para migrar de página

//============================= Função que retorna o total do pedido =============================

document.getElementById("tipoProduto").addEventListener("change", calcularTotal); // Escuta mudanças no tipo de produto
document.getElementById("quantidade").addEventListener("input", calcularTotal); // Escuta alterações na quantidade

function calcularTotal() {
    let quantidade = parseInt(document.getElementById("quantidade").value) || 0;
    let tipoProduto = document.getElementById("tipoProduto").value;
    
    let valores = {
        "C": 200.00, // Cilindro P45 (45Kg)
        "G": 150.00, // Gás de Cozinha (13Kg)
        "A": 20.00  // Galão de Água (20L)
    };

    let resultado = quantidade * (valores[tipoProduto] || 0);

    let resultadoBr = resultado.toLocaleString("pt-BR", { style: "currency", currency:"BRL"});
   
    // Atualiza o campo de resultado
    document.getElementById("valorTotal").value = resultadoBr;
}

