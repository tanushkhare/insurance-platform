function About() {
  return (
    <div className="min-h-screen bg-slate-100 py-12 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-3xl shadow-xl p-12 mb-10">

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About Gopinath Insurance
          </h1>

          <p className="text-xl md:text-2xl leading-relaxed max-w-4xl">
            With over <span className="font-bold">29 years of experience</span>
            {" "}in Insurance and Financial Advisory services, we help individuals,
            families, and businesses secure their future through trusted insurance
            solutions and expert financial guidance.
          </p>

        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
            <h2 className="text-5xl font-bold text-blue-700">29+</h2>
            <p className="text-gray-600 text-lg mt-3">
              Years of Experience
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
            <h2 className="text-5xl font-bold text-green-600">1800+</h2>
            <p className="text-gray-600 text-lg mt-3">
              Families Served
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
            <h2 className="text-5xl font-bold text-purple-600">MDRT</h2>
            <p className="text-gray-600 text-lg mt-3">
              Global Recognition
            </p>
          </div>

        </div>

        {/* About Section */}
        <div className="bg-white rounded-3xl shadow-lg p-10 mb-10">

          <h2 className="text-4xl font-bold text-blue-800 mb-6">
            Who We Are
          </h2>

          <p className="text-xl text-gray-700 leading-relaxed">
            Gopinath Insurance is a trusted Insurance and Financial Advisory
            practice dedicated to helping clients protect their families,
            businesses, and financial future. We work closely with clients to
            understand their goals and recommend insurance and investment
            solutions tailored to their needs.
          </p>

          <p className="text-xl text-gray-700 leading-relaxed mt-6">
            Our commitment extends beyond policy issuance. We support our
            clients throughout the policy lifecycle, including renewals,
            reviews, maturity benefits, and claims assistance.
          </p>

        </div>

        {/* Expertise Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-10">

          <div className="bg-blue-50 rounded-3xl p-8 shadow">
            <h3 className="text-3xl font-bold text-blue-700 mb-4">
              Insurance Solutions
            </h3>

            <ul className="space-y-3 text-lg text-gray-700">
              <li>✓ Health Insurance</li>
              <li>✓ Personal Accident Insurance</li>
              <li>✓ Home Insurance</li>
              <li>✓ Fire & Allied Insurance</li>
              <li>✓ Legal Liability Insurance</li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-3xl p-8 shadow">
            <h3 className="text-3xl font-bold text-green-700 mb-4">
              Financial Planning
            </h3>

            <ul className="space-y-3 text-lg text-gray-700">
              <li>✓ Mutual Funds</li>
              <li>✓ Wealth Creation</li>
              <li>✓ Goal-Based Planning</li>
              <li>✓ Retirement Planning</li>
              <li>✓ Risk Assessment</li>
            </ul>
          </div>

          <div className="bg-purple-50 rounded-3xl p-8 shadow">
            <h3 className="text-3xl font-bold text-purple-700 mb-4">
              Claims Support
            </h3>

            <ul className="space-y-3 text-lg text-gray-700">
              <li>✓ Claim Assistance</li>
              <li>✓ Maturity Benefits</li>
              <li>✓ Documentation Support</li>
              <li>✓ Policy Servicing</li>
              <li>✓ Customer Advocacy</li>
            </ul>
          </div>

        </div>

        {/* Trusted Companies */}
        <div className="bg-white rounded-3xl shadow-lg p-10 mb-10">

          <h2 className="text-4xl font-bold text-blue-800 mb-6">
            Insurance Partners
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-center">

            <div className="bg-blue-50 p-6 rounded-2xl">
              <h3 className="text-2xl font-semibold text-blue-700">
                New India Assurance
              </h3>
            </div>

            <div className="bg-green-50 p-6 rounded-2xl">
              <h3 className="text-2xl font-semibold text-green-700">
                HDFC ERGO
              </h3>
            </div>

            <div className="bg-orange-50 p-6 rounded-2xl">
              <h3 className="text-2xl font-semibold text-orange-700">
                SBI General Insurance
              </h3>
            </div>

          </div>

        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-3xl shadow-lg p-10">

          <h2 className="text-4xl font-bold text-blue-800 mb-8">
            Contact Information
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-xl">

            <div>
              <p className="mb-4">
                <strong>Founder:</strong> Gopinath Krishnaraj
              </p>

              <p className="mb-4">
                <strong>Phone:</strong> +91 9373105259
              </p>

              <p>
                <strong>Email:</strong>
                <br />
                gopinathkrishnaraj@gmail.com
              </p>
            </div>

            <div>
              <p>
                <strong>Office Address:</strong>
                <br />
                1st Floor, Vali Manzil,
                <br />
                Kamptee Road,
                <br />
                Nagpur - 440030,
                <br />
                Maharashtra, India
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default About;