import User from '../models/user';
import Note from '../models/note';
import { parseUser } from '../validators/users';

const get = async (userId: string) => {
    const result = await User.findById(userId).populate('notes');
    const user = parseUser(result);

    if (user) {
        return user.notes;
    }
    return null;
};

const remove = async (id: string) => {
    const deleted = await Note.deleteOne({_id: id});
    return deleted;
};

export default {
    get,
    remove
};