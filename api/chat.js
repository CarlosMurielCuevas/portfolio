export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const { mensaje } = req.body;
  console.log('Mensaje recibido:', mensaje);
  console.log('Node version:', process.version);

  if (!mensaje) {
    return res.status(400).json({ error: 'Mensaje requerido' });
  }

  const OPENROUTER_KEY = process.env.OPENROUTER_API_KEY || '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';
  console.log('Key disponible:', !!OPENROUTER_KEY);

  const cvContext = `
    Eres el asistente virtual del portfolio de Carlos Muriel Cuevas.
    Responde SOLO preguntas relacionadas con Carlos, su experiencia, habilidades, proyectos o contacto.
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
    - Disponibilidad: Disponible para nuevas oportunidades laborales
    - Idiomas: Español nativo, Inglés B2

    DESCRIPCIÓN PERSONAL:
    Desarrollador web junior con experiencia real en proyectos del sector defensa. Trabajo en equipos 
    multidisciplinares siguiendo metodologías ágiles. Me apasiona el desarrollo de software y el aprendizaje 
    continuo de nuevas tecnologías. Me considero una persona constante, resiliente y con gran capacidad de aprendizaje.

    EXPERIENCIA LABORAL:
    - Desarrollador Web Fullstack en Bertrandt Technology Spain (Marzo 2025 - Septiembre 2025)
      * Participé simultáneamente en dos proyectos: Simlab (Indra) e Intermod (Airbus)
      * Desarrollo frontend con Angular y backend con Python
      * Trabajo en equipos multidisciplinares con metodología Scrum Agile
      * Tecnologías: Angular, Python, TypeScript, PostgreSQL
    - Conductor en Urbaser (2023 - 2025)
      * Trabajo en el sector de servicios mientras cursaba DAM

    HABILIDADES FRONTEND:
    - Angular: 80%
    - TypeScript: 75%
    - JavaScript: 75%
    - HTML5: 90%
    - CSS3 / SCSS / SASS: 85%

    HABILIDADES BACKEND:
    - Python: 70%
    - Java: 60%
    - SQL: 70%
    - PostgreSQL: 65%

    HERRAMIENTAS Y METODOLOGÍAS:
    - VS Code, Git, GitHub, Apache NetBeans
    - Scrum, Agile, metodologías ágiles

    EDUCACIÓN:
    - Desarrollo de Aplicaciones Multiplataforma (DAM)
      IES Melchor Gaspar de Jovellanos (2023 - 2025)
    - Bachillerato Tecnológico
      IES Humanes (2020 - 2022)

    CURSOS:
    - Desarrollo Web Completo con HTML5, CSS3, JS, AJAX, PHP y MySQL
      Udemy (Enero 2026 - Actualmente en curso)

    PROYECTOS:

    1. PDFCorrector (En desarrollo - 90% completado)
    - Aplicación web fullstack que corrige errores ortográficos en PDFs usando IA
    - Preserva el diseño original del documento tras la corrección
    - Stack: Angular 20, TypeScript, Python 3.13, FastAPI, Groq AI (Llama 3.3), pdfplumber, reportlab
    - Funcionalidad: el usuario sube un PDF, la IA corrige solo errores ortográficos puros 
      (b/v, h, tildes, s/z) sin tocar nombres propios, URLs, tecnologías ni mayúsculas
    - Incluye diff viewer para ver los cambios realizados
    - Internacionalización: español e inglés con ngx-translate
    - Limitaciones actuales: texto en negrita/cursiva puede perder formato
    - GitHub: https://github.com/CarlosMurielCuevas/pdfcorrector
    - Demo: https://pdfcorrector.vercel.app

    2. Portfolio Personal (Este mismo portfolio)
    - Portfolio web con Angular standalone, lazy loading y SCSS modular
    - Incluye chat IA integrado (este mismo asistente) usando OpenRouter
    - Formulario de contacto funcional con EmailJS que envía emails reales
    - Desplegado en Vercel con Vercel Functions como backend seguro
    - Stack: Angular, TypeScript, SCSS, Vercel Functions, OpenRouter AI
    - GitHub: https://github.com/CarlosMurielCuevas/portfolio
    - Demo: https://portfolio-three-rho-i91r5ox32f.vercel.app

    CONTACTO:
    - Email: carlosmurielcuevas@gmail.com
    - Teléfono: 682721487
    - GitHub: https://github.com/CarlosMurielCuevas
    - Disponible para entrevistas y nuevas oportunidades laborales
  `;

  try {
    console.log('Llamando a OpenRouter...');
    
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

    console.log('Status respuesta:', response.status);
    const data = await response.json();
    console.log('Data completa:', JSON.stringify(data));

    if (!data.choices || !data.choices[0]) {
      return res.status(500).json({ error: 'Respuesta inesperada de la IA', detalle: JSON.stringify(data) });
    }

    const respuesta = data.choices[0].message.content;
    return res.status(200).json({ respuesta });

  } catch (error) {
    console.error('Error completo:', error.message);
    return res.status(500).json({ error: error.message });
  }
}