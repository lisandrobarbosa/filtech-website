import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Sistema de Vigilância",
    category: "Câmaras de Segurança",
    image: "/filtech-website/gallery/camera.jpg",
  },
  {
    id: 2,
    title: "Proteção Perimetral",
    category: "Cerca Elétrica",
    image: "/filtech-website/gallery/cerca.jpg",
  },
  {
    id: 3,
    title: "Controlo de Acesso",
    category: "Fechaduras Eletrónicas",
    image: "/filtech-website/gallery/fechadura.jpg",
  },
  {
    id: 4,
    title: "Entrada Automática",
    category: "Cancelas",
    image: "/filtech-website/gallery/cancela.jpg",
  },
  {
    id: 5,
    title: "Vídeo Porteiro",
    category: "Intercomunicação",
    image: "/filtech-website/gallery/video-porteiro.jpg",
  },
  {
    id: 6,
    title: "Segurança Eletrónica",
    category: "Instalação",
    image: "/filtech-website/gallery/instalacao.jpg",
  },
];

export default function Gallery() {
  return (
    <section
      id="galeria"
      className="bg-black text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Título */}
        <div className="text-center mb-16">

          <span className="text-yellow-500 uppercase tracking-widest font-semibold">
            Portfólio
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Projetos Realizados
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5 leading-7">
            Conheça alguns dos projetos e soluções de segurança
            eletrónica realizados pela FILTECH.
          </p>

        </div>

        {/* Galeria */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {projects.map((project) => (

            <div
              key={project.id}
              className="group relative h-80 overflow-hidden rounded-2xl border border-gray-800"
            >

              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition duration-500" />

              {/* Informações */}
              <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">

                <p className="text-yellow-500 text-sm font-semibold uppercase">
                  {project.category}
                </p>

                <h3 className="text-2xl font-bold mt-2">
                  {project.title}
                </h3>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}