import { Document } from 'mongoose';

export interface Feed extends Document {
  readonly content: string;
  readonly timestamp: number;
  readonly likeCount: string;
}
