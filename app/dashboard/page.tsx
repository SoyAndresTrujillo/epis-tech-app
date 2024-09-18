import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';

type hrefOptions = Record<
  string, string
>;

export default async function Page() {
  const text = () => {
    // get data from auth
    const full_name: string = 'Andres';
    const role: string = 'FITI';

    const hrefOptions: hrefOptions = {
      FCEA: 'https://chatgpt.com/g/g-o3NMHn5g3-asistente-de-investigacion-fcea',
      FCPA: 'https://chatgpt.com/g/g-Zy4RS1xU3-asistente-de-investigacion-fcpa ',
      FITI: 'https://chatgpt.com/g/g-NS58TjYtF-asistente-de-investigacion-fit',
    };

    return (
      <>
        Bienvenido {full_name}, como eres de la facultad de {role}, por favor da click{' '}
        <a
          href={hrefOptions[role]}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-blue-600 hover:underline cursor-pointer"
        >
          aquí
        </a>{' '}
        para ir a tu chat de IA y la guía correspondiente para su uso es:
      </>
    );
  };

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="px-4 sm:px-0">
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          {text()}
        </p>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
      </div>

      {/* Contenedor de la nueva sección */}
      <section className="mt-8 p-6 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-lg font-bold mb-4">Guía de Ingeniería de Prompts Orientada a la Investigación Académica</h2>
        <p className="text-base text-gray-700 mb-2">Lotus King Salcedo Vallejo.</p>
        <p className="text-base text-gray-700 mb-4">Bogotá, 2024</p>

        <h3 className="text-lg font-semibold mb-3">Introducción</h3>
        <p className="text-base text-gray-700 mb-4">
          El propósito de esta guía es proporcionar a los estudiantes de pregrado de diversas disciplinas una herramienta pedagógica que les permita mejorar tanto su desempeño en la investigación académica como su experiencia subjetiva en el proceso de aprender a investigar mediante el uso de modelos de inteligencia artificial (IA). En particular, esta guía se centra en la ingeniería de prompts, una técnica que optimiza la interacción entre los usuarios y los modelos de lenguaje grandes (LLMs, por sus siglas en inglés) como ChatGPT, facilitando el desarrollo de tareas de investigación.
        </p>
        {/* Agregar más contenido según lo necesites */}
      </section>
    </main>
  );
}
