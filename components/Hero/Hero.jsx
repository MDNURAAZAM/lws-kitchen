import React from "react";

const Hero = () => {
  return (
    <section className="mb-16 bg-orange-50">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <img
            src="./assets/tir.jpg"
            alt="Mighty Super Cheesecake"
            className="w-full h-[450px] object-cover rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">Decadent Tiramisu Delight</h1>
          <p className="text-gray-600 mb-4">
            Indulge in the ultimate Italian dessert experience with our velvety
            smooth tiramisu. Layers of coffee-soaked ladyfingers and creamy
            mascarpone filling create a heavenly treat thats sure to impress.
          </p>
          <a
            href="./blog-details.html"
            className="bg-orange-500 text-white px-6 py-2 rounded-full inline-block hover:bg-orange-600"
          >
            View Recipe
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
