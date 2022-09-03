import ScheduleModel from "../database/models/schedule.model";
import ISchedule from "../interfaces/ISchedule";

export default class ScheduleService {
  private model = ScheduleModel;

  createNewSchedule = async (newSchedule: ISchedule) => {
    const t = await this.model.create({ ...newSchedule });
    return t;
  };
}
