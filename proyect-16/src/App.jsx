import bgImg from "./assets/image-omelette.jpeg"

function App() {

  return (
    <>
      <section>
        <div className="w-full min-h-screen bg-Stone-100 flex items-center justify-center md:py-16">
          <div className="w-full h-full bg-White md:w-[500px] lg:w-[700px] rounded-xl overflow-hidden shadow-lg shadow-Stone-150">
            <div className="w-full text-center md:px-8 md:pt-8">
              <img decoding="async" src={bgImg} alt="" className="w-full h-full object-cover object-center md:rounded-xl" loading="eager" />
            </div>
            <div className="p-8">
              <h1 className="font-Young text-3xl mb-3">Simple Omelette Recipe</h1>
              <p className="text-base text-Stone-600 font-outfit mb-10" >An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
              <div className="ms-5 my-10">
                <h2 className="text-Rose-800 text-xl font-semibold font-outfit mb-3">Preparation time</h2>
                <ul>
                  <li className="list-disc ms-5 mb-3 marker:text-rose-800 font-outfit font-light text-Stone-700" ><span className="ps-5 font-semibold">Total:</span> Approximately 10 minutes</li>
                  <li className="list-disc ms-5 mb-3 marker:text-rose-800 font-outfit font-light text-Stone-700" ><span className="ps-5 font-semibold">Preparation:</span> 5 minutes</li>
                  <li className="list-disc ms-5 mb-3 marker:text-rose-800 font-outfit font-light text-Stone-700" ><span className="ps-5 font-semibold">Cooking:</span> 5 minutes</li>
                </ul>
              </div>
              <div className="w-full mb-10">
                <h3 className="text-Brown-800 text-2xl font-Young mb-3">Ingredients</h3>
                <ul>
                  <li className="list-disc ms-5 mb-3 marker:text-Brown-800 font-outfit font-light font-sm text-Stone-700 ps-5" >2-3 large eggs</li>
                  <li className="list-disc ms-5 mb-3 marker:text-Brown-800 font-outfit font-light font-sm text-Stone-700 ps-5" >Salt, to taste</li>
                  <li className="list-disc ms-5 mb-3 marker:text-Brown-800 font-outfit font-light font-sm text-Stone-700 ps-5" >Pepper, to taste</li>
                  <li className="list-disc ms-5 mb-3 marker:text-Brown-800 font-outfit font-light font-sm text-Stone-700 ps-5" >1 tablespoon of butther or oil</li>
                  <li className="list-disc ms-5 mb-3 marker:text-Brown-800 font-outfit font-light font-sm text-Stone-700 ps-5" >Optional filings: cheese, diced vegetables, cooked meats, herbs</li>
                </ul>
              </div>
              <div>
                <h3 className="text-Brown-800 text-2xl font-Young mb-3">Instructions</h3>
                <ol className="list-decimal border-b border-gray-200 py-5">
                  <li className="list-decimal ms-5 marker:text-Brown-800 marker:font-semibold mb-3 font-outfit font-light text-Stone-700 ps-5"><span className="text-Stone-800 font-semibold">Beat the eggs:</span> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed.
                    You can add a tablespoon of water or milk for a fluffier texture.</li>

                  <li className="list-decimal ms-5 marker:text-Brown-800 marker:font-semibold mb-3 font-outfit font-light text-Stone-700 ps-5"><span className="text-Stone-800 font-semibold">Heat the pan:</span> Place a non-stick frying pan over medium heat and add butter or oil.</li>

                  <li className="list-decimal ms-5 marker:text-Brown-800 marker:font-semibold mb-3 font-outfit font-light text-Stone-700 ps-5"><span className="text-Stone-800 font-semibold">Cook the omelette:</span> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure
                    the eggs evenly coat the surface.</li>

                  <li className="list-decimal ms-5 marker:text-Brown-800 marker:font-semibold mb-3 font-outfit font-light text-Stone-700 ps-5"><span className="text-Stone-800 font-semibold">Add fillings (optional):</span> When the eggs begin to set at the edges but are still slightly runny in the
                    middle, sprinkle your chosen fillings over one half of the omelette.</li>

                  <li className="list-decimal ms-5 marker:text-Brown-800 marker:font-semibold mb-3 font-outfit font-light text-Stone-700 ps-5"><span className="text-Stone-800 font-semibold">Fold and serve:</span> As the omelette continues to cook, carefully lift one edge and fold it over the
                    fillings. Let it cook for another minute, then slide it onto a plate.</li>

                  <li className="list-decimal ms-5 marker:text-Brown-800 marker:font-semibold mb-3 font-outfit font-light text-Stone-700 ps-5"><span className="text-Stone-800 font-semibold">Enjoy:</span> Serve hot, with additional salt and pepper if needed.</li>
                </ol>
              </div>
              <div>
                <h3 className="text-Brown-800 text-2xl font-Young mb-3">Nutrition</h3>
                <p className="font-outfit font-light text-Stone-600">The table below shows nutritional values per serving without the additional fillings.</p>
                <table className="w-full my-5">
                  <thead>
                    <tr className="w-full border-b border-gray-200">
                      <th className="py-3 px-5 text-Stone-600 font-outfit font-normal text-start">Calories</th>
                      <th className="text-start text-Brown-800 font-outfit font-semibold">277kcal</th>
                    </tr>
                    <tr className="w-full border-b border-gray-200">
                      <th className="py-3 px-5 text-Stone-600 font-outfit font-normal text-start">Carbs</th>
                      <th className="text-start text-Brown-800 font-outfit font-semibold">0g</th>
                    </tr>
                    <tr className="w-full border-b border-gray-200">
                      <th className="py-3 px-5 text-Stone-600 font-outfit font-normal text-start">Protein</th>
                      <th className="text-start text-Brown-800 font-outfit font-semibold">20g</th>
                    </tr>
                    <tr className="w-full border-b border-gray-200">
                      <th className="py-3 px-5 text-Stone-600 font-outfit font-normal text-start">Fat</th>
                      <th className="text-start text-Brown-800 font-outfit font-semibold">22g</th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
