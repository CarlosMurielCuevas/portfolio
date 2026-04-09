import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.scss'
})
export class ProyectosComponent {
  proyectos = [
    {
      titulo: 'Portfolio Personal',
      descripcion: 'Portfolio personal desarrollado con Angular standalone, SCSS con arquitectura modular, mixins responsive y lazy loading. Muestra mis habilidades como desarrollador fullstack.',
      tecnologias: ['Angular', 'TypeScript', 'SCSS', 'Lazy Loading'],
      github: 'https://github.com/CarlosMurielCuevas/portfolio',
      demo: null,
      destacado: true
    },
    {
      titulo: 'Próximo proyecto',
      descripcion: 'Actualmente trabajando en nuevos proyectos para ampliar mi portfolio. ¡Pronto habrá más contenido aquí!',
      tecnologias: ['En desarrollo'],
      github: null,
      demo: null,
      destacado: false
    }
  ];
}