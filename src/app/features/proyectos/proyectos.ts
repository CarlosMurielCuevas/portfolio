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
      titulo: 'PDFCorrector',
      descripcion: 'Aplicación web fullstack que corrige errores ortográficos en documentos PDF usando IA, preservando el diseño original del documento.',
      tecnologias: ['Angular', 'TypeScript', 'Python', 'FastAPI', 'Groq AI', 'SCSS'],
      github: 'https://github.com/CarlosMurielCuevas/pdfcorrector',
      demo: 'https://pdfcorrector.vercel.app',
      destacado: true
    },
    {
      titulo: 'Portfolio Personal',
      descripcion: 'Portfolio personal desarrollado con Angular standalone, SCSS con arquitectura modular, mixins responsive, lazy loading y chat IA integrado.',
      tecnologias: ['Angular', 'TypeScript', 'SCSS', 'Vercel Functions', 'OpenRouter AI'],
      github: 'https://github.com/CarlosMurielCuevas/portfolio',
      demo: 'https://portfolio-three-rho-i91r5ox32f.vercel.app',
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