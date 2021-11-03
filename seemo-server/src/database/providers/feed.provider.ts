import { Connection } from 'mongoose';
import {FeedSchema} from '../schemas/feed.schema';
import {ModelsNames} from '../models/constants/ModelsNames';
import {ProvidersNames} from '../models/constants/ProvidersNames';

export const feedProviders = [
  {
    provide: ProvidersNames.Feed,
    useFactory: (connection: Connection) => connection.model(ModelsNames.FeedModel, FeedSchema),
    inject: [ProvidersNames.DatabaseConnection],
  },
];
