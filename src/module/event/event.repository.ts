import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class EventRepository {
    constructor(private readonly prismaService: PrismaService) {}

    async create() {

    }

    async getByID(id: number) {
        return await this.prismaService.event.findUnique({where: {id}});
    }

    async getAll() {
        return await this.prismaService.event.findMany();
    }
}