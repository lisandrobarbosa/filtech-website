import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Câmara Hikvision",
    price: "35.000 Kz",
    image: "/products/camera.jpg",
  },
  {
    id: 2,
    name: "Fechadura Inteligente",
    price: "120.000 Kz",
    image: "/products/lock.jpg",
  },
  {
    id: 3,
    name: "Vídeo Porteiro",
    price: "95.000 Kz",
    image: "/products/video-door.jpeg",
  },
  {
    id: 4,
    name: "Cancela Automática",
    price: "450.000 Kz",
    image: "/products/gate.jpg",
  },
];

export default function Products() {
  return (
    <section
      id="produtos"
      className="bg-gray-950 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="text-[#B5923E] uppercase tracking-widest">
            Produtos
          </span>

          <h2 className="text-4xl font-bold mt-4">
            Produtos em Destaque
          </h2>

          <p className="text-gray-400 mt-5">
            Equipamentos modernos para garantir a segurança do seu património.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {products.map((product) => (

            <div
              key={product.id}
              className="bg-black rounded-2xl overflow-hidden border border-gray-800 hover:border-[#2A1B00] transition duration-300"
            >

              <div className="relative w-full ">

                <div className="h-60 bg-gray-800 flex items-center justify-center rounded-t-2xl">
                  
                  <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                    <span className="text-gray-400 text-lg">
                    Imagem do Produto
                    </span>
                  </div>

                </div>

              </div>

              <div className="p-6">

                <h3 className="text-xl font-bold">
                  {product.name}
                </h3>

                <p className="text-[#B5923E] text-2xl font-bold mt-3">
                  {product.price}
                </p>

                <button className="mt-6 w-full bg-[#B5923E] text-black py-3 rounded-xl font-semibold hover:bg-[#2A1B00] transition">
                  Ver Produto
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}