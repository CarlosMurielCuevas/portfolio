import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Mensaje {
  texto: string;
  esUsuario: boolean;
}

@Component({
  selector: 'app-chat-flotante',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-flotante.html',
  styleUrl: './chat-flotante.scss'
})
export class ChatFlotanteComponent {
  abierto = signal(false);
  cargando = signal(false);
  inputMensaje = '';
  mensajes: Mensaje[] = [
    {
      texto: '¡Hola! 👋 Soy el asistente virtual de Carlos. Puedes preguntarme sobre su experiencia, habilidades o cómo contactarle.',
      esUsuario: false
    }
  ];

  toggleChat() {
    this.abierto.set(!this.abierto());
  }

  async enviarMensaje() {
    if (!this.inputMensaje.trim() || this.cargando()) return;

    const textoUsuario = this.inputMensaje.trim();
    this.mensajes.push({ texto: textoUsuario, esUsuario: true });
    this.inputMensaje = '';
    this.cargando.set(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mensaje: textoUsuario })
      });

      const data = await response.json();
      this.mensajes.push({ texto: data.respuesta, esUsuario: false });

    } catch (error) {
      this.mensajes.push({
        texto: 'Lo siento, ha ocurrido un error. Inténtalo de nuevo.',
        esUsuario: false
      });
    } finally {
      this.cargando.set(false);
    }
  }

  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.enviarMensaje();
    }
  }
}