document.querySelector(".form").addEventListener("submit", async (event) => {
  event.preventDefault();

const formData = new FormData(event.target); // Cria um objeto FormData com os dados do formulário enviado.
const data = Object.fromEntries(formData.entries()); // Converte os dados do FormData em um objeto JavaScript.

// POST
try {
  const response = await fetch("https://681e362ac1c291fa66336b11.mockapi.io/api/gas/pedidos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

    if (response.ok) {
      const result = await response.json();
      console.log(result);
      alert("Seu pedido já está a caminho!");
    } else {
      throw new Error("Erro ao enviar os dados.");
    }
  } catch (error) {
    console.error("Erro:", error);
  }
});
