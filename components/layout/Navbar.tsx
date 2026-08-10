"use client";

import Link from "next/link";

const links = [
  { name: "Início", href: "#" },
  { name: "Sobre", href: "#sobre" },
  { name: "Serviços", href: "#servicos" },
  { name: "Produtos", href: "#produtos" },
  { name: "Galeria", href: "#galeria" },
  { name: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md border-b border-[#B5923E] z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-extrabold text-[#B5923E]">
          FILTECH
        </h1>
        

        <ul className="hidden lg:flex items-center gap-8 text-white">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="hover:text-[#2A1B00] transition"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <button className="bg-[#B5923E] text-black px-5 py-2 rounded-full font-semibold hover:bg-[#2A1B00] transition">
          Solicitar Orçamento
        </button>
      </nav>
    </header>
  );
}