// diretivas
import { 
	Directive, ElementRef, Input, OnInit 
} from '@angular/core';

@Directive({
   selector: '[tarefaConcluida]' // minha tag
  }) 
export class TarefaConcluidaDirective implements OnInit  {
   @Input() tarefaConcluida: boolean;

    constructor(private el: ElementRef) {}

    ngOnInit() { // Um gancho de ciclo de vida que é chamado depois que Angular inicializou todas as propriedades vinculadas a dados de uma diretiva
      if (this.tarefaConcluida) {
        this.el.nativeElement.style.textDecoration = "line-through";
      }
    }
}
