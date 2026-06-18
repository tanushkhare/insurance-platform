import { Link } from "react-router-dom";
import SIPCalculator from "../components/calculators/SIPCalculator";

function Home() {
  return (
    <div className="min-h-screen bg-blue-900 text-white">

      {/* ==========================================
          HERO SECTION
      ========================================== */}

      <section className="px-6 py-24 text-center">

        <h1 className="text-6xl md:text-8xl font-extrabold leading-tight max-w-6xl mx-auto">
          Secure Your Future With
          <br />
          Trusted Insurance
        </h1>

        <p className="text-2xl md:text-3xl text-gray-200 mt-8">
          29+ Years of Insurance & Financial Advisory Excellence
        </p>

        <p className="text-xl text-gray-300 mt-4 max-w-4xl mx-auto">
          Helping families and businesses protect what matters most through
          Life Insurance, General Insurance and Mutual Fund investments.
        </p>

      </section>

      {/* ==========================================
          OUR RANGE OF PRODUCTS
      ========================================== */}

      <section className="px-6 pb-24">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <h2 className="text-5xl font-bold text-white mb-4">
              OUR RANGE OF PRODUCTS
            </h2>

            <div className="w-32 h-1 bg-yellow-400 mx-auto rounded-full"></div>

            <p className="text-xl text-gray-200 mt-6">
              Comprehensive Insurance & Investment Solutions
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Life Insurance */}

            <Link
              to="/plans"
              className="bg-white text-blue-900 rounded-3xl p-10 shadow-2xl border border-gray-200 hover:-translate-y-2 hover:shadow-3xl transition duration-300"
            >
              <div className="text-center">

                <div className="text-6xl mb-6">❤️</div>

                <h3 className="text-4xl font-bold mb-6">
                  Life Insurance
                </h3>

                <p className="text-xl leading-relaxed">
                  Secure your family's future with comprehensive life
                  insurance protection and financial security.
                </p>

              </div>
            </Link>

            {/* General Insurance */}

            <Link
              to="/plans"
              className="bg-white text-blue-900 rounded-3xl p-10 shadow-2xl border border-gray-200 hover:-translate-y-2 hover:shadow-3xl transition duration-300"
            >
              <div className="text-center">

                <div className="text-6xl mb-6">🛡️</div>

                <h3 className="text-4xl font-bold mb-6">
                  General Insurance
                </h3>

                <p className="text-xl leading-relaxed">
                  Protect your health, home, business and assets with
                  trusted insurance coverage.
                </p>

              </div>
            </Link>

            {/* Mutual Funds */}

            <Link
              to="/plans"
              className="bg-white text-blue-900 rounded-3xl p-10 shadow-2xl border border-gray-200 hover:-translate-y-2 hover:shadow-3xl transition duration-300"
            >
              <div className="text-center">

                <div className="text-6xl mb-6">📈</div>

                <h3 className="text-4xl font-bold mb-6">
                  Mutual Funds
                </h3>

                <p className="text-xl leading-relaxed">
                  Build long-term wealth through professionally managed
                  mutual fund investment solutions.
                </p>

              </div>
            </Link>

          </div>

        </div>

      </section>

      {/* ==========================================
          STATS SECTION
      ========================================== */}

      <section className="bg-white py-24 text-gray-900">

        <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-12 text-center">

            <div>

              <h2 className="text-6xl font-bold text-blue-700">
                29+
              </h2>

              <p className="text-xl text-gray-600 mt-4">
                Years of Experience
              </p>

            </div>

            <div>

              <h2 className="text-6xl font-bold text-green-600">
                1800+
              </h2>

              <p className="text-xl text-gray-600 mt-4">
                Families Served
              </p>

            </div>

            <div>

              <h2 className="text-6xl font-bold text-purple-600">
                MDRT
              </h2>

              <p className="text-xl text-gray-600 mt-4">
                Global Recognition
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ==========================================
          WHY CHOOSE US
      ========================================== */}

      <section className="bg-slate-100 text-gray-900 py-24 px-8">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-bold text-center text-blue-900 mb-16">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-white p-10 rounded-3xl shadow-lg">

              <h3 className="text-3xl font-bold text-blue-900 mb-4">
                Trusted Advisory
              </h3>

              <p className="text-lg text-gray-700">
                Nearly three decades of expertise helping families make informed
                insurance and financial decisions.
              </p>

            </div>

            <div className="bg-white p-10 rounded-3xl shadow-lg">

              <h3 className="text-3xl font-bold text-blue-900 mb-4">
                Claims Assistance
              </h3>

              <p className="text-lg text-gray-700">
                Dedicated support throughout claims and maturity settlements.
              </p>

            </div>

            <div className="bg-white p-10 rounded-3xl shadow-lg">

              <h3 className="text-3xl font-bold text-blue-900 mb-4">
                Wealth Creation
              </h3>

              <p className="text-lg text-gray-700">
                Customized mutual fund and financial planning solutions.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ==========================================
          SIP CALCULATOR
      ========================================== */}

      <section className="bg-blue-50 py-24 px-8">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-5xl font-bold text-center text-blue-900 mb-16">
            SIP Investment Calculator
          </h2>

          <SIPCalculator />

        </div>

      </section>

    </div>
  );
}

export default Home;