import nc from "next-connect";
import connectDB from "../../../config/db";
import { singlePost } from "../../../controllers/PostControllers";

import onError from "../../../middlewares/Errors";

const handler = nc({ onError });

connectDB();

handler.get(singlePost);

export default handler;
