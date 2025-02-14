import { Injectable } from '@nestjs/common';
import { Post } from './interfaces/post.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PostsService {
  constructor(@InjectModel('Post') private readonly postModel: Model<Post>) {}

  //get Posts;
  async getPosts(search?: string): Promise<Post[]> {
    // limit: number = 5, // page: number = 1, // sortOrder?: string, // sortBy: keyof Post = 'title', //
    let filteredPosts = this.postModel.find();

    //searching
    if (search) {
      filteredPosts = this.postModel.find({ title: search });
    }

    // //searching
    // if (search) {
    //   filteredPosts = filteredPosts.filter((post) => {
    //     return (
    //       post.title.toLowerCase().includes(search.toLowerCase()) ||
    //       post.description.toLowerCase().includes(search.toLowerCase())
    //     );
    //   });
    // }

    // //sort by and sort order
    // if (sortBy && filteredPosts.length > 0) {
    //   filteredPosts = filteredPosts.sort((a, b) => {
    //     const valueA = a[sortBy]?.toString().toLowerCase();
    //     const valueB = b[sortBy]?.toString().toLowerCase();

    //     if (!valueA || !valueB) return 0;

    //     if (sortOrder === 'ASC') {
    //       return valueA.localeCompare(valueB);
    //     } else if (sortOrder === 'DESC') {
    //       return valueB.localeCompare(valueA);
    //     } else {
    //       return 0;
    //     }
    //   });
    // }

    // //pagination
    // if (page) {
    //   const start = (page - 1) * limit;
    //   const end = start + limit;
    //   filteredPosts = filteredPosts.slice(start, end);
    // }

    return filteredPosts;
  }

  //create a post
  async create(post: Post): Promise<Post> {
    const newPost = new this.postModel(post);
    return await newPost.save();
  }

  async udpate(post: Post, id: string): Promise<Post | null> {
    return await this.postModel.findByIdAndDelete(id, post);
  }

  async delete(id: string): Promise<Post | null> {
    return await this.postModel.findByIdAndDelete(id);
  }
}
