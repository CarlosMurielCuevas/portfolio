import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-educacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './educacion.html',
  styleUrl: './educacion.scss'
})
export class EducacionComponent {
  educacion = [
    {
      titulo: 'Desarrollo de Aplicaciones Multiplataforma',
      centro: 'IES Melchor Gaspar de Jovellanos',
      periodo: '2023 - 2025',
      tipo: 'Formación Profesional',
      icono: '🎓'
    },
    {
      titulo: 'Bachillerato Tecnológico',
      centro: 'IES Humanes',
      periodo: '2020 - 2022',
      tipo: 'Bachillerato',
      icono: '📚'
    }
  ];

  cursos = [
    {
      titulo: 'Desarrollo Web Completo con HTML5, CSS3, JS, AJAX, PHP y MySQL',
      plataforma: 'Udemy',
      periodo: 'Enero 2026 - Actualmente',
      icono: '💻'
    }
  ];
}