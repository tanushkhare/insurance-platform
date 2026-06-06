import { useState } from "react";

function SIPCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState("5000");
  const [annualReturn, setAnnualReturn] = useState("12");
  const [years, setYears] = useState("10");

  const calculateSIP = () => {
    const P = Number(monthlyInvestment) || 0;
    const r = (Number(annualReturn) || 0) / 12 / 100;
    const n = (Number(years) || 0) * 12;

    if (P === 0 || r === 0 || n === 0) return 0;

    const futureValue =
      P * (((Math.pow(1 + r, n) - 1) / r) * (1 + r));

    return futureValue;
  };

  const totalInvestment =
    (Number(monthlyInvestment) || 0) *
    (Number(years) || 0) *
    12;

  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-xl p-10">

          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-blue-900">
              SIP Calculator
            </h2>

            <p className="mt-4 text-gray-600 text-xl">
              Calculate your future wealth through systematic
              investment planning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">

            {/* Inputs */}
            <div className="space-y-8">

              {/* Monthly Investment */}
              <div>
                <label className="block mb-3 text-xl font-semibold text-gray-700">
                  Monthly Investment (₹)
                </label>

                <input
                  type="text"
                    value={monthlyInvestment}
                     onChange={(e) =>
                      setMonthlyInvestment(e.target.value)
                        }
                         className="w-full border border-blue-300 rounded-xl px-5 py-4 text-3xl font-bold text-red-600 bg-white"
                           />
              </div>

              {/* Annual Return */}
              <div>
                <label className="block mb-3 text-xl font-semibold text-gray-700">
                  Expected Annual Return (%)
                </label>

                <input
                  type="number"
                  min="0"
                  max="100"
                  placeholder="Enter Expected Return"
                  value={annualReturn}
                  onChange={(e) =>
                    setAnnualReturn(e.target.value)
                  }
                  className="w-full border border-gray-300 rounded-xl px-5 py-4 text-lg text-black bg-white focus:outline-none focus:ring-2 focus:ring-blue-700"
                />
              </div>

              {/* Years */}
              <div>
                <label className="block mb-3 text-xl font-semibold text-gray-700">
                  Investment Duration (Years)
                </label>

                <input
                  type="number"
                  min="1"
                  placeholder="Enter Duration"
                  value={years}
                  onChange={(e) =>
                    setYears(e.target.value)
                  }
                  className="w-full border border-gray-300 rounded-xl px-5 py-4 text-lg text-black bg-white focus:outline-none focus:ring-2 focus:ring-blue-700"
                />
              </div>

            </div>

            {/* Result Card */}
            <div className="bg-blue-900 rounded-3xl p-10 text-white flex flex-col justify-center">
              <h3 className="text-4xl font-bold mb-10">
                Estimated Returns
              </h3>

              <div className="space-y-10">

                <div>
                  <p className="text-gray-300 text-xl">
                    Total Investment
                  </p>

                  <h2 className="text-4xl font-bold mt-2">
                    ₹{totalInvestment.toLocaleString("en-IN")}
                  </h2>
                </div>

                <div>
                  <p className="text-gray-300 text-xl">
                    Estimated Wealth
                  </p>

                  <h2 className="text-5xl font-bold text-yellow-400 mt-2">
                    ₹
                    {Math.round(
                      calculateSIP()
                    ).toLocaleString("en-IN")}
                  </h2>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default SIPCalculator;