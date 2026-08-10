export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white flex items-center pt-40">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* Texto */}
        <div>
          
          <span className="text-[#B5923E] uppercase tracking-widest font-semibold">
            Segurança Eletrónica
          </span>

          <h1 className="text-5xl lg:text-7xl font-extrabold mt-4 leading-tight">
            Protegemos o que é
            <span className="text-[#B5923E]"> mais importante </span>
            para si.
          </h1>

          <p className="text-gray-300 mt-8 text-lg leading-8">
            A FILTECH oferece soluções modernas em câmaras de vigilância,
            cercas elétricas, fechaduras inteligentes, vídeo porteiros e
            sistemas de controlo de acesso para residências e empresas.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <button className="bg-[#B5923E] text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition">
              Solicitar Orçamento
            </button>

            <button className="border border-[#B5923E] px-8 py-4 rounded-xl hover:bg-[#2A1B00] hover:text-black transition">
              Ver Serviços
            </button>
          </div>
        </div>

        {/* Imagem */}
        <div className="flex justify-center">
          <img
            src="../images/hero.jpg"
            alt="Segurança Eletrónica"
            className="w-full max-w-xl rounded-3xl"
          />
        </div>

      </div>
    </section>
  );
}