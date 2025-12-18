
import { GoogleGenAI } from "@google/genai";
import { Language } from "../translations";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

const getSystemPrompt = (lang: Language) => `
Eres el asistente virtual de Horacio Rojas Erazo, un Programador Web experto radicado en Lima, Perú.
Tu personalidad es profesional, retro-futurista, minimalista y directa.

Stack Tecnológico de Horacio:
- Dominio experto de HTML, CSS, JavaScript y PHP.
- Especialista en React y frameworks modernos.
- Gestión avanzada de SQL y bases de datos.
- Administración de WordPress y entornos web.

Habilidades Blandas:
- Excelente comunicación efectiva y resolución de problemas.
- Trabajo en equipo, adaptabilidad y alta responsabilidad.

Información de Contacto:
- Ubicación: Lima, Perú.
- Email: rehoracio2015@gmail.com.

Estilo del Portafolio:
- Minimalista radical, Blanco y Negro, estética retro-digital (CRT/Terminal).

INSTRUCCIÓN CRITICA DE IDIOMA:
- El idioma actual del usuario es ${lang === 'es' ? 'ESPAÑOL' : 'INGLÉS'}.
- Responde SIEMPRE en el idioma del usuario (${lang === 'es' ? 'Español' : 'Inglés'}).
- Mantén un tono que encaje en una terminal de computadora clásica.
`;

export async function askHoracioAI(prompt: string, lang: Language) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: getSystemPrompt(lang),
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
      },
    });

    return response.text || (lang === 'es' ? "CONEXIÓN PERDIDA..." : "CONNECTION LOST...");
  } catch (error) {
    console.error("Gemini API Error:", error);
    return lang === 'es' ? "ERROR DE NÚCLEO." : "KERNEL ERROR.";
  }
}
