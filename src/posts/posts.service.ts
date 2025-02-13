import { Injectable } from '@nestjs/common';
import { Post } from './interfaces/post.interface';

@Injectable()
export class PostsService {
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
      description: 'This is post three',
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
      description: 'This is post six',
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

  //   console(): Post[] {
  //     return this.posts.sort((a, b) =>
  //       b.title.toLowerCase().localeCompare(a.title.toLowerCase()),
  //     );
  //   }

  findAll(search?: string, sortOrder?: string): Post[] {
    let filteredPosts = this.posts;

    if (search) {
      filteredPosts = filteredPosts.filter((post) =>
        post.title.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (sortOrder) {
      filteredPosts = filteredPosts.sort((a, b) =>
        sortOrder === 'ASC'
          ? a.title.toLowerCase().localeCompare(b.title.toLowerCase())
          : b.title.toLowerCase().localeCompare(a.title.toLowerCase()),
      );
    }

    return filteredPosts;
  }
}
