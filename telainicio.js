document.addEventListener("DOMContentLoaded", () => {
    const botadd = document.getElementById("addbtn");

    botadd.addEventListener("click", () => {
        let texto = document.getElementById("add").value;

        if (texto.trim() === "") return;

        const lista = document.getElementById("colocar");

        const tarefa = document.createElement("div");
        tarefa.classList.add("tarefa");

   
        const textoTarefa = document.createElement("span");
        textoTarefa.innerText = texto;

       
        const botaoExcluir = document.createElement("button");
        botaoExcluir.innerText = "❌";

        botaoExcluir.addEventListener("click", (e) => {
            e.stopPropagation(); 
            tarefa.remove();
        });

       
        tarefa.addEventListener("click", () => {
            const atual = tarefa.parentElement.id;

            if (atual === "colocar") {
                document.getElementById("andamento").appendChild(tarefa);
            } else if (atual === "andamento") {
                document.getElementById("concluido").appendChild(tarefa);
            }
        });

        tarefa.appendChild(textoTarefa);
        tarefa.appendChild(botaoExcluir);

        lista.appendChild(tarefa);

        document.getElementById("add").value = "";
    });
});