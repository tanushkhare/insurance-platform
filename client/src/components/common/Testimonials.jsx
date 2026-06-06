function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Business Owner",
      message:
        "InsurancePro helped me secure my family and business with excellent financial planning services.",
    },

    {
      name: "Priya Mehta",
      role: "Software Engineer",
      message:
        "Their SIP and mutual fund guidance has been extremely helpful for my long-term goals.",
    },

    {
      name: "Amit Verma",
      role: "Entrepreneur",
      message:
        "The claim process was smooth and the support team was available whenever needed.",
    },
  ];

  return (
    <section className="py-24 bg-gray-100">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold text-blue-900">
            What Our Clients Say
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            Trusted by thousands of happy customers across India.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition duration-300"
            >

              <p className="text-gray-600 leading-relaxed mb-6">
                "{testimonial.message}"
              </p>

              <h3 className="text-2xl font-bold text-blue-900">
                {testimonial.name}
              </h3>

              <p className="text-gray-500 mt-2">
                {testimonial.role}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;