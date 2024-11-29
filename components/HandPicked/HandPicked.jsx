import React from "react";

const HandPicked = () => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 animate-fade-in-down">
        Hand-Picked Collections
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative group overflow-hidden rounded-lg transition-transform duration-300 ease-in-out transform cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1607247098731-5bf6416d2e8c?q=100&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Sushi Combos"
            className="w-full h-[400px] rounded-lg object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg transition-all duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0">
            <h3 className="text-xl font-semibold mb-2">
              Sushi Combos for your Next Party
            </h3>
            <a
              href="./recipes.html"
              className="text-orange-300 hover:underline"
            >
              View Collection
            </a>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg transition-transform duration-300 ease-in-out transform cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1649402206323-9bca1d77d10e?q=100&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Everything Bagel"
            className="w-full h-[400px] rounded-lg object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg transition-all duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0">
            <h3 className="text-xl font-semibold mb-2">Everything Bagel</h3>
            <a
              href="./recipes.html"
              className="text-orange-300 hover:underline"
            >
              View Collection
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HandPicked;
