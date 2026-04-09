import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.scss'
})
export class ContactoComponent {
  nombre = '';
  email = '';
  mensaje = '';
  enviado = signal(false);
  error = signal(false);
  cargando = signal(false);

  async enviarFormulario() {
    if (!this.nombre || !this.email || !this.mensaje) return;

    this.cargando.set(true);
    this.error.set(false);

    try {
      await emailjs.send(
        'service_zir3le9',
        'template_ryyoyls',
        {
          nombre: this.nombre,
          email: this.email,
          mensaje: this.mensaje
        },
        'GIVThYiTU8wd5KZdY'
      );

      this.enviado.set(true);
      this.nombre = '';
      this.email = '';
      this.mensaje = '';
      setTimeout(() => this.enviado.set(false), 4000);

    } catch (err) {
      this.error.set(true);
      setTimeout(() => this.error.set(false), 4000);
    } finally {
      this.cargando.set(false);
    }
  }
}