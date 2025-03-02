'use client';


const Testimonials = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-100">
      {/* Background Shapes */}
      <div className="absolute inset-0 flex justify-center items-center -z-10">
        <div className="absolute w-4 h-4 bg-gray-300 rounded-md top-10 left-10"></div>
        <div className="absolute w-6 h-6 bg-gray-300 rounded-md top-20 right-20"></div>
        <div className="absolute w-8 h-8 bg-gray-300 rounded-md bottom-16 left-1/4"></div>
        <div className="absolute w-5 h-5 bg-gray-300 rounded-md top-1/3 right-1/3"></div>
      </div>

      {/* Testimonial Card */}
      <div className="relative bg-white p-6 rounded-2xl shadow-lg max-w-2xl flex items-center">
        {/* Image Placeholder */}
        <div className="w-24 h-24 bg-gray-400 rounded-xl flex-shrink-0"></div>

        {/* Content */}
        <div className="ml-6">
          <h3 className="text-lg font-semibold">Jen Deo</h3>
          <p className="text-sm text-gray-500">(Client, Lead)</p>
          <p className="mt-2 text-gray-700 text-sm">
            “Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            inventore et aliquid possimus perspiciatis expedita voluptate hic
            amet, dicta est quaerat nisi eos numquam.”
          </p>
        </div>
      </div>

      {/* Vertical Rotated Text */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 text-gray-400 text-lg font-semibold">
        Testimonials
      </div>
    </div>
  );
};

export default Testimonials;
