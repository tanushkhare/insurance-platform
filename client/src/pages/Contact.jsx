import Navbar from "../components/layout/Navbar";

function Contact() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 py-12 px-6">
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold text-blue-900 mb-4">
              Contact Us
            </h1>

            <p className="text-xl text-gray-600">
              We're here to help with your insurance and financial planning needs.
            </p>
          </div>

          {/* Main Grid */}
          <div className="grid md:grid-cols-2 gap-8">

            {/* Left Side */}
            <div className="space-y-6">

              {/* Email */}
              <div className="bg-white rounded-3xl shadow-lg p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl">📧</span>

                  <h2 className="text-3xl font-bold text-blue-700">
                    Email
                  </h2>
                </div>

                <p className="text-xl text-gray-600">
                  support@insurancepro.com
                </p>
              </div>

              {/* Phone */}
              <div className="bg-white rounded-3xl shadow-lg p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl">📞</span>

                  <h2 className="text-3xl font-bold text-green-700">
                    Phone Number
                  </h2>
                </div>

                <p className="text-xl text-gray-600">
                  +91 9876543210
                </p>
              </div>

              {/* Address */}
              <div className="bg-white rounded-3xl shadow-lg p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl">📍</span>

                  <h2 className="text-3xl font-bold text-purple-700">
                    Office Address
                  </h2>
                </div>

                <p className="text-xl text-gray-600">
                  Pune, Maharashtra, India
                </p>
              </div>

            </div>

            {/* Right Side */}
            <div className="bg-white rounded-3xl shadow-lg p-10">

              <div className="flex items-center gap-4 mb-8">
                <span className="text-6xl">🏢</span>

                <h2 className="text-5xl font-bold text-gray-900">
                  Business Details
                </h2>
              </div>

              <div className="space-y-5 text-xl">

                <p>
                  <strong>Organization:</strong> InsurancePro
                </p>

                <p>
                  <strong>Founder:</strong> Gopinath Krishna Raj
                </p>

                <p>
                  <strong>Email:</strong> support@insurancepro.com
                </p>

                <p>
                  <strong>Phone:</strong> +91 9876543210
                </p>

                <p>
                  <strong>Location:</strong> Pune, Maharashtra
                </p>

                <p>
                  <strong>Services:</strong> Life Insurance, Health Insurance,
                  Mutual Funds, SIP Planning
                </p>

              </div>

            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-lg p-10 mt-12">

            <h2 className="text-4xl font-bold text-center text-blue-900 mb-8">
              Send Us a Message
            </h2>

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-xl p-4 text-lg"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border rounded-xl p-4 text-lg"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full border rounded-xl p-4 text-lg"
              />

              <button
                type="submit"
                className="bg-blue-900 text-white px-8 py-4 rounded-xl text-xl font-bold hover:bg-blue-800"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>
      </div>
    </>
  );
}

export default Contact;