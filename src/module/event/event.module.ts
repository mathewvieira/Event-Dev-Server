import { Module } from "@nestjs/common";
import { EventRepository } from "./event.repository";
import { EventService } from "./event.service";
import { EventController } from "./event.controller";

@Module({
    providers: [EventRepository, EventService],
    controllers: [EventController],
    exports: []
})

export class EventModule {}