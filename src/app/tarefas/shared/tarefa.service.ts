import { Injectable } from '@angular/core';

import { Tarefa } from './' // rota

@Injectable()
export class TarefaService {

  constructor() { }

  listarTodos(): Tarefa[] {
  	const tarefas = localStorage['tarefas'];
  	return tarefas ? JSON.parse(tarefas) : []; // caso eu tenha uma tarefa, eu passo ela pra json, senão, passo um array vazio
  }

  cadastrar(tarefa: Tarefa): void {
  	const tarefas = this.listarTodos(); // pega a lista de tarefas
  	tarefa.id = new Date().getTime(); // instacia o id, e define o id com a hora da instancia
  	tarefas.push(tarefa); // coloca uma tarefa dentro da variavel
  	localStorage['tarefas'] = JSON.stringify(tarefas); // stringify converte um valor javascript para um json
  }

  buscarPorId(id: number): Tarefa { // busca uma tarefa pel id do usuario
    const tarefas: Tarefa[] = this.listarTodos(); // lista todas as tarefas
    return tarefas.find(tarefa => tarefa.id === id); // busca (find) uma tarefa pelo id do usuario
  }

  atualizar(tarefa: Tarefa): void { // atualiza uma tarefa
    const tarefas: Tarefa[] = this.listarTodos(); // lista todas as tarefas
    tarefas.forEach((obj, index, objs) => { // obj = tarefa, index = posição da tarefa
      if (tarefa.id === obj.id) { // caso o id da tarefa seja igual ao id da tarefa (OBJ)
        objs[index] = tarefa; // a posição da tarefa sera igual a tarefa do usuario
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas); // armazena a tarefa. Stringify converte um valor javascript para um json
  }

  remover(id: number): void { // remove uma tarefa
    let tarefas: Tarefa[] = this.listarTodos(); // lista todas as tarefas e armazena num array
    tarefas = tarefas.filter(tarefa => tarefa.id !== id); // tarefas = lista todas as tarefas menos a que vai ser removida
    localStorage['tarefas'] = JSON.stringify(tarefas); // armazena a tarefa. Stringify converte um valor javascript para um json
  }

  alterarStatus(id: number): void { // altera o status da tarefa
    const tarefas: Tarefa[] = this.listarTodos(); // lista todas as tarefas
    tarefas.forEach((obj, index, objs) => { // obj = tarefa, index = posição da tarefa 
      if (id === obj.id) { // caso o id recebido seja igual ao id da tarefa
        objs[index].concluida = !obj.concluida; // pega a tarefa conluida e troca o valor dela (true ou false, ou seja, concluida ou incompleta)
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas); // armazena a tarefa. Stringify converte um valor javascript para um json
  }

}
