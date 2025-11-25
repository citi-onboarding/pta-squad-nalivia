import express from "express";
import PatientController from "./controllers/PatientController";

const routes = express.Router();


routes.post("/patient", PatientController.create);
routes.get("/patient", PatientController.get);
routes.delete("/patient/:id", PatientController.delete);
routes.patch("/patient/:id", PatientController.update);

export default routes;
