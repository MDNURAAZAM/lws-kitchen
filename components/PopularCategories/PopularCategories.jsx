import React from "react";

const PopularCategories = () => {
  return (
    <section className="mb-16">
      <div className="flex justify-between items-top">
        <h2 className="text-3xl font-bold mb-8">Popular Categories</h2>
        <a href="./category.html" className="text-orange-500">
          View All
        </a>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        <div className="cursor-pointer text-center group">
          <div className="overflow-hidden rounded-full mb-2 w-20 h-20 mx-auto">
            <img
              src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=100&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Breakfast"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <p className="transition-transform duration-300 group-hover:scale-105">
            Breakfast
          </p>
        </div>
        <div className="cursor-pointer text-center group">
          <div className="overflow-hidden rounded-full mb-2 w-20 h-20 mx-auto">
            <img
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=100&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Vegan"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <p className="transition-transform duration-300 group-hover:scale-105">
            Vegan
          </p>
        </div>
        <div className="cursor-pointer text-center group">
          <div className="overflow-hidden rounded-full mb-2 w-20 h-20 mx-auto">
            <img
              src="https://images.unsplash.com/photo-1448907503123-67254d59ca4f?q=100&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Meat"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <p className="transition-transform duration-300 group-hover:scale-105">
            Meat
          </p>
        </div>
        <div className="cursor-pointer text-center group">
          <div className="overflow-hidden rounded-full mb-2 w-20 h-20 mx-auto">
            <img
              src="https://images.unsplash.com/photo-1469533778471-92a68acc3633?q=100&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Dessert"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <p className="transition-transform duration-300 group-hover:scale-105">
            Dessert
          </p>
        </div>
        <div className="cursor-pointer text-center group">
          <div className="overflow-hidden rounded-full mb-2 w-20 h-20 mx-auto">
            <img
              src="https://images.unsplash.com/photo-1663861623497-2151b2bb21fe?q=100&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Lunch"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <p className="transition-transform duration-300 group-hover:scale-105">
            Lunch
          </p>
        </div>
        <div className="cursor-pointer text-center group">
          <div className="overflow-hidden rounded-full mb-2 w-20 h-20 mx-auto">
            <img
              src="https://images.unsplash.com/photo-1582570675095-9b679953577e?q=100&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Chocolate"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <p className="transition-transform duration-300 group-hover:scale-105">
            Chocolate
          </p>
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;
