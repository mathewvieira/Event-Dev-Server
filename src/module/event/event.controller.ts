import { Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { EventService } from "./event.service";
import { CreateCommunityDto } from "../community/dto/createCommunity.dto";

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
    async getAll() {
        return await this.eventService.getAll();
    }

     
}