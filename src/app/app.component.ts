import { Component } from '@angular/core'; // importação do meu componente

@Component({ 
  selector: 'app-root', // minha tag
  templateUrl: './app.component.html', // meu template (HTML)
  styleUrls: ['./app.component.css'] // minha estilização (CSS)
})
export class AppComponent {
  title = 'Projeto final'; // titulo da minha pagina
}
