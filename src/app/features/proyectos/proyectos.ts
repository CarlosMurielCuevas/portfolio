import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Proyecto {
  titulo: string;
  icono: string;
  descripcion: string;
  tecnologias: string[];
  github: string | null;
  demo: string | null;
  descarga?: string;
  destacado: boolean;
  estado?: string;
}

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.scss'
})
export class ProyectosComponent {
  proyectos: Proyecto[] = [
    {
      titulo: 'RoadPack',
      icono: '🏍️',
      descripcion: 'App social para moteros: graba rutas con GPS incluso con la pantalla bloqueada, organiza quedadas con tu grupo y conecta con otros riders. Disponible como web (PWA) y como app Android con login de Google.',
      tecnologias: ['Angular', 'TypeScript', 'Capacitor', 'Supabase', 'Leaflet', 'PWA'],
      github: null,
      demo: 'https://roadpack.vercel.app',
      descarga: 'https://github.com/CarlosMurielCuevas/roadpack-app/releases/latest/download/RoadPack.apk',
      destacado: true
    },
    {
      titulo: 'Lista de la compra familiar',
      icono: '🛒',
      descripcion: 'Aplicación fullstack para compartir la lista de la compra en familia: búsqueda de alimentos con la API de Open Food Facts, varias familias por usuario con código de invitación y vaciado de la lista con un clic al terminar la compra.',
      tecnologias: ['Angular', 'TypeScript', 'FastAPI', 'PostgreSQL', 'JWT', 'Docker'],
      github: 'https://github.com/CarlosMurielCuevas/lista-compra-familiar',
      demo: null,
      destacado: true
    },
    {
      titulo: 'PDFCorrector',
      icono: '📄',
      descripcion: 'Aplicación web fullstack que corrige errores ortográficos en documentos PDF usando IA, preservando el diseño original del documento.',
      tecnologias: ['Angular', 'TypeScript', 'Python', 'FastAPI', 'Groq AI', 'SCSS'],
      github: 'https://github.com/CarlosMurielCuevas/pdfcorrector',
      demo: 'https://pdfcorrector.vercel.app',
      destacado: true,
      estado: 'En desarrollo (90%)'
    },
    {
      titulo: 'Portfolio Personal',
      icono: '💼',
      descripcion: 'Este portfolio: Angular standalone con lazy loading, SCSS modular con mixins responsive, formulario de contacto con EmailJS y asistente con IA integrado mediante Vercel Functions.',
      tecnologias: ['Angular', 'TypeScript', 'SCSS', 'Vercel Functions', 'OpenRouter AI'],
      github: 'https://github.com/CarlosMurielCuevas/portfolio',
      demo: 'https://portfolio-three-rho-i91r5ox32f.vercel.app',
      destacado: false
    },
    {
      titulo: 'VideoEditor',
      icono: '🎬',
      descripcion: 'Editor de vídeo de escritorio: importación de clips con lectura de metadatos, previsualización, timeline multipista con arrastrar y soltar y exportación con FFmpeg con resolución y calidad configurables.',
      tecnologias: ['Electron', 'JavaScript', 'Node.js', 'FFmpeg'],
      github: 'https://github.com/CarlosMurielCuevas/editor-video',
      demo: null,
      destacado: false
    }
  ];
}
