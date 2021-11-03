import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FeedApi} from "../models/constants/FeedApi";
import {Feed} from '../models/viewModels/Feed';
import {environment} from "../../../../environments/environment";



@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(private httpClient: HttpClient) {
  }

  async getFeed(lastTimestamp: number): Promise<Feed[]> {
    return this.httpClient.get<Feed[]>(`${environment.apiPath}${FeedApi.BaseFeed}`, {params: {lastTimestamp}}).toPromise();
  }

  async postFeed(content: string): Promise<Feed> {
    return this.httpClient.post<Feed>(`${environment.apiPath}${FeedApi.BaseFeed}`, {content}).toPromise();
  }

  async likeFeed(feed_id: string) {
    return this.httpClient.post(`${environment.apiPath}${FeedApi.LikeFeed}`, {feed_id}).toPromise();
  }


}
