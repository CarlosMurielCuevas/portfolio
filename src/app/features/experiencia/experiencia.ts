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
      puesto: 'Desarrollador de Agentes IA',
      empresa: 'Grupo Loang · Departamento LoangIA',
      ubicacion: 'Madrid (remoto)',
      periodo: 'Mayo 2026 - Actualidad',
      logros: [
        'Desarrollo de agentes de IA con LLMs (Claude) para presupuestos, cobros y facturación.',
        'Automatización de procesos internos del software propio de la empresa.',
        'Diseño de soluciones escalables orientadas a su comercialización a clientes.'
      ],
      tecnologias: ['Claude', 'LLMs', 'Agentes de IA', 'Prompt engineering', 'Automatización'],
      actual: true
    },
    {
      puesto: 'Desarrollador Web Fullstack',
      empresa: 'Bertrandt Technology Spain',
      ubicacion: 'Madrid',
      periodo: 'Marzo 2025 - Septiembre 2025',
      logros: [
        'Participación simultánea en los proyectos Simlab (Indra) e Intermod (Airbus).',
        'Desarrollo frontend con Angular y TypeScript; desarrollo backend con Python.',
        'Trabajo en equipos multidisciplinares con metodología Scrum/Agile.'
      ],
      tecnologias: ['Angular', 'TypeScript', 'Python', 'PostgreSQL', 'Scrum'],
      actual: false
    },
    {
      puesto: 'Conductor',
      empresa: 'Urbaser',
      ubicacion: 'Madrid',
      periodo: '2023 - 2025',
      logros: [
        'Trabajo en el sector servicios compaginado con mis estudios de Desarrollo de Aplicaciones Multiplataforma.'
      ],
      tecnologias: [],
      actual: false
    }
  ];
}
