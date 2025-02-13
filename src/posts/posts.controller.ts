import { Controller, Get, Query } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post } from './interfaces/post.interface';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  findAll(
    @Query('search') search: string,
    @Query('sortBy') sortBy: keyof Post,
    @Query('sortOrder') sortOrder: string,
  ) {
    return this.postsService.findAll(search, sortBy, sortOrder);
  }
}
