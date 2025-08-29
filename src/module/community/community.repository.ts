<<<<<<< HEAD
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { UpdateCommunityDto } from "./dto/updateCommunity.dto";
import { Prisma } from "@prisma/client";
=======
import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { CreateCommunityDto } from './dto/createCommunity.dto'
import { UpdateCommunityDto } from './dto/updateCommunity.dto'
>>>>>>> c64af2cdb788e2ed42c5338823f14c3152bcc3e4

@Injectable()
export class CommunityRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async getAll(take: number, skip: number) {
    return await this.prismaService.community.findMany({
      take: take,
      skip: skip
    })
  }

<<<<<<< HEAD
  async getBySupertokensId(id: string) {
    return await this.prismaService.community.findUnique({ where: { supertokens_id: id } });
  }

  async create(data: Prisma.communityCreateInput) {
    return await this.prismaService.community.create({
      data
    });
  }

  async update(id: string, data: UpdateCommunityDto) {
    return await this.prismaService.community.update({
      where: {
        supertokens_id: id
=======
  async create(data: CreateCommunityDto) {
    return await this.prismaService.community.create({
      data
    })
  }

  async getByID(id: number) {
    return await this.prismaService.community.findUnique({
      where: {
        id
      }
    })
  }

  async update(id: number, data: UpdateCommunityDto) {
    return await this.prismaService.community.update({
      where: {
        id
>>>>>>> c64af2cdb788e2ed42c5338823f14c3152bcc3e4
      },
      data
    })
  }

<<<<<<< HEAD
  async delete(id: string) {
    await this.prismaService.community.delete({ where: { supertokens_id: id } })
=======
  async delete(id: number) {
    await this.prismaService.community.delete({ where: { id } })
>>>>>>> c64af2cdb788e2ed42c5338823f14c3152bcc3e4
  }
}
