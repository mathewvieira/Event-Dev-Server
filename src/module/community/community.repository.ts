import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class CommunityRepository {
    constructor(private readonly prismaService: PrismaService) {}

    async getAll(take: number, skip: number) {
        return await this.prismaService.community.findMany({
            take,
            skip,
        })
    }
}