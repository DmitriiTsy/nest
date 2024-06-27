import { Sequelize } from 'sequelize-typescript';
import { User } from './user.entity';
import { Card } from 'src/cards/card.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize('sqlite:cards.db');
      sequelize.addModels([User, Card]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
