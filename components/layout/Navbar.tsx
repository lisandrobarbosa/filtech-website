"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Início", href: "#" },
  { name: "Sobre", href: "#sobre" },
  { name: "Serviços", href: "#servicos" },
  { name: "Produtos", href: "#produtos" },
  { name: "Galeria", href: "#galeria" },
  { name: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md border-b border-yellow-600/30 z-50">

      <nav className="max-w-7xl mx-auto px-6 py-4">

        <div className="flex items-center justify-between">

          {/* Logo */}

          <Link
            href="#"
            className="text-2xl font-bold text-yellow-500"
            onClick={() => setIsOpen(false)}
          >
            FILTECH
          </Link>

          {/* Menu Desktop */}

          <div className="hidden md:flex items-center gap-8">

            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white hover:text-yellow-500 transition"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="#contacto"
              className="bg-yellow-500 text-black px-5 py-2 rounded-full font-semibold hover:bg-yellow-400 transition"
            >
              Solicitar Orçamento
            </Link>

          </div>

          {/* Botão Mobile */}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
            aria-label={
              isOpen ? "Fechar menu" : "Abrir menu"
            }
          >
            {isOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>

        </div>

        {/* Menu Mobile */}

        {isOpen && (
          <div className="md:hidden pt-6 pb-4">

            <div className="flex flex-col gap-5">

              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-yellow-500 transition"
                >
                  {link.name}
                </Link>
              ))}

              <Link
                href="#contacto"
                onClick={() => setIsOpen(false)}
                className="text-center bg-yellow-500 text-black px-5 py-3 rounded-xl font-semibold hover:bg-yellow-400 transition"
              >
                Solicitar Orçamento
              </Link>

            </div>

          </div>
        )}

      </nav>

    </header>
  );
}