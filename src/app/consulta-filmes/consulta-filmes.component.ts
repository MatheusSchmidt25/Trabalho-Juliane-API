import {Component, inject} from '@angular/core';
import {MovieService} from './consulta-filmes.service';
import {Filme} from './endereco.model';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-consulta-filmes',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
  ],
  templateUrl: './consulta-filmes.component.html',
  styleUrl: './consulta-filmes.component.css'
})
export class ConsultaFilmesComponent {
  titulo: string = 'Joker';
  filme: Filme = {}as Filme ;


  movieService = inject(MovieService);


  pesquisa() {

    this.movieService.buscarFilme(this.titulo).subscribe({
      next: (data: Filme) => {
        console.log(data);
        this.filme = data;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
}
