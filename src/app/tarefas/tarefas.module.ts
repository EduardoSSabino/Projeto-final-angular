import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { 
  TarefaService,  // service
  TarefaConcluidaDirective // directive
} from './shared';
import { ListarTarefaComponent } from './listar';
import { CadastrarTarefaComponent } from './cadastrar';
import { EditarTarefaComponent } from './editar';

@NgModule({
  imports: [ // importações dos modulos
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [ // compnoenetes e diretivas
  	ListarTarefaComponent,
  	CadastrarTarefaComponent,
  	EditarTarefaComponent,
  	TarefaConcluidaDirective
  ],
  providers: [ //services
  	TarefaService
  ]
})
export class TarefasModule { }
