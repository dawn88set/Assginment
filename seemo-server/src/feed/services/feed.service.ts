import {Inject, Injectable} from '@nestjs/common';
import {LikeFeedDto} from '../models/dtos/LikeFeed.dto';
import {PostFeedDto} from '../models/dtos/PostFeed.dto';
import {Model} from 'mongoose';
import {Feed} from '../../database/models/interfaces/feed.interface';
import {ProvidersNames} from '../../database/models/constants/ProvidersNames';
import {NotificationService} from '../../shared/services/notification.service';
import {PaginationDto} from '../../shared/models/dtos/pagination.dto';

@Injectable()
export class FeedService {

  constructor(@Inject(ProvidersNames.Feed)
              private feedModel: Model<Feed>,
              private notificationService: NotificationService) {
  }

  async postFeed(postFeedDto: PostFeedDto) {
    if (!postFeedDto.content || postFeedDto.content === '') {
      throw  new Error('Content could not be empty');
    }
    try {
      const feedObject = {
        ...postFeedDto,
        timestamp: new Date().getTime(),
        likeCount: 0,
      };
      const createFeed = new this.feedModel(feedObject);
      const feed = await createFeed.save();
      this.notificationService.notify(feed);
      return feed.toJSON();
    } catch (e) {
      console.log(e);
      throw new Error('Error when creating post');
    }
  }

  likeFeed(likeFeedDto: LikeFeedDto) {
    try {
      return new Promise(async (resolve, reject) => {
        console.log('likeFeedDto', likeFeedDto.feed_id);
        await this.feedModel.findOneAndUpdate({_id: likeFeedDto.feed_id}, {$inc: {likeCount: 1}}).exec((err, posts) => {
          if (err) {
            console.log(err);
            return reject();
          }
          return resolve(true);
        });
      });
    } catch (e) {
      console.log(e);
      throw new Error('Something went wrong');
    }
  }

  /**
   * not Supported yer but soon we will be able to like in a
   * transaction and then we will have an accurate number on the likeCount
   * @param likeFeedDto
   */
  async likeFeedWithTransaction(likeFeedDto: LikeFeedDto) {
    try {
      const session = await this.feedModel.db.startSession();
      session.startTransaction();
      try {
        const feed = await this.feedModel.findOneAndUpdate({_id: likeFeedDto.feed_id}, {$inc: {'feed.likeCount': 1}})
          .session(session).exec();
        await session.commitTransaction();
        console.log(feed);
        return true;
      } catch (e) {
        console.log(e);
        await session.abortTransaction();
        throw new Error('Something went wrong');
      } finally {
        await session.endSession();
      }
    } catch (e) {
      console.log(e);
      throw new Error('Something went wrong');
    }
  }

  async getFeed(paginationDto: PaginationDto) {
    try {
      return new Promise(async (resolve, reject) => {
        await this.feedModel
          .find({timestamp: {$gt: paginationDto.lastTimestamp}})
          .sort({timestamp: -1})
          .limit(3)
          .exec((err, posts) => {
            if (err) {
              console.log(err);
              return reject();
            }
            return resolve(posts || []);
          });
      });
    } catch (e) {
      throw  new Error(e);
    }

  }
}
