import {
  FaShieldAlt,
  FaUsers,
  FaChartLine,
  FaHeadset,
} from "react-icons/fa";

function WhyChooseUs() {
  const features = [
    {
      icon: <FaShieldAlt />,
      title: "Trusted Protection",
      description:
        "Comprehensive insurance solutions tailored for every stage of life.",
    },

    {
      icon: <FaUsers />,
      title: "10,000+ Happy Clients",
      description:
        "Helping families and businesses secure their financial future.",
    },

    {
      icon: <FaChartLine />,
      title: "Financial Growth",
      description:
        "Smart SIP and mutual fund planning for long-term wealth creation.",
    },

    {
      icon: <FaHeadset />,
      title: "24/7 Support",
      description:
        "Dedicated advisors ready to assist with claims and planning.",
    },
  ];

  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold text-blue-900">
            Why Choose Us
          </h2>

          <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto">
            Trusted insurance and financial planning services designed
            to secure your future and protect what matters most.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300"
            >

              <div className="text-5xl text-blue-900 mb-6">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;