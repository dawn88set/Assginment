import {Injectable} from '@nestjs/common';
import {PostFeedDto} from '../../feed/models/dtos/PostFeed.dto';

@Injectable()
export class NotificationService {

  async postFeed(postFeedDto: PostFeedDto) {

  }

  async likeFeed(post_id) {

  }

  notify(feed) {
  }
}
