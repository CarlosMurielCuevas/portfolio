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

  const cvContext = `Eres el asistente virtual del portfolio de Carlos Muriel Cuevas. Responde SOLO preguntas sobre Carlos, su experiencia, habilidades o contacto. Sé breve y directo. Información: Desarrollador Web Fullstack Junior. Experiencia en Bertrandt Technology Spain (Mar-Sep 2025) con Angular y Python. Skills: Angular, TypeScript, JavaScript, HTML, SCSS, Python, Java, PostgreSQL. Email: carlosmurielcuevas@gmail.com. GitHub: CarlosMurielCuevas. Disponible para trabajar.`;

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