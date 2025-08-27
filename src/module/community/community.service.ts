import { Injectable, NotFoundException } from "@nestjs/common";
import { CommunityRepository } from "./community.repository";
import { UpdateCommunityDto } from "./dto/updateCommunity.dto";
import { Prisma } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

@Injectable()
export class CommunityService {
    constructor(private readonly communityRepository: CommunityRepository) {}

    async getAll(take: number, skip: number) {
        return this.communityRepository.getAll(take, skip);
    }

    async create(data: Prisma.communityCreateInput) {
        return this.communityRepository.create(data);
    }

    async getBySupertokensId(id: string) {
        const community = await this.communityRepository.getBySupertokensId(id);
        if (!community) {
            throw new NotFoundException('Comunidade não encontrada');
        }
        return community;
    }


    async updateBySupertokensId(id: string, data: UpdateCommunityDto) {
        try {
            return await this.communityRepository.update(id, data);
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError && error.code === 'P2025') {
                throw new NotFoundException(`Comunidade com o ID ${id} não encontrada`);
            }
            throw error;
        }
    }

    async deleteBySupertokensId(id: string) {
        try {
            await this.communityRepository.delete(id);
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError && error.code === 'P2025') {
                throw new NotFoundException(`Comunidade com o ID ${id} não encontrada`);
            }
            throw error;
        }
    }
}
