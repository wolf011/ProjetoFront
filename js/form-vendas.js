console.log("Script carregado com sucesso!");
var resultados = [];
document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch("https://681e362ac1c291fa66336b11.mockapi.io/api/gas/pedidos"); // Substitua pela sua API

        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }

        const data = await response.json();
        console.log("Dados recebidos:", data);

        resultados = data;

        // Selecionando o elemento correto no HTML
        const listaClientes = document.getElementById("clientes-list");

        // Garantindo que o elemento existe antes de adicionar conteúdo
        if (listaClientes) {
            data.forEach((item) => {
                listaClientes.innerHTML += `<li>
                        <strong>Nome:</strong>${item.nome}<br>
                        <strong>Endereço:</strong>${item.endereco}<br>
                        <strong>Tel:</strong>${item.telefone}<br>
                        <strong>Data:</strong>${formatarData(item.dataEntrega)}<br>
                        </li>`;
            });
        } else {
            console.error("Elemento #clientes-list não encontrado no HTML!");
        }
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
    }
});

function formatarData(dataEntrega) {
    if (!dataEntrega) return "Não informado";
    
    const data = new Date(dataEntrega); // string para um objeto Date

    // Obter dia, mês e ano
    const dia = data.getDate().toString();//
    const mes = (data.getMonth() + 1).toString();//
    const ano = data.getFullYear();

    return `${dia} - ${mes} - ${ano}`;
}

function pesquisarNome(){
    const textoPesquisa = document.getElementById("input-pesquisa").value;
    // console.log(document.getElementById("input-pesquisa").value);
    // console.log(resultados);
    const filtro = resultados.filter(
        (item)=>{
            return item.nome === textoPesquisa;
        }
    )
    console.log(filtro);
    const listaClientes = document.getElementById("clientes-list");
    listaClientes.innerHTML="";
    const renderizacao = textoPesquisa != "" ? filtro : resultados
    renderizacao.forEach((item) => {
                listaClientes.innerHTML += `<li>
                        <strong>Nome:</strong>${item.nome}<br>
                        <strong>Endereço:</strong>${item.endereco}<br>
                        <strong>Tel:</strong>${item.telefone}<br>
                        <strong>Data:</strong>${formatarData(item.dataEntrega)}<br>
                        </li>`;
            });
}

