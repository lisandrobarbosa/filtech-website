import { CheckCircle } from "lucide-react";

const features = [
  "Equipa técnica qualificada",
  "Equipamentos de alta qualidade",
  "Instalação profissional",
  "Assistência técnica especializada",
];

export default function About() {
  return (
    <section
      id="sobre"
      className="bg-black text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Texto */}

        <div>

          <span className="text-yellow-500 uppercase tracking-widest">
            Sobre Nós
          </span>

          <h2 className="text-4xl font-bold mt-4">
            Porque escolher a FILTECH?
          </h2>

          <p className="text-gray-400 mt-6 leading-8">
            A FILTECH é especializada em soluções de segurança eletrónica,
            oferecendo tecnologia moderna para proteger residências,
            empresas e patrimónios.
          </p>

          <div className="mt-10 space-y-5">

            {features.map((item) => (

              <div
                key={item}
                className="flex items-center gap-4"
              >
                <CheckCircle className="text-yellow-500" />

                <span>{item}</span>

              </div>

            ))}

          </div>

        </div>

        {/* Imagem */}

        <div className="flex justify-center">

          <img
            src="../images/about.jpg"
            alt="FILTECH"
            className="shadow-2xl h-[500] w-full max-w-xl rounded-3xl"
          />

        </div>

      </div>
    </section>
  );
}