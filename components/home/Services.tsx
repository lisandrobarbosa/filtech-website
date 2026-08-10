import {
  Camera,
  Shield,
  Lock,
  DoorOpen,
  Monitor,
  Wrench,
} from "lucide-react";

const services = [
  {
    title: "Câmaras de Vigilância",
    description:
      "Instalação de sistemas CCTV modernos para residências e empresas.",
    icon: Camera,
  },
  {
    title: "Cerca Elétrica",
    description:
      "Proteção perimetral eficiente para aumentar a segurança do imóvel.",
    icon: Shield,
  },
  {
    title: "Fechaduras Inteligentes",
    description:
      "Controle de acesso moderno com biometria, senha e cartão.",
    icon: Lock,
  },
  {
    title: "Cancelas Automáticas",
    description:
      "Automatização de entradas para condomínios e empresas.",
    icon: DoorOpen,
  },
  {
    title: "Vídeo Porteiros",
    description:
      "Comunicação segura entre visitantes e moradores.",
    icon: Monitor,
  },
  {
    title: "Assistência Técnica",
    description:
      "Manutenção preventiva e corretiva de sistemas de segurança.",
    icon: Wrench,
  },
];

export default function Services() {
  return (
    <section
      id="servicos"
      className="bg-gray-950 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-[#B5923E] uppercase tracking-widest">
            Serviços
          </span>

          <h2 className="text-4xl font-bold mt-4">
            Os Nossos Serviços
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Trabalhamos com soluções completas de segurança eletrónica,
            oferecendo tecnologia de ponta para proteger residências,
            empresas e patrimónios.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service) => {

            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="bg-black rounded-2xl p-8 border border-gray-800 hover:border-[#2A1B00] hover:-translate-y-2 transition duration-300"
              >

                <div className="w-16 h-16 rounded-full bg-[#B5923E] flex items-center justify-center mb-6">

                  <Icon size={32} className="text-black" />

                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-7">
                  {service.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}