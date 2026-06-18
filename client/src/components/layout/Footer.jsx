import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-blue-950 text-white mt-20">

      {/* Main Footer */}

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Company Info */}

          <div>

            <Link
              to="/"
              className="text-3xl font-bold hover:text-yellow-400 transition"
            >
              Gopinath Insurance
            </Link>

            <p className="text-gray-300 mt-6 leading-relaxed text-lg">
              Secure your future with trusted insurance and financial
              planning solutions. With 29+ years of experience helping
              families protect their future and achieve their financial goals.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-2xl font-semibold mb-6">
              Quick Links
            </h3>

            <div className="flex flex-col space-y-4 text-lg">

              <Link
                to="/"
                className="text-gray-300 hover:text-yellow-400 transition"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="text-gray-300 hover:text-yellow-400 transition"
              >
                About Us
              </Link>

              <Link
                to="/plans"
                className="text-gray-300 hover:text-yellow-400 transition"
              >
                Our Products
              </Link>

              <Link
                to="/contact"
                className="text-gray-300 hover:text-yellow-400 transition"
              >
                Contact Us
              </Link>

            </div>

          </div>

          {/* Contact Info */}

          <div>

            <h3 className="text-2xl font-semibold mb-6">
              Contact Information
            </h3>

            <div className="space-y-4 text-lg text-gray-300">

              <p>
                📧 gopinathkrishnaraj@gmail.com
              </p>

              <p>
                📞 +91 9373105259
              </p>

              <p>
                📍 1st Floor, Vali Manzil,
                <br />
                Kamptee Road,
                <br />
                Nagpur - 440030
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Footer */}

      <div className="border-t border-blue-800">

        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-400 text-center">
            © 2026 Gopinath Insurance. All Rights Reserved.
          </p>

          <p className="text-gray-500 text-sm mt-2 md:mt-0">
            Insurance • Financial Planning • Mutual Funds
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;