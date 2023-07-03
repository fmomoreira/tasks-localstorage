function salvarDados() {
    var title = document.getElementById("titulo").value;
    var description = document.getElementById("descricao").value;

    var tarefas = localStorage.getItem("tarefas");

    if (tarefas) {
      tarefas = JSON.parse(tarefas);
    } else {
      tarefas = [];
    }

    tarefas.push({ titulo: title, descriptionText: description });
    localStorage.setItem("tarefas", JSON.stringify(tarefas));

    exibirDados();
    alert("Dados salvos com sucesso!");
  }

  function exibirDados() {
    var dadosSalvos = document.getElementById("dadosSalvos");
    dadosSalvos.innerHTML = "";

    var tarefas = localStorage.getItem("tarefas");

    if (tarefas) {
      tarefas = JSON.parse(tarefas);
      console.log(tarefas);
      tarefas.forEach(function (tarefa) {
        var card = document.createElement("div");
        card.classList.add("card");

        var titleElemento = document.createElement("p");
        titleElemento.textContent = tarefa.titulo;
        card.appendChild(titleElemento);

        var descriptionElemento = document.createElement("p");
        descriptionElemento.textContent = tarefa.descriptionText;
        card.appendChild(descriptionElemento);

        dadosSalvos.appendChild(card);
      });
    }
  }

  window.addEventListener("DOMContentLoaded", exibirDados);

  function alternarModo() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.toggle("dark");

    var toggleButton = document.getElementById("toggleButton");
    if (body.classList.contains("dark")) {
      toggleButton.textContent = "Modo Dia";
    } else {
      toggleButton.textContent = "Modo Noite";
    }
  }