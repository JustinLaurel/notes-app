import { Pad } from "../types";
import UserModel from '../models/user';

const updatePad = async (userId: string, pad: Pad) => {
    const updated = await UserModel.updateOne(
        { _id: userId },
        { pad: pad._id },
        { new: true },
    );
    return updated;
};

export default {
    updateUserPad: updatePad,
};