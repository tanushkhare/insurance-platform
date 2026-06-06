function InsuranceCard({ title, description, icon }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 transition duration-300">

      <div className="text-5xl mb-6">
        {icon}
      </div>

      <h3 className="text-2xl font-bold text-blue-900 mb-4">
        {title}
      </h3>

      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>

      <button className="mt-6 text-blue-900 font-semibold hover:text-yellow-500 transition">
        Learn More →
      </button>

    </div>
  );
}

export default InsuranceCard;