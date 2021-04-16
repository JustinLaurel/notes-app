import { Credentials } from '../types';
import parsers from './parsers';

const toCredentials = ({ username, password }: Credentials): Credentials => {
    return {
        username: parsers.parseString(username.toLowerCase()),
        password: parsers.parseString(password)
    };
};

export default toCredentials;