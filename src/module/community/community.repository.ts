import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateCommunityDto } from "./dto/createCommunity.dto";
import { UpdateCommunityDto } from "./dto/updateCommunity.dto";

@Injectable()
export class CommunityRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async getAll(take: number, skip: number) {
    return await this.prismaService.community.findMany({
      take: take,
      skip: skip,
    })
  }

  async create(data: CreateCommunityDto) {
    return await this.prismaService.community.create({
      data
    });
  }

  async getByID(id: number) {
    return await this.prismaService.community.findUnique({ where: { id } })
  }

  async update(id: number, data: UpdateCommunityDto) {
    return await this.prismaService.community.update({
      where: {
        id
      },
      data
    })
  }

  async delete(id: number) {
    await this.prismaService.community.delete({ where: { id } })
  }
}
