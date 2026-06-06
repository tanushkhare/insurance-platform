import express from "express";

import {
  createClaim,
  getMyClaims,
  getAllClaims,
  updateClaimStatus,
} from "../controllers/claimController.js";

import protect from "../middleware/authMiddleware.js";

import admin from "../middleware/adminMiddleware.js";

import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();


// USER ROUTES
router.post(
  "/",
  protect,
  upload.array("documents"),
  createClaim
);

router.get("/my", protect, getMyClaims);


// ADMIN ROUTES
router.get("/admin", protect, admin, getAllClaims);

router.put(
  "/admin/:id",
  protect,
  admin,
  updateClaimStatus
);

export default router;