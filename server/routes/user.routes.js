import express from "express";
import userCtrl from "../controllers/user.controller";

const router = express.Router();

router.route("/api/users").get(userCtrl.list).post(userCtrl.create);
router
  .route("/api/user/:userID")
  .get(userCtrl.read)
  .put(userCtrl.update)
  .delete(userCtrl.remove);

router.param("userID", userCtrl.userByID);

export default router;
