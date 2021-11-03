import * as mongoose from 'mongoose';
import {ProvidersNames} from '../models/constants/ProvidersNames';

export const databaseProviders = [
  {
    provide: ProvidersNames.DatabaseConnection,
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(process.env.MONGO_CONNECTION),
  },
];
