const express = require("express");
const router = new express.Router();
const controllers = require("../controllers/userControllers");
const dbcontrollers = require("../controllers/mlControllers")

router.post("/user/register",controllers.userregister);
router.post("/user/sendotp",controllers.userOtpSend);
router.post("/user/login",controllers.userLogin);
router.post("/user/predict_svm", dbcontrollers.prediction_svm);
router.post("/user/predict_dt", dbcontrollers.prediction_dt);
router.post("/user/predict_rf",dbcontrollers.prediction_rf);
router.post("/user/predict_nb",dbcontrollers.prediction_nb);
router.post("/user/predict_knn",dbcontrollers.prediction_knn);
router.post("/user/predict_lr",dbcontrollers.prediction_lr);

module.exports = router;