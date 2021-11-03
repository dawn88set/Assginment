import {Module} from '@nestjs/common';
import {FeedService} from './services/feed.service';
import {SharedModule} from '../shared/shared.module';
import {FeedController} from './controllers/feed.controller';
import {feedProviders} from '../database/providers/feed.provider';
import {DatabaseModule} from '../database/database.module';

@Module({
  imports: [DatabaseModule, SharedModule],
  controllers: [FeedController],
  providers: [...feedProviders, FeedService],
  exports: [],
})
export class FeedModule {
}
