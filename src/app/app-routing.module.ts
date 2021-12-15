import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; // importação das rotas e requisições

// importações das rotas
import { DashboardRoutes } from './dashboard';
import { CalculadoraRoutes } from './calculadora';
import { ConversorRoutes } from './conversor';
import { TarefaRoutes } from './tarefas';
import { JogoDaVelhaRoutes } from './jogo-da-velha';

export const routes: Routes = [ // minhas rotas
	{ 
		path: '', 
		redirectTo: '/dashboard', 
		pathMatch: 'full' 
	},
	...DashboardRoutes,
	...CalculadoraRoutes,
	...ConversorRoutes,
	...TarefaRoutes,
	...JogoDaVelhaRoutes
];

@NgModule({ /* declara todos os componentes/diretivas/tubulações/etc.
	 que são usados ​​no módulo, expõem alguns desses componentes etc. a outros
	  módulos, configuram o roteamento para o módulo e configuram  quaisquer
	 */
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ], // forRoot - unica instancia
  exports: [ RouterModule ]
})
export class AppRoutingModule {} // minha classe
