// https://www.npmjs.com/package/sequelize-transparent-cache
// https://www.npmjs.com/package/sequelize-extension
// https://www.npmjs.com/package/sequelize-pool
// https://www.npmjs.com/package/winston-transport-sequelize
// https://www.npmjs.com/package/sequelize-cursor-pagination

import { Sequelize } from 'sequelize';
import { DB_DIALECT, DB_USER_NAME, DB_USER_PASSWORD, DB_HOST, DB_PORT, DB_NAME } from '../config/db';

const DATABASE_URL = `${DB_DIALECT}://${DB_USER_NAME}:${DB_USER_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;

const sequelize = new Sequelize(DATABASE_URL);

export default sequelize;
