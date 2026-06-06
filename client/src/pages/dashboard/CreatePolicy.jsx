import { useState } from "react";
import { useNavigate } from "react-router-dom";


import { createPolicy } from "../../services/policyService.js";


function CreatePolicy() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    premiumAmount: "",
    coverageAmount: "",
    duration: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);


  // ==========================================
  // HANDLE CHANGE
  // ==========================================

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };


  // ==========================================
  // HANDLE SUBMIT
  // ==========================================

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      await createPolicy(formData);

      alert("Policy Created Successfully");

      navigate("/dashboard/policies");

    } catch (error) {

      console.log(error);

      alert("Failed to create policy");

    } finally {

      setLoading(false);

    }

  };


  return (
    <div className="max-w-3xl">

      <h1 className="text-4xl font-bold text-blue-900 mb-6">
        Create Policy
      </h1>


      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow space-y-6"
      >

        {/* TITLE */}

        <div>

          <label className="block mb-2 font-medium">
            Policy Title
          </label>

          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full border rounded-xl px-4 py-3"
          />

        </div>


        {/* CATEGORY */}

        <div>

          <label className="block mb-2 font-medium">
            Category
          </label>

          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full border rounded-xl px-4 py-3"
          />

        </div>


        {/* PREMIUM */}

        <div>

          <label className="block mb-2 font-medium">
            Premium Amount
          </label>

          <input
            type="number"
            name="premiumAmount"
            value={formData.premiumAmount}
            onChange={handleChange}
            required
            className="w-full border rounded-xl px-4 py-3"
          />

        </div>


        {/* COVERAGE */}

        <div>

          <label className="block mb-2 font-medium">
            Coverage Amount
          </label>

          <input
            type="number"
            name="coverageAmount"
            value={formData.coverageAmount}
            onChange={handleChange}
            required
            className="w-full border rounded-xl px-4 py-3"
          />

        </div>


        {/* DURATION */}

        <div>

          <label className="block mb-2 font-medium">
            Duration
          </label>

          <input
            type="text"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            required
            className="w-full border rounded-xl px-4 py-3"
          />

        </div>


        {/* DESCRIPTION */}

        <div>

          <label className="block mb-2 font-medium">
            Description
          </label>

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="w-full border rounded-xl px-4 py-3"
          />

        </div>


        {/* BUTTON */}

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-900 text-white px-6 py-3 rounded-xl hover:bg-blue-800"
        >

          {loading ? "Creating..." : "Create Policy"}

        </button>

      </form>

    </div>
  );
}

export default CreatePolicy;