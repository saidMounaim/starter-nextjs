import nc from "next-connect";
import connectDB from "../../../config/db";
import { allPosts } from "../../../controllers/PostControllers";

import onError from "../../../middlewares/Errors";

const handler = nc({ onError });

connectDB();

handler.get(allPosts);

export default handler;
