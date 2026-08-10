"use client";

import {
  Mail,
  MapPin,
  Phone,
  Send,
  MessageCircle,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contacto"
      className="grid lg:grid-cols-2  bg-gray-950 text-white py-16 lg:py-24"
    >
      <div className="grid lg:grid-cols-2 max-w-7xl mx-auto px-6">

        {/* Cabeçalho */}

        <div className="text-center mb-16">

          <span className="text-yellow-500 uppercase tracking-widest font-semibold  text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
            Contacte-nos
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Vamos proteger o que importa
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5 leading-7">
            Precisa de uma solução de segurança eletrónica?
            Entre em contacto com a nossa equipa e solicite um orçamento.
          </p>

        </div>

        {/* Conteúdo */}

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Informações */}

          <div className="space-y-6">

            <div className="bg-black border border-gray-800 rounded-2xl p-6 flex gap-5 hover:border-yellow-500 transition">

              <div className="w-12 h-12 shrink-0 rounded-xl bg-yellow-500 flex items-center justify-center">
                <MapPin className="text-black" />
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  Localização
                </h3>

                <p className="text-gray-400 mt-1">
                  Luanda, Angola
                </p>
              </div>

            </div>

            <div className="bg-black border border-gray-800 rounded-2xl p-6 flex gap-5 hover:border-yellow-500 transition">

              <div className="w-12 h-12 shrink-0 rounded-xl bg-yellow-500 flex items-center justify-center">
                <Phone className="text-black" />
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  Telefone
                </h3>

                <p className="text-gray-400 mt-1">
                  +244 000 000 000
                </p>
              </div>

            </div>

            <div className="bg-black border border-gray-800 rounded-2xl p-6 flex gap-5 hover:border-yellow-500 transition">

              <div className="w-12 h-12 shrink-0 rounded-xl bg-yellow-500 flex items-center justify-center">
                <Mail className="text-black" />
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  Email
                </h3>

                <p className="text-gray-400 mt-1">
                  contacto@filtech.ao
                </p>
              </div>

            </div>

            {/* WhatsApp */}

            <a
              href="#"
              className="flex items-center justify-center gap-3 w-full bg-yellow-500 text-black font-bold py-4 rounded-xl hover:bg-yellow-400 transition"
            >
              <MessageCircle size={22} />

              Falar pelo WhatsApp
            </a>

          </div>

          {/* Formulário */}

          <form className="bg-black border border-gray-800 rounded-3xl p-8">

            <h3 className="text-2xl font-bold">
              Solicitar Orçamento
            </h3>

            <p className="text-gray-400 mt-2 mb-8">
              Preencha os seus dados e entraremos em contacto.
            </p>

            <div className="space-y-5">

              <div>
                <label className="block text-sm mb-2">
                  Nome
                </label>

                <input
                  type="text"
                  placeholder="O seu nome"
                  className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 outline-none focus:border-yellow-500 transition"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">
                  Telefone
                </label>

                <input
                  type="tel"
                  placeholder="+244 ..."
                  className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 outline-none focus:border-yellow-500 transition"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="seuemail@exemplo.com"
                  className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 outline-none focus:border-yellow-500 transition"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">
                  Mensagem
                </label>

                <textarea
                  rows={5}
                  placeholder="Conte-nos como podemos ajudar..."
                  className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 outline-none focus:border-yellow-500 transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-500 text-black font-bold py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-yellow-400 transition"
              >
                Enviar Pedido

                <Send size={20} />
              </button>

            </div>

          </form>

        </div>

      </div>
    </section>
  );
}