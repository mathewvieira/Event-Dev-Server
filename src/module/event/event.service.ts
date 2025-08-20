import { Injectable, NotFoundException } from "@nestjs/common";
import { EventRepository } from "./event.repository";

@Injectable()
export class EventService {
    constructor(private readonly eventRepository: EventRepository) {}

    async getById(id: number) {
        await this.verifyEventIsExist(id);
        return await this.eventRepository.getByID(id);
    }

    private async verifyEventIsExist(id: number) {
        if(!await this.eventRepository.getByID(id)) throw new NotFoundException();
    }

    async getAll() {
        return await this.eventRepository.getAll();
    }
}