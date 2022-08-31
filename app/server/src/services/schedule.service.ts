import ScheduleModel from "../database/models/user.model";
import IUser from "../interfaces/IUser";

export default class ScheduleService {
  private model = ScheduleModel;

  createNewSchedule = async (newSchedule: IUser) => {
    return await this.model.create({ ...newSchedule });
  };
}
