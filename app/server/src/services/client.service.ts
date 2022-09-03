import { GenericError } from "../utils";
import ClientModel from "../database/models/client.model";
import IClient from "../interfaces/IClient";

const clientExists = "Client already exists!";
const clientDoesntExist = "Client doesn't exist!";

export default class ClientService {
  private model = ClientModel;

  getClientInfo = async (newClient: any) => {
    const { email } = newClient;

    const clientInfo = await this.model.findOne({
      where: {
        email,
      },
    });

    if (!clientInfo) throw new GenericError(401, clientDoesntExist);

    return clientInfo;
  };

  createNewClient = async (newClient: IClient) => {
    const { email } = newClient;

    const clientAlreadyExists = await this.model.findOne({
      where: {
        email,
      },
    });

    if (clientAlreadyExists) throw new GenericError(404, clientExists);

    return await this.model.create({ ...newClient });
  };
}
