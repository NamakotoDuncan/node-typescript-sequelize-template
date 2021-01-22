import sequelize from './sequelize';
import User from './user.model';

import relations from './relations';

// eslint-disable-next-line @typescript-eslint/ban-types
Object.values(relations).forEach((relationsFunction: Function) => {
  relationsFunction();
});

export { sequelize, User };
