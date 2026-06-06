import Claim from "../models/Claim.js";


// CREATE CLAIM
export const createClaim = async (req, res) => {
  try {
    const documents = req.files.map((file) => file.path);

    const claim = await Claim.create({
      user: req.user._id,
      policy: req.body.policy,
      reason: req.body.reason,
      claimAmount: req.body.claimAmount,
      documents,
    });

    res.status(201).json(claim);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// GET MY CLAIMS
export const getMyClaims = async (req, res) => {
  try {
    const claims = await Claim.find({
      user: req.user._id,
    }).populate("policy");

    res.json(claims);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// ADMIN GET ALL CLAIMS
export const getAllClaims = async (req, res) => {
  try {
    const claims = await Claim.find()
      .populate("user")
      .populate("policy");

    res.json(claims);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// ADMIN UPDATE CLAIM STATUS
export const updateClaimStatus = async (req, res) => {
  try {
    const claim = await Claim.findById(req.params.id);

    if (!claim) {
      return res.status(404).json({
        message: "Claim not found",
      });
    }

    claim.status = req.body.status;

    await claim.save();

    res.json(claim);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};