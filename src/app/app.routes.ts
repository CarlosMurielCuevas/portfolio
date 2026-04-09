import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/hero/hero').then((m) => m.HeroComponent),
  },
  {
    path: 'sobre-mi',
    loadComponent: () =>
      import('./features/sobre-mi/sobre-mi').then((m) => m.SobreMiComponent),
  },
  {
    path: 'experiencia',
    loadComponent: () =>
      import('./features/experiencia/experiencia').then((m) => m.ExperienciaComponent),
  },
  {
    path: 'habilidades',
    loadComponent: () =>
      import('./features/habilidades/habilidades').then((m) => m.HabilidadesComponent),
  },
  {
    path: 'educacion',
    loadComponent: () =>
      import('./features/educacion/educacion').then((m) => m.EducacionComponent),
  },
  {
    path: 'proyectos',
    loadComponent: () =>
      import('./features/proyectos/proyectos').then((m) => m.ProyectosComponent),
  },
  {
    path: 'contacto',
    loadComponent: () =>
      import('./features/contacto/contacto').then((m) => m.ContactoComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
