<<<<<<< HEAD
import { Injectable, NotFoundException } from "@nestjs/common";
import { CommunityRepository } from "./community.repository";
import { UpdateCommunityDto } from "./dto/updateCommunity.dto";
import { Prisma } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
=======
import { Injectable, NotFoundException } from '@nestjs/common'
import { CommunityRepository } from './community.repository'
import { CreateCommunityDto } from './dto/createCommunity.dto'
import { UpdateCommunityDto } from './dto/updateCommunity.dto'
>>>>>>> c64af2cdb788e2ed42c5338823f14c3152bcc3e4

@Injectable()
export class CommunityService {
  constructor(private readonly communityRepository: CommunityRepository) {}

<<<<<<< HEAD
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
=======
  async getAll(take: number, skip: number) {
    return await this.communityRepository.getAll(take, skip)
  }

  async create(data: CreateCommunityDto) {
    const user = await this.communityRepository.create(data)
    return user
  }

  async getByID(id: number) {
    await this.isExistCommunity(id)
    return await this.communityRepository.getByID(id)
  }

    async isExistCommunity(id: number) {
        if(!await this.communityRepository.getByID(id)) throw new NotFoundException('Comunidade não encontrada!');
    }

    async update(id: number, data: UpdateCommunityDto) {
        await this.isExistCommunity(id);

    return await this.communityRepository.update(id, data)
  }

  async delete(id: number) {
    await this.isExistCommunity(id)
    await this.communityRepository.delete(id)
  }
>>>>>>> c64af2cdb788e2ed42c5338823f14c3152bcc3e4
}
