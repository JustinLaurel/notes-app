import Pad from "../models/pad";
import { parsePad } from "../validators/pad";

const get = async (userId: string) => {
    const result = await Pad.findOne({
        user: userId
    });

    const pad = parsePad(result);

    return pad;
};

const update = async (updated: string, userId: string) => {
    const result = await Pad.findOneAndUpdate(
        { user: userId },
        { content: updated }, 
        { 
            new: true,
            useFindAndModify: false,
        },
    );

    const pad = parsePad(result);
    return pad;
};

export default {
    get,
    update
};