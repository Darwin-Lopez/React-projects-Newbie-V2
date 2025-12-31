import imgHeader from "./assets/image-product-mobile.jpg"
import imgDesktop from "./assets/image-product-desktop.jpg"
import imgCard from "./assets/icon-cart.svg"

function App() {

  return (
    <>
      <section>
        <div className="w-full min-h-screen bg-Cream p-5 flex items-center justify-center">
          <div className="bg-White h-full w-full md:w-[700px] shadow-lg rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="grow md:w-[350px]">
                <img src={imgHeader} alt="" className="w-full block md:hidden rounded-t-lg" />
                <img src={imgDesktop} alt="" className="w-full h-full object-cover object-center hidden md:block rounded-l-lg" />
              </div>
              <div className="p-8 grow md:w-[350px] flex items-start justify-center flex-col">
                <div>
                  <span className="uppercase text-gray-500 tracking-[5px] font-Montserrat text-sm">Perfume</span>
                  <h1 className="capitalize font-Fraunces text-3xl md:text-4xl text-balance font-bold my-7">Gabrielle Essence Eau De Parfum</h1>
                  <p className="text-Gray text-sm md:text-base text-gray-500 font-Montserrat">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
                </div>
                <div className="flex items-center mt-7 mb-5 gap-3">
                  <span className="text-3xl font-bold font-Fraunces text-Green-500">$ 149.99</span>
                  <p className="text-xs font-Montserrat text-gray-500 line-through">$ 169.99</p>
                </div>
                <button type="button" className="bg-Green-500 hover:bg-Green-700 transition text-White py-4 w-full rounded-lg flex items-center justify-center gap-2">
                  <img src={imgCard} alt="" />
                  <p className="text-White font-Montserrat font-semibold text-sm">Add to Cart</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
