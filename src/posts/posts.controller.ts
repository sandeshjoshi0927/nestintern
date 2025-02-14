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
  async getPosts(@Query('search') search: string) {
    // @Query('limit') limit: number, // @Query('page') page: number, // @Query('sortOrder') sortOrder: string, // @Query('sortBy') sortBy: keyof Post,
    return this.postsService.getPosts(search);
    // search,
    // sortBy,
    // sortOrder,
    // Number(page),
    // Number(limit),
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

  //delete a post
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<PostInterface | null> {
    return this.postsService.delete(id);
  }
}
