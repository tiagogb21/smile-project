import { Request, Response } from "express";
import ClientService from "../services/client.service";
import { GenericError } from "../utils";

export default class ClientController {
  private service = new ClientService();

  registerClientSuccess = async (req: Request, res: Response) => {
    try {
      const newClient = await this.service.createNewClient(req.body);
      return res.status(200).json({ newClient });
    } catch (error) {
      const getError = error as GenericError;
      return res.status(getError.status).json({ message: getError.message });
    }
  };

  getClientInfo = async (req: Request, res: Response) => {
    try {
      const client = await this.service.getClientInfo(req.params);
      return res.status(200).json({ client });
    } catch (error) {
      const getError = error as GenericError;
      return res
        .status(getError.status || 401)
        .json({ message: getError.message });
    }
  };
}
