import jwt from 'jsonwebtoken';
import config from '../../config';

const authorization = jwt.sign({}, config.jwtSecret);

export default authorization;
