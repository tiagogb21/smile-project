import { Request, Response } from "express";
import ScheduleService from "../services/schedule.service";
import { GenericError } from "../utils";

export default class ScheduleController {
  private service = new ScheduleService();

  scheduleSuccess = async (req: Request, res: Response) => {
    try {
      const newSchedule = await this.service.createNewSchedule(req.body);
      return res.status(200).json({ newSchedule });
    } catch (error) {
      const getError = error as GenericError;
      return res.status(getError.status).json({ message: getError.message });
    }
  };
}
