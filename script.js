let tarefas = [];
let continuar = true;

while (continuar) {
  let acao = prompt(
    "Escolha uma ação:\n1 - Adicionar tarefa\n2 - Listar tarefas\n3 - Remover tarefa\n4 - Concluir tarefa\n5 - Sair"
  );

  switch (acao) {
    case "1": // Adicionar
      let novaTarefa = prompt("Digite o nome da nova tarefa:");
      tarefas.push(novaTarefa);
      alert("Tarefa adicionada!");
      break;

    case "2": // Listar
      if (tarefas.length === 0) {
        alert("Nenhuma tarefa cadastrada.");
      } else {
        let lista = "Tarefas:\n";
        for (let i = 0; i < tarefas.length; i++) {
          lista += `${i} - ${tarefas[i]}\n`;
        }
        alert(lista);
      }
      break;

    case "3": // Remover
      let indiceRemover = parseInt(prompt("Digite o índice da tarefa que deseja remover:"));
      if (!isNaN(indiceRemover) && indiceRemover >= 0 && indiceRemover < tarefas.length) {
        tarefas.splice(indiceRemover, 1);
        alert("Tarefa removida!");
      } else {
        alert("Índice inválido.");
      }
      break;

    case "4": // Concluir
      let indiceConcluir = parseInt(prompt("Digite o índice da tarefa que deseja marcar como concluída:"));
      if (!isNaN(indiceConcluir) && indiceConcluir >= 0 && indiceConcluir < tarefas.length) {
        tarefas[indiceConcluir] = "✅ " + tarefas[indiceConcluir];
        alert("Tarefa marcada como concluída!");
      } else {
        alert("Índice inválido.");
      }
      break;

    case "5": // Sair
      continuar = false;
      alert("Saindo do programa...");
      break;

    default:
      alert("Opção inválida. Tente novamente.");
  }
}
