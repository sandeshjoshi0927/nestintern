import {
  Controller,
  Query,
  Body,
  Get,
  Put,
  Post,
  Param,
  Delete,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDTO } from './dto/create-post.dto';
import { Post as PostInterface } from './interfaces/post.interface';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  //fetch posts with other functionalities
  @Get()
  async getPosts(
    @Query('search') search: string,
    @Query('sortBy') sortBy: keyof PostInterface,
    @Query('sortOrder') sortOrder: string,
    @Query('page') page: number,
    @Query('limit') limit: number,
  ) {
    return this.postsService.getPosts(search, sortBy, sortOrder, page, limit);
  }

  //fetch a single post
  @Get(':id')
  async getPost(@Param('id') id: string) {
    return this.postsService.getPost(id);
  }

  //create a post
  @Post()
  async create(@Body() createPostDTO: CreatePostDTO): Promise<PostInterface> {
    return this.postsService.create(createPostDTO);
  }

  //update a post
  @Put(':id')
  async update(
    @Body() updatePostDTO: CreatePostDTO,
    @Param('id') id: string,
  ): Promise<PostInterface | null> {
    return this.postsService.udpate(updatePostDTO, id);
  }

  //delete a posts
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<PostInterface | null> {
    return this.postsService.delete(id);
  }
}
