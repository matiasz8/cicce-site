import Head from "next/head";

import SectionWrapper from "@/components/SectionWrapper";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function Home() {
  return (
    <>
      <Head>
        <title>CICCE - Enfermería Laboral</title>
        <meta
          name="description"
          content="Centro de Investigación, Capacitación y Consultoría en Enfermería"
        />
      </Head>

      <main className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth font-sans bg-white text-gray-800">

        {/* Hero */}
        <SectionWrapper
          id="inicio"
          decorations={["blur-circle", "decor-heartbeat", "stethoscope", "cross-medical", "pill"]}
          className="bg-white text-center">
          <h1 className="text-4xl font-bold text-blue-800 mb-2">CICCE</h1>
          <h2 className="text-xl mb-4">
            Centro de Investigación, Capacitación y Consultoría en Enfermería
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Un Modelo Empresarial para la Excelencia Profesional
          </p>
          <a
            href="#formulario"
            className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition"
          >
            Inscribite ahora
          </a>
        </SectionWrapper>

        {/* ¿Quiénes somos? */}
        <SectionWrapper
          id="quienes-somos"
          decorations={["blur-circle", "cross-medical"]}
          className="bg-gray-100 text-center">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">¿Quiénes somos?</h2>
            <p className="mb-4">
              Centro liderado por el Lic. Prof. Eduardo Quiroga que impulsa la
              excelencia en la enfermería a través de capacitación, investigación
              y consultoría.
            </p>
            <p className="mb-4">
              <strong>Misión:</strong> Capacitar enfermeros de forma ética y colaborativa.
            </p>
            <p className="mb-4">
              <strong>Visión:</strong> Ser un referente en formación e innovación en salud en América Latina.
            </p>
            <ul className="text-left list-disc list-inside">
              <li><strong>Calidad</strong> – Compromiso con la excelencia.</li>
              <li><strong>Innovación</strong> – Metodologías actualizadas.</li>
              <li><strong>Integridad</strong> – Ética y transparencia.</li>
              <li><strong>Inclusión</strong> – Diversidad y colaboración.</li>
              <li><strong>Responsabilidad social</strong> – Mejoras reales en salud.</li>
            </ul>
          </div>
        </SectionWrapper>

        {/* Áreas de trabajo */}
        <SectionWrapper
          id="area"
          decorations={["blur-circle", "decor-heartbeat"]}
          className="bg-white text-center">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Áreas de trabajo</h2>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-blue-700">Capacitación</h3>
                <ul className="list-disc list-inside text-sm">
                  <li>Conferencias</li>
                  <li>Jornadas</li>
                  <li>Cursos</li>
                  <li>Acompañamiento académico</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-green-700">Investigación</h3>
                <ul className="list-disc list-inside text-sm">
                  <li>Sumate al equipo</li>
                  <li>Tesis</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-yellow-700">Consultoría</h3>
                <ul className="list-disc list-inside text-sm">
                  <li>Concursos docentes y asistenciales</li>
                  <li>Consultoría asistencial</li>
                </ul>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Curso destacado */}
        <SectionWrapper
          id="curso"
          decorations={["blur-circle", "stethoscope"]}
          className="bg-gray-100 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">
              Curso de Capacitación en Enfermería Laboral
            </h2>
            <p className="mb-2"><strong>Director:</strong> Lic. Eduardo Quiroga</p>
            <p className="mb-2"><strong>Duración:</strong> 120 horas</p>
            <p className="mb-4"><strong>Modalidad:</strong> Virtual con seminarios presenciales</p>

            <h3 className="font-semibold mt-6 mb-2">Objetivos</h3>
            <ul className="list-disc list-inside mb-4">
              <li>Comprender el rol de la enfermería laboral.</li>
              <li>Identificar y gestionar riesgos laborales.</li>
              <li>Aplicar registros técnicos y normativas legales.</li>
              <li>Actuar ante emergencias.</li>
            </ul>

            <h3 className="font-semibold mb-2">Contenidos</h3>
            <ul className="list-disc list-inside mb-6">
              <li>Fundamentos de enfermería laboral</li>
              <li>Legislación laboral</li>
              <li>Gestión de riesgos</li>
              <li>Emergencias y primeros auxilios</li>
              <li>Patologías frecuentes</li>
            </ul>

            <div className="text-center mt-8">
              <a
                href="#formulario"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition"
              >
                Inscribirme ahora
              </a>
            </div>
          </div>
        </SectionWrapper>

        {/* Formulario */}
        <SectionWrapper
          id="formulario"
          decorations={["blur-circle", "pill"]}
          className="bg-white text-center">
          <div className="max-w-lg mx-auto bg-gray-50 p-8 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-6 text-center">
              Inscripción al Curso
            </h2>
            <form>
              <input type="hidden" name="curso_id" value="enfermeria-laboral" />
              <div className="mb-4">
                <label className="block mb-1 text-sm font-medium">Nombre completo</label>
                <input
                  type="text"
                  className="w-full border px-4 py-2 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1 text-sm font-medium">Correo electrónico</label>
                <input
                  type="email"
                  className="w-full border px-4 py-2 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1 text-sm font-medium">Teléfono</label>
                <input
                  type="tel"
                  className="w-full border px-4 py-2 rounded-md"
                  required
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg"
                >
                  Inscribirme
                </button>
              </div>
            </form>
          </div>
        </SectionWrapper>
      </main>

      <ScrollToTopButton />

    </>
  );
}
