import { Controller, Get } from '@nestjs/common';
import { PostsService } from './posts.service';
// import { Post } from './interfaces/post.interface';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async findAll() {
    // @Query('limit') limit: number, // @Query('page') page: number, // @Query('sortOrder') sortOrder: string, // @Query('sortBy') sortBy: keyof Post, // @Query('search') search: string,
    return this.postsService.findAll();
    // search,
    // sortBy,
    // sortOrder,
    // Number(page),
    // Number(limit),
  }
}
