import { Link } from "react-router-dom";

function ExplorePlans() {
  return (
    <div className="min-h-screen bg-slate-100 p-10">

      {/* Heading */}

      <h1 className="text-5xl font-bold text-blue-900 mb-12">
        OUR RANGE OF PRODUCTS
      </h1>

      {/* ==========================================
          GENERAL INSURANCE
      ========================================== */}

      <div className="bg-white rounded-3xl shadow-lg p-10 mb-10">

        <h2 className="text-4xl font-bold text-blue-800 mb-4">
          General Insurance
        </h2>

        <p className="text-xl text-gray-600 mb-8">
          Health, Home, Fire, Personal Accident and Liability Insurance solutions.
        </p>

        <Link
          to="/plans/general"
          className="block border-2 border-dashed border-blue-300 rounded-2xl p-10 text-center hover:bg-blue-50 transition duration-300"
        >
          <h3 className="text-2xl font-semibold text-blue-700">
            View General Insurance Products →
          </h3>

          <p className="text-gray-500 mt-2">
            Click here to explore all General Insurance products.
          </p>
        </Link>

      </div>

      {/* ==========================================
          LIFE INSURANCE
      ========================================== */}

      <div className="bg-white rounded-3xl shadow-lg p-10 mb-10">

        <h2 className="text-4xl font-bold text-green-700 mb-4">
          Life Insurance
        </h2>

        <p className="text-xl text-gray-600 mb-8">
          Financial protection and wealth creation plans for individuals and families.
        </p>

        <Link
          to="/plans/life"
          className="block border-2 border-dashed border-green-300 rounded-2xl p-10 text-center hover:bg-green-50 transition duration-300"
        >
          <h3 className="text-2xl font-semibold text-green-700">
            View Life Insurance Products →
          </h3>

          <p className="text-gray-500 mt-2">
            Click here to explore all Life Insurance products.
          </p>
        </Link>

      </div>

      {/* ==========================================
          MUTUAL FUNDS
      ========================================== */}

      <div className="bg-white rounded-3xl shadow-lg p-10">

        <h2 className="text-4xl font-bold text-purple-700 mb-4">
          Mutual Funds
        </h2>

        <p className="text-xl text-gray-600 mb-8">
          Investment solutions designed for long-term wealth creation and financial growth.
        </p>

        <Link
          to="/plans/mutual-funds"
          className="block border-2 border-dashed border-purple-300 rounded-2xl p-10 text-center hover:bg-purple-50 transition duration-300"
        >
          <h3 className="text-2xl font-semibold text-purple-700">
            View Mutual Fund Products →
          </h3>

          <p className="text-gray-500 mt-2">
            Click here to explore all Mutual Fund investment options.
          </p>
        </Link>

      </div>

    </div>
  );
}

export default ExplorePlans;