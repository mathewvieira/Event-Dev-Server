import { Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Post, Query } from "@nestjs/common";
import { EventService } from "./event.service";
import { CreateCommunityDto } from "../community/dto/createCommunity.dto";
import { skip } from "node:test";

@Controller('event')
export class EventController {
    constructor(private readonly eventService: EventService) {}

    @Post('')
    async create () {
        
    }

    @Get(':id')
    async getByID(@Param('id', ParseIntPipe) id: number) {
        return await this.eventService.getById(id);
    }

    @Get('')
    async getAll(@Query('take', new DefaultValuePipe(5)) take: number, @Query('skip', new DefaultValuePipe(0)) skip: number) {
        return await this.eventService.getAll(take, skip);
    }

     
}