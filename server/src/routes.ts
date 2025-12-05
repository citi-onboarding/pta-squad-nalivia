import express from "express";
import PatientController from "./controllers/PatientController";
import ConsultController from "./controllers/ConsultController";
import EmailController  from "./controllers/EmailController";

const routes = express.Router();

routes.post("/patient", PatientController.create);
routes.get("/patient", PatientController.get);
routes.delete("/patient/:id", PatientController.delete);
routes.patch("/patient/:id", PatientController.update);

routes.post("/consult", ConsultController.create);
routes.get("/consult", ConsultController.get);
routes.delete("/consult/:id", ConsultController.delete);
routes.patch("/consult/:id", ConsultController.update);

routes.post('/send-email', EmailController.handle);

export default routes;
