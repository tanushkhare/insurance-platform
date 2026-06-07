function About() {
  return (
    <div className="min-h-screen bg-slate-100 p-8">

      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-lg p-12">

        {/* Heading */}
        <h1 className="text-6xl font-bold text-blue-700 mb-6">
          About InsurancePro
        </h1>

        <p className="text-2xl text-gray-600 mb-12">
          We help customers compare, choose, and manage
          insurance plans with confidence and ease.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Website Details */}
          <div className="bg-blue-50 rounded-3xl p-10">

            <h2 className="text-4xl font-bold text-blue-700 mb-8">
              Website Details
            </h2>

            <div className="space-y-4 text-xl">

              <p>
                <strong>Type of Site:</strong> Insurance Platform
              </p>

              <p>
                <strong>Founder:</strong> Gopinath Krishnaraj
              </p>

              <p>
                <strong>Email:</strong> support@insurancepro.com
              </p>

              <p>
                <strong>Company Name:</strong> InsurancePro
              </p>

              <p>
                <strong>Services:</strong> Life Insurance,
                Health Insurance, Mutual Funds, SIP Planning
              </p>

            </div>

          </div>

          {/* Contact Information */}
          <div className="bg-green-50 rounded-3xl p-10">

            <h2 className="text-4xl font-bold text-green-700 mb-8">
              Contact Information
            </h2>

            <div className="space-y-4 text-xl">

              <p>
                <strong>Address:</strong>
                <br />
                Pune, Maharashtra, India
              </p>

              <p>
                <strong>Zip Code:</strong> 411001
              </p>

              <p>
                <strong>Phone:</strong> +91 9876543210
              </p>

              <p>
                <strong>Email:</strong>
                <br />
                support@insurancepro.com
              </p>

            </div>

          </div>

        </div>

        {/* Mission Section */}
        <div className="mt-12 bg-gray-50 rounded-3xl p-10">

          <h2 className="text-4xl font-bold text-blue-900 mb-6">
            Our Mission
          </h2>

          <p className="text-xl text-gray-700 leading-relaxed">
            Our mission is to provide reliable insurance and
            financial planning solutions that help individuals
            and families secure their future. We strive to make
            insurance simple, transparent, and accessible for
            everyone.
          </p>

        </div>

      </div>

    </div>
  );
}

export default About;