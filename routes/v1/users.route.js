const express = require("express");
const usersControllers = require("../../controllers/users.controllers");

const router = express.Router();

router.route("/all").get(usersControllers.getAllUsers);
router.route("/random").get(usersControllers.getRandomsingleUser);
router.route("/save").post(usersControllers.saveAUser);
router.route("/bulk-update").patch(usersControllers.updateMultipleUsers);
router
  .route("/:id")
  .patch(usersControllers.updateUser)
  .delete(usersControllers.deleteUser);

module.exports = router;
