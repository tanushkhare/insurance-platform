import express from "express";

const router = express.Router();

import {
  createPolicy,
  getPolicies,
  getPolicy,
  updatePolicy,
  deletePolicy,
} from "../controllers/policyController.js";

import protect from "../middleware/authMiddleware.js";


// ==========================================
// CREATE POLICY + GET ALL POLICIES
// ==========================================

router
  .route("/")
  .post(protect, createPolicy)
  .get(protect, getPolicies);


// ==========================================
// SINGLE POLICY ROUTES
// ==========================================

router
  .route("/:id")
  .get(protect, getPolicy)
  .put(protect, updatePolicy)
  .delete(protect, deletePolicy);


export default router;