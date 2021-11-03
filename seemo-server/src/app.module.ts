import {Module} from '@nestjs/common';
import {FeedModule} from './feed/feed.module';
import {SharedModule} from './shared/shared.module';
import {DatabaseModule} from './database/database.module';

@Module({
  imports: [FeedModule, SharedModule, DatabaseModule],
})
export class AppModule {
}
