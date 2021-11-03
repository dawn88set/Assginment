import {Component, OnInit} from '@angular/core';
import {FeedService} from "../../services/feed.service";
import {Feed} from "../../models/viewModels/Feed";

@Component({
  selector: 'app-feed-page',
  templateUrl: './feed-page.component.html',
  styleUrls: ['./feed-page.component.scss']
})
export class FeedPageComponent implements OnInit {
  feeds: Feed[];
  creteLoading: boolean;
  feedLoading: boolean;
  postContent: string;
  lastIdLoaded: number;

  constructor(private feedService: FeedService) {
    this.feeds = [];
    this.feedLoading = false;
    this.creteLoading = false;
    this.postContent = '';
    this.lastIdLoaded = 0;
    this.load();
  }

  ngOnInit(): void {
  }

  async load() {
    try {
      this.feedLoading = true;
      const feeds = await this.feedService.getFeed(this.lastIdLoaded);
      this.lastIdLoaded = feeds[feeds.length - 1].timestamp;
      this.feeds = this.feeds.concat(feeds);
      this.feedLoading = false;
    } catch (e) {
      console.log(e);
    }
  }


  async postFeed() {
    try {
      const createdPost = await this.feedService.postFeed(this.postContent);
      if (!createdPost) {
        console.log('something went wrong');
      }
      this.feeds.push(createdPost);
      this.postContent = '';
    } catch (e) {
      console.log(e);
    }
  }

  async likePost(feed: Feed) {
    try {
      if (!feed.liked) {
        await this.feedService.likeFeed(feed._id);
        feed.liked = true;
        feed.likeCount++;
      }
    } catch (e) {
      console.log(e);
    }
  }
}
