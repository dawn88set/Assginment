import {Module} from '@nestjs/common';
import {NotificationService} from './services/notification.service';

@Module({
  providers: [NotificationService],
  exports: [NotificationService],
})
export class SharedModule {
}
