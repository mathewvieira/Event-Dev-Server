import { Controller, Get, ParseIntPipe, Query } from "@nestjs/common";
import { CommunityService } from "./community.service";

@Controller('community')
export class CommunityController {
    constructor(private readonly communityService: CommunityService) {}

    @Get()
    async getAll(@Query('take', ParseIntPipe) take: number, @Query('skip', ParseIntPipe) skip: number) {
        return await this.communityService.getAll(take, skip);
    }
}