function loadContent(section) {
    const content = document.getElementById("content");

    // Definimos o caminho do arquivo HTML correspondente
    const url = `secoes/${section}.html`;

    // Usamos fetch() para carregar o conteúdo do arquivo HTML
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao carregar o conteúdo.");
            }
            return response.text();
        })
        .then(html => {
            content.innerHTML = html; // Insere o conteúdo carregado na página
            content.className = ""; // Remove classes anteriores
            content.classList.add("content", section); // Adiciona classe com o nome da seção
        })
}
