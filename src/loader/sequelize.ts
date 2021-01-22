import sequelize from '../model/sequelize';
import { logger } from './logger';

export async function initDb(): Promise<void> {
  try {
    sequelize.authenticate();
    await sequelize.sync({
      force: true,
    });
    logger.info('DB_CONNECTED_SUCCESS');
  } catch (error) {
    logger.error('DB_CONNECTION_ERROR: %o', error);
  }
}
