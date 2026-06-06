function StatsSection() {
  const stats = [
    {
      number: "15+",
      title: "Years Experience",
    },

    {
      number: "10K+",
      title: "Happy Clients",
    },

    {
      number: "500+",
      title: "Claims Processed",
    },

    {
      number: "98%",
      title: "Claim Settlement Ratio",
    },
  ];

  return (
    <section className="py-24 bg-blue-950 text-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">

          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-blue-900 rounded-2xl p-10 shadow-lg hover:-translate-y-2 transition duration-300"
            >

              <h2 className="text-5xl font-bold text-yellow-400 mb-4">
                {stat.number}
              </h2>

              <p className="text-lg text-gray-200">
                {stat.title}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default StatsSection;