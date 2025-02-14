import { Injectable } from '@nestjs/common';
import { Post } from './interfaces/post.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PostsService {
  constructor(@InjectModel('Post') private readonly postModel: Model<Post>) {}

  //dummy data
  private readonly posts: Post[] = [
    {
      id: 1,
      title: 'Post One',
      description: 'This is post one',
      content: 'This is content for post one',
      published: new Date('2025-01-01'),
    },
    {
      id: 2,
      title: 'A Post One',
      description: 'This is post two',
      content: 'This is content for post two',
      published: new Date('2025-01-02'),
    },
    {
      id: 3,
      title: 'Post Three',
      description: 'A This is post three',
      content: 'This is content for post three',
      published: new Date('2025-01-03'),
    },
    {
      id: 4,
      title: 'Post Four',
      description: 'This is post four',
      content: 'This is content for post four',
      published: new Date('2025-01-04'),
    },
    {
      id: 5,
      title: 'Post Five',
      description: 'This is post five',
      content: 'This is content for post five',
      published: new Date('2025-01-05'),
    },
    {
      id: 6,
      title: 'Post Six',
      description: 'Description 6',
      content: 'This is content for post six',
      published: new Date('2025-01-06'),
    },
    {
      id: 7,
      title: 'Post Seven',
      description: 'This is post seven',
      content: 'This is content for post seven',
      published: new Date('2025-01-07'),
    },
    {
      id: 8,
      title: 'Post Eight',
      description: 'This is post eight',
      content: 'This is content for post eight',
      published: new Date('2025-01-08'),
    },
    {
      id: 9,
      title: 'Post Nine',
      description: 'This is post nine',
      content: 'This is content for post nine',
      published: new Date('2025-01-09'),
    },
    {
      id: 10,
      title: 'Post Ten',
      description: 'This is post ten',
      content: 'This is content for post ten',
      published: new Date('2025-01-10'),
    },
    {
      id: 11,
      title: 'Post Eleven',
      description: 'This is post eleven',
      content: 'This is content for post eleven',
      published: new Date('2025-01-11'),
    },
  ];

  findAll(
    search?: string,
    sortBy: keyof Post = 'title',
    sortOrder?: string,
    page: number = 1,
    limit: number = 5,
  ): Post[] {
    let filteredPosts = this.posts;

    //searching
    if (search) {
      filteredPosts = filteredPosts.filter((post) => {
        return (
          post.title.toLowerCase().includes(search.toLowerCase()) ||
          post.description.toLowerCase().includes(search.toLowerCase())
        );
      });
    }

    //sort by and sort order
    if (sortBy && filteredPosts.length > 0) {
      filteredPosts = filteredPosts.sort((a, b) => {
        const valueA = a[sortBy]?.toString().toLowerCase();
        const valueB = b[sortBy]?.toString().toLowerCase();

        if (!valueA || !valueB) return 0;

        if (sortOrder === 'ASC') {
          return valueA.localeCompare(valueB);
        } else if (sortOrder === 'DESC') {
          return valueB.localeCompare(valueA);
        } else {
          return 0;
        }
      });
    }

    //pagination
    if (page) {
      const start = (page - 1) * limit;
      const end = start + limit;
      filteredPosts = filteredPosts.slice(start, end);
    }

    return filteredPosts;
  }
}
