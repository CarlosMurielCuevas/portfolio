import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-habilidades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './habilidades.html',
  styleUrl: './habilidades.scss'
})
export class HabilidadesComponent {
  frontend = [
    { nombre: 'Angular', nivel: 80 },
    { nombre: 'TypeScript', nivel: 75 },
    { nombre: 'JavaScript', nivel: 75 },
    { nombre: 'HTML5', nivel: 90 },
    { nombre: 'CSS3 / SCSS', nivel: 85 },
  ];

  backend = [
    { nombre: 'Python', nivel: 70 },
    { nombre: 'Java', nivel: 60 },
    { nombre: 'SQL', nivel: 70 },
    { nombre: 'PostgreSQL', nivel: 65 },
  ];

  ia = [
    { nombre: 'Agentes de IA', icono: '🤖' },
    { nombre: 'LLMs', icono: '🧠' },
    { nombre: 'IA generativa', icono: '✨' },
    { nombre: 'Prompt engineering', icono: '💬' },
    { nombre: 'Claude', icono: '✴️' },
    { nombre: 'Automatización de procesos', icono: '⚙️' },
  ];

  herramientas = [
    { nombre: 'Git / GitHub', icono: '🐙' },
    { nombre: 'Jira', icono: '📋' },
    { nombre: 'Bitbucket', icono: '🪣' },
    { nombre: 'VS Code', icono: '🛠️' },
    { nombre: 'Apache NetBeans', icono: '☕' },
    { nombre: 'Scrum / Agile', icono: '🔄' },
  ];
}
