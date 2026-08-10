"use client";

import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUp,
} from "lucide-react";

const quickLinks = [
  { name: "Início", href: "#" },
  { name: "Sobre Nós", href: "#sobre" },
  { name: "Serviços", href: "#servicos" },
  { name: "Produtos", href: "#produtos" },
  { name: "Galeria", href: "#galeria" },
  { name: "Contacto", href: "#contacto" },
];

const services = [
  "Câmaras de Vigilância",
  "Cerca Elétrica",
  "Fechaduras Eletrónicas",
  "Cancelas Automáticas",
  "Vídeo Porteiros",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t border-yellow-500/20">

      {/* Conteúdo principal */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Empresa */}
          <div>
            <Link
              href="#"
              className="text-3xl font-bold text-yellow-500"
            >
              FILTECH
            </Link>

            <p className="text-gray-400 mt-5 leading-7">
              Soluções modernas de segurança eletrónica para
              residências, empresas e patrimónios.
            </p>

            {/* Redes sociais */}
            <div className="flex gap-3 mt-7">

              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-sm font-bold hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition"
              >
                FB
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-sm font-bold hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition"
              >
                IG
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-sm font-bold hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition"
              >
                IN
              </a>

            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-6">
              Links Rápidos
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-yellow-500 transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-lg font-semibold mb-6">
              Serviços
            </h3>

            <ul className="space-y-4">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-gray-400"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contactos */}
          <div>
            <h3 className="text-lg font-semibold mb-6">
              Contactos
            </h3>

            <div className="space-y-5">

              <div className="flex gap-3">
                <MapPin
                  size={20}
                  className="text-yellow-500 shrink-0"
                />

                <span className="text-gray-400">
                  Luanda, Angola
                </span>
              </div>

              <div className="flex gap-3">
                <Phone
                  size={20}
                  className="text-yellow-500 shrink-0"
                />

                <span className="text-gray-400">
                  +244 000 000 000
                </span>
              </div>

              <div className="flex gap-3">
                <Mail
                  size={20}
                  className="text-yellow-500 shrink-0"
                />

                <span className="text-gray-400">
                  contacto@filtech.ao
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Rodapé inferior */}
      <div className="border-t border-gray-800">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-500 text-sm text-center">
            © {year} FILTECH. Todos os direitos reservados.
          </p>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            aria-label="Voltar ao topo"
            className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition"
          >
            <ArrowUp size={18} />
          </button>

        </div>

      </div>

    </footer>
  );
}