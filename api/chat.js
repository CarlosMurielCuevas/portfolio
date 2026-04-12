export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const { mensaje } = req.body;

  if (!mensaje) {
    return res.status(400).json({ error: 'Mensaje requerido' });
  }

  const OPENROUTER_KEY = process.env.OPENROUTER_API_KEY || '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';

  const cvContext = `
    Eres el asistente virtual del portfolio de Carlos Muriel Cuevas.
    Responde SOLO preguntas relacionadas con Carlos, su experiencia, habilidades o contacto.
    Si te preguntan algo que no tiene que ver con Carlos, responde amablemente que solo puedes hablar sobre él.
    Responde siempre en el mismo idioma que el usuario.
    Sé breve y directo en tus respuestas.

    INFORMACIÓN SOBRE CARLOS MURIEL:

    PERFIL:
    - Nombre: Carlos Muriel Cuevas
    - Puesto: Junior Web Developer Fullstack
    - Email: carlosmurielcuevas@gmail.com
    - Teléfono: 682721487
    - GitHub: https://github.com/CarlosMurielCuevas
    - Disponibilidad: Disponible para nuevas oportunidades

    EXPERIENCIA:
    - Desarrollador Web Fullstack en Bertrandt Technology Spain (Marzo 2025 - Septiembre 2025)
      Proyectos: Simlab (Indra) e Intermod (Airbus)
      Tecnologías: Angular, Python, TypeScript, PostgreSQL
      Metodología: Scrum Agile

    HABILIDADES FRONTEND:
    - Angular (80%), TypeScript (75%), JavaScript (75%), HTML5 (90%), CSS3/SCSS (85%)

    HABILIDADES BACKEND:
    - Python (70%), Java (60%), SQL (70%), PostgreSQL (65%)

    HERRAMIENTAS:
    - VS Code, Git/GitHub, Apache NetBeans, Scrum/Agile

    EDUCACIÓN:
    - Desarrollo de Aplicaciones Multiplataforma - IES Melchor Gaspar de Jovellanos (2023-2025)
    - Bachillerato Tecnológico - IES Humanes (2020-2022)

    CURSOS:
    - Desarrollo Web Completo con HTML5, CSS3, JS, AJAX, PHP y MySQL - Udemy (Enero 2026 - Actualmente)

    IDIOMAS:
    - Español: Nativo
    - Inglés: B2
  `;

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENROUTER_KEY}`,
        'HTTP-Referer': 'https://portfolio-three-rho-i91r5ox32f.vercel.app',
        'X-Title': 'Portfolio Carlos Muriel'
      },
      body: JSON.stringify({
        model: 'openai/gpt-oss-120b:free',
        messages: [
          { role: 'system', content: cvContext },
          { role: 'user', content: mensaje }
        ]
      })
    });

    const data = await response.json();
    const respuesta = data.choices[0].message.content;
    return res.status(200).json({ respuesta });

  } catch (error) {
    console.error('Error completo:', error);
    return res.status(500).json({ error: error.message || 'Error al procesar la solicitud' });
  }
}