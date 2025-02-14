import { Injectable } from '@nestjs/common';
import { Post } from './interfaces/post.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PostsService {
  //constructor to inject post model
  constructor(@InjectModel('Post') private readonly postModel: Model<Post>) {}

  //get all Posts;
  async getPosts(
    search?: string,
    sortBy: keyof Post = 'title',
    sortOrder: string = 'ASC',
    page?: number,
    limit?: number,
  ): Promise<Post[]> {
    const filteredPosts = this.postModel.find();
    let filter = {};

    //searching
    if (search) {
      filter = { title: { $regex: search, $options: 'i' } };
    }

    let skip = 0;
    if (limit) {
      skip = page && page > 0 ? (page - 1) * limit : 0;
    }

    return filteredPosts
      .find(filter)
      .sort([[sortBy, sortOrder.toUpperCase() === 'ASC' ? 1 : -1]])
      .skip(skip)
      .limit(limit ?? 0)
      .exec();
  }

  //get one post
  async getPost(id: string): Promise<Post | null> {
    return await this.postModel.findOne({ _id: id });
  }

  //create a post
  async create(post: Post): Promise<Post> {
    const newPost = new this.postModel(post);
    return await newPost.save();
  }

  async udpate(post: Post, id: string): Promise<Post | null> {
    return await this.postModel.findByIdAndUpdate(id, post);
  }

  async delete(id: string): Promise<Post | null> {
    return await this.postModel.findByIdAndDelete(id);
  }
}
