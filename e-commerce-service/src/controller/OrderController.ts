import { Request, Response } from "express-serve-static-core";
import { Payment } from "../model/PaymentModel";

const getOrder = async (req: Request, res: Response) => {
  try {
    const { startTime, endTime } = req.query;
    console.log(startTime, endTime);

    const filtIncome: {
      createAt?: { $gt: Date; $lt: Date };
    } = {};

    filtIncome.createAt = {
      $gt: new Date(String(startTime)),
      $lt: new Date(String(endTime)),
    };

    const order = await Payment.find({ filtIncome });

    res.json(order);
  } catch (err) {
    res.send(err);
  }
};


// const getOrders = async (req: Request, res: Response) => {
//     try {
//         const {startDate, endDate} = req.query;
        
//         const filtIncome: {
//             createAt?: { $gt: Date; $lt: Date};
//         } = {};

//         filtIncome.createAt = {

//         }
//      }
//     catch (err) {
//         res.send(err);
//     }
// }

export { getOrder }; // orderRouter dotor import hiine