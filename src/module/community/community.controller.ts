import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query,  } from "@nestjs/common";
import { CommunityService } from "./community.service";
import { CreateCommunityDto } from "./dto/createCommunity.dto";
import { UpdateCommunityDto } from "./dto/updateCommunity.dto";

@Controller('community')
export class CommunityController {
    constructor(private readonly communityService: CommunityService) {}

    @Get()
    async getAll(@Query('take', ParseIntPipe) take: number, @Query('skip', ParseIntPipe) skip: number) {
        return await this.communityService.getAll(take, skip);
    }

    @Post()
    async create(@Body() data: CreateCommunityDto) {
        return await this.communityService.create(data);
    }

    @Get(':id')
    async getByID(@Param('id', ParseIntPipe) id: number) {
        return await this.communityService.getByID(id);
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateCommunityDto) {
        console.log(data);
        
        return await this.communityService.update(id, data);
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        await this.communityService.delete(id);
    }

}
