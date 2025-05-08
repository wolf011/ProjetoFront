let formElement = document.querySelector(".form");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(formElement);
  const data = Object.fromEntries(formData);

  fetch("https://681bdd746ae7c794cf700478.mockapi.io/clientes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .then(alert("Enviado com sucesso"))
    .catch((error) => console.error("Error"));
});
