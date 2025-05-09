document.querySelector(".form").addEventListener("submit", async (event) => {
  event.preventDefault();

const formData = new FormData(event.target);
const data = Object.fromEntries(formData.entries());

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
      alert("Pedido enviado com sucesso!");
    } else {
      throw new Error("Erro ao enviar os dados.");
    }
  } catch (error) {
    console.error("Erro:", error);
  }
});
