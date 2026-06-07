import { Link } from "react-router-dom";
import SIPCalculator from "../components/calculators/SIPCalculator";

function Home() {
  return (
    <div className="min-h-screen bg-blue-900 text-white">

      {/* ==========================================
          HERO SECTION
      ========================================== */}

      <section className="flex flex-col items-center justify-center text-center px-6 py-32">

        {/* HEADING */}

        <h1 className="text-6xl md:text-8xl font-extrabold leading-tight max-w-6xl">
          Secure Your Future With
          <br />
          Trusted Insurance
        </h1>

        {/* SUBTEXT */}

        <p className="text-2xl md:text-3xl text-gray-200 mt-10 max-w-5xl leading-relaxed">
          Life Insurance, Health Insurance, Mutual Funds,
          SIP Planning, and Financial Security Solutions.
        </p>

        {/* BUTTONS */}

        <div className="flex flex-wrap justify-center gap-6 mt-16">

          <Link
            to="/dashboard/policies"
            className="bg-yellow-400 text-black px-10 py-5 rounded-2xl font-bold text-2xl hover:scale-105 transition"
          >
            Explore Plans
          </Link>

          <Link
            to="/contact"
            className="border border-white px-10 py-5 rounded-2xl font-bold text-2xl hover:bg-white hover:text-blue-900 transition"
          >
            Contact Us
          </Link>

          <Link
            to="/dashboard/create-policy"
            className="bg-white text-blue-900 px-10 py-5 rounded-2xl font-bold text-2xl hover:bg-gray-100 transition"
          >
            Create Policy
          </Link>

        </div>

      </section>

      {/* ==========================================
          FEATURES SECTION
      ========================================== */}

      <section className="bg-white text-gray-900 py-24 px-8">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-bold text-center text-blue-900 mb-16">
            Why Choose InsurancePro?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* CARD 1 */}

            <div className="bg-gray-100 p-10 rounded-3xl shadow-lg">

              <h3 className="text-3xl font-bold text-blue-900 mb-4">
                Trusted Policies
              </h3>

              <p className="text-lg text-gray-700">
                Get secure insurance plans tailored for
                health, life, vehicle, and financial growth.
              </p>

            </div>

            {/* CARD 2 */}

            <div className="bg-gray-100 p-10 rounded-3xl shadow-lg">

              <h3 className="text-3xl font-bold text-blue-900 mb-4">
                Fast Claim Support
              </h3>

              <p className="text-lg text-gray-700">
                Easily manage claims with our streamlined
                dashboard and claim assistance system.
              </p>

            </div>

            {/* CARD 3 */}

            <div className="bg-gray-100 p-10 rounded-3xl shadow-lg">

              <h3 className="text-3xl font-bold text-blue-900 mb-4">
                Smart Investments
              </h3>

              <p className="text-lg text-gray-700">
                Track SIPs, mutual funds, and long-term
                investment growth in one place.
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