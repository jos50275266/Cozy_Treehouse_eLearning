import express from "express";

const router = express.Router();

// Middleware
import { requireSignin } from "../middlewares";

// Controllers
import {
  makeInstructor,
  getAccountStatus,
  currentInstructor,
} from "../controllers/instructor";

router.post("/make-instructor", requireSignin, makeInstructor);
router.post("/get-account-status", requireSignin, getAccountStatus);
router.get("/current-instructor", requireSignin, currentInstructor);

module.exports = router;
