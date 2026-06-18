import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import {
  getPolicies,
  deletePolicy,
} from "../../services/policyService.js";


function Policies() {

  const [policies, setPolicies] = useState([]);

  const [loading, setLoading] = useState(true);


  // ==========================================
  // FETCH POLICIES
  // ==========================================

  useEffect(() => {

    const fetchPolicies = async () => {

      try {

        const data = await getPolicies();

        setPolicies(data);

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }

    };

    fetchPolicies();

  }, []);


  // ==========================================
  // DELETE POLICY
  // ==========================================

  const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this policy?"
    );

    if (!confirmDelete) return;

    try {

      await deletePolicy(id);

      setPolicies(
        policies.filter(
          (policy) => policy._id !== id
        )
      );

    } catch (error) {

      console.log(error);

      alert("Failed to delete policy");

    }

  };


  // ==========================================
  // LOADING
  // ==========================================

  if (loading) {

    return (
      <h1 className="text-2xl font-bold">
        Loading Policies...
      </h1>
    );

  }


  return (

    <div>

      {/* HEADER */}

      <div className="flex justify-between items-center mb-6">

        <h1 className="text-4xl font-bold text-blue-900">

          Policies

        </h1>


        {/* CREATE BUTTON */}

        <Link
  to="/"
  className="bg-blue-900 text-white px-5 py-3 rounded-xl hover:bg-blue-800"
>
  + Add Policy
</Link>

      </div>


      {/* POLICY LIST */}

      <div className="space-y-6">

        {policies.length === 0 ? (

          <div className="bg-white p-6 rounded-2xl shadow">

            No policies found.

          </div>

        ) : (

          policies.map((policy) => (

            <div
              key={policy._id}
              className="bg-white p-8 rounded-3xl shadow flex justify-between items-center"
            >

              {/* LEFT */}

              <div>

                <h2 className="text-3xl font-bold text-blue-800 mb-4">

                  {policy.title}

                </h2>

                <p className="text-lg">

                  Category: {policy.category}

                </p>

                <p className="text-lg">

                  Premium: ₹{policy.premiumAmount}

                </p>

                <p className="text-lg">

                  Coverage: ₹{policy.coverageAmount}

                </p>

                <p className="text-lg">

                  Duration: {policy.duration}

                </p>

              </div>


              {/* RIGHT */}

              <div className="flex flex-col items-end gap-4">

                {/* STATUS */}

                <span className="bg-green-100 text-green-700 px-5 py-2 rounded-full text-lg">

                  {policy.status}

                </span>


                {/* DELETE BUTTON */}

                <button
                  onClick={() => handleDelete(policy._id)}
                  className="bg-red-500 text-white px-5 py-2 rounded-xl hover:bg-red-600 transition"
                >

                  Delete

                </button>

              </div>

            </div>

          ))

        )}

      </div>

    </div>

  );

}

export default Policies;
