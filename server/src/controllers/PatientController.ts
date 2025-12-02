import { Request, Response } from "express";
import { Citi, Crud } from "../global";

class UserController implements Crud {
  constructor(private readonly citi = new Citi("Patient")) {}
  create = async (request: Request, response: Response) => {
    const {
    name, tutor, age, specie, 
    } = request.body;

    const isAnyUndefined = this.citi.areValuesUndefined(
      name, 
      tutor, 
      age, 
      specie, 
    );
    
    if (isAnyUndefined) return response.status(400).send();

    const newPatient = { name, tutor, age, specie };
    const { httpStatus, message, values } = await this.citi.insertIntoDatabase(newPatient);

    return response.status(httpStatus).send({ message, values });

  };

  get = async (request: Request, response: Response) => {
    const { httpStatus, values } = await this.citi.getAll();

    return response.status(httpStatus).send(values);
  };

  delete = async (request: Request, response: Response) => {
    const { id } = request.params;

    const { httpStatus, messageFromDelete } = await this.citi.deleteValue(id);

    return response.status(httpStatus).send({ messageFromDelete });
  };

  update = async (request: Request, response: Response) => {
    const { id } = request.params;
    const { name, tutor, age, specie, consults } = request.body;

    const updatedValues = { name, tutor, age, specie, consults};

    const { httpStatus, messageFromUpdate } = await this.citi.updateValue(
      id,
      updatedValues
    );

    return response.status(httpStatus).send({ messageFromUpdate });
  };
}

export default new UserController();
