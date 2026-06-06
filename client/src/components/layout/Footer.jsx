function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

        <div>
          <h2 className="text-2xl font-bold mb-4">
            InsurancePro
          </h2>

          <p className="text-gray-300">
            Secure your future with trusted insurance and financial planning solutions.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-300">
            <li>Home</li>
            <li>About</li>
            <li>Insurance</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">
            Contact
          </h3>

          <p className="text-gray-300">
            support@insurancepro.com
          </p>

          <p className="text-gray-300 mt-2">
            +91 9876543210
          </p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
        © 2026 InsurancePro. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;