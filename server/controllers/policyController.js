import Policy from "../models/Policy.js";

// ==========================================
// CREATE POLICY
// ==========================================
export const createPolicy = async (req, res) => {
  try {
    const {
      title,
      category,
      premiumAmount,
      coverageAmount,
      duration,
      description,
    } = req.body;

    // Validation
    if (
      !title ||
      !category ||
      !premiumAmount ||
      !coverageAmount ||
      !duration
    ) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const policy = await Policy.create({
      title,
      category,
      premiumAmount,
      coverageAmount,
      duration,
      description,
      user: req.user.id,
    });

    res.status(201).json(policy);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ==========================================
// GET USER POLICIES
// ==========================================
export const getPolicies = async (req, res) => {
  try {
    const policies = await Policy.find({
      user: req.user.id,
    });

    res.status(200).json(policies);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ==========================================
// GET SINGLE POLICY
// ==========================================
export const getPolicy = async (req, res) => {
  try {
    const policy = await Policy.findById(req.params.id);

    if (!policy) {
      return res.status(404).json({
        message: "Policy not found",
      });
    }

    // Ownership Check
    if (policy.user.toString() !== req.user.id) {
      return res.status(401).json({
        message: "Not authorized",
      });
    }

    res.status(200).json(policy);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ==========================================
// UPDATE POLICY
// ==========================================
export const updatePolicy = async (req, res) => {
  try {
    const policy = await Policy.findById(req.params.id);

    if (!policy) {
      return res.status(404).json({
        message: "Policy not found",
      });
    }

    // Ownership Check
    if (policy.user.toString() !== req.user.id) {
      return res.status(401).json({
        message: "Not authorized",
      });
    }

    const updatedPolicy = await Policy.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json(updatedPolicy);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ==========================================
// DELETE POLICY
// ==========================================
/* =========================
   DELETE USER 
========================= */
export const deletePolicy = async (req, res) => {
  try {
    const policy = await Policy.findById(req.params.id);

    if (!policy) {
      return res.status(404).json({
        message: "Policy not found",
      });
    }

    console.log("================================");
    console.log("Policy Owner:", policy.user.toString());
    console.log("Logged User :", req.user.id);
    console.log("================================");

    if (policy.user.toString() !== req.user.id) {
      return res.status(401).json({
        message: "Not authorized",
      });
    }

    await policy.deleteOne();

    res.status(200).json({
      message: "Policy deleted successfully",
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};