import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experiencia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experiencia.html',
  styleUrl: './experiencia.scss'
})
export class ExperienciaComponent {
  experiencias = [
    {
      puesto: 'Desarrollador Web Fullstack',
      empresa: 'Bertrandt Technology Spain',
      periodo: 'Marzo 2025 - Septiembre 2025',
      descripcion: 'Participé de forma simultánea en dos proyectos: Simlab (Indra) e Intermod (Airbus), colaborando en equipos multidisciplinares y desarrollando tanto la parte frontend (Angular) como backend (Python), siguiendo una metodología Scrum Agile.',
      tecnologias: ['Angular', 'Python', 'TypeScript', 'PostgreSQL', 'Scrum'],
      actual: false
    },
    {
      puesto: 'Conductor',
      empresa: 'Urbaser',
      periodo: '2023 - 2025',
      descripcion: 'Trabajo en el sector de servicios mientras cursaba mis estudios de desarrollo de aplicaciones multiplataforma.',
      tecnologias: [],
      actual: false
    }
  ];
}