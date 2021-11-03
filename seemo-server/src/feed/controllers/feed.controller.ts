import {Controller, Post, Body, Res, HttpStatus, Get, Query} from '@nestjs/common';
import {PostFeedDto} from '../models/dtos/PostFeed.dto';
import {FeedService} from '../services/feed.service';
import {Routes} from '../models/constants/routes';
import {LikeFeedDto} from '../models/dtos/LikeFeed.dto';

/**
 * This endpoints are opened in production and staging only through the office VPN
 */
@Controller(Routes.Feed)
export class FeedController {
  constructor(private feedService: FeedService) {
  }

  /**
   * @description: This endpoint allows to create a new post in the Feed
   * @param postFeedDto
   * @param res
   * @returns Tracker info
   */
  @Post('')
  async post(@Body() postFeedDto: PostFeedDto, @Res() res) {
    try {
      const postedFeed = await this.feedService.postFeed(postFeedDto);
      res.status(HttpStatus.OK).json(postedFeed);
    } catch (e) {
      console.log(e);
      res.status(HttpStatus.BAD_REQUEST).send({...e});
    }
  }


  /**
   * @description: This endpoint allows to get all the posts in the feed ordered by timestamp.
   * pagination mechanism is also managed using timestamp
   * @param paginationDto
   * @param res
   * @returns Tracker info
   */
  @Get('')
  async get(@Query() paginationDto: { lastId: number }, @Res() res) {
    try {
      const feed = await this.feedService.getFeed(paginationDto);
      res.status(HttpStatus.OK).send(feed);
    } catch (e) {
      res.status(HttpStatus.BAD_REQUEST).send({...e});
    }
  }

  /**
   * @description: This endpoint allows to like a post in a feed.
   * NOTE: there is not user management therefore you could do more then one like in different
   * browser session.
   * @param likeFeedDto
   * @param res
   * @returns Tracker info
   */
  @Post(Routes.Like)
  async like(@Body() likeFeedDto: LikeFeedDto, @Res() res) {
    try {
      await this.feedService.likeFeed(likeFeedDto);
      res.status(HttpStatus.OK).json();
    } catch (e) {
      res.status(HttpStatus.BAD_REQUEST).send({...e});
    }
  }
}
