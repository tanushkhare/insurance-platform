function LifeInsurance() {
  return (
    <div className="min-h-screen bg-slate-100 p-10">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold text-green-700 mb-8">
          Life Insurance
        </h1>

        <div className="bg-white rounded-3xl shadow-lg p-10">

          <p className="text-xl text-gray-700 mb-8">
            Agent for LIC of India helping individuals and families secure
            their future through protection, wealth creation, child education
            planning, and retirement solutions.
          </p>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Term Insurance */}

            <div className="bg-green-50 p-8 rounded-2xl border border-green-200">

              <h2 className="text-2xl font-bold text-green-700 mb-4">
                Term Insurance
              </h2>

              <p className="text-gray-700">
                Pure form of insurance providing very high life coverage
                at affordable premiums for family protection, debt coverage,
                and asset security.
              </p>

            </div>

            {/* Wealth Creation */}

            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-200">

              <h2 className="text-2xl font-bold text-blue-700 mb-4">
                Wealth Creation
              </h2>

              <p className="text-gray-700">
                Long-term wealth creation solutions with tax-efficient
                investment opportunities for future financial goals.
              </p>

            </div>

            {/* Child Education Planning */}

            <div className="bg-yellow-50 p-8 rounded-2xl border border-yellow-200">

              <h2 className="text-2xl font-bold text-yellow-700 mb-4">
                Child Education Planning
              </h2>

              <p className="text-gray-700">
                Build a lump sum fund to support your child’s higher
                education, career aspirations, or marriage expenses.
              </p>

            </div>

            {/* Retirement Planning */}

            <div className="bg-purple-50 p-8 rounded-2xl border border-purple-200">

              <h2 className="text-2xl font-bold text-purple-700 mb-4">
                Retirement & Pension Plans
              </h2>

              <p className="text-gray-700">
                Assured retirement income solutions designed to provide
                lifelong financial security and peace of mind.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default LifeInsurance;