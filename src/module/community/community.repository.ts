import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { UpdateCommunityDto } from "./dto/updateCommunity.dto";
import { Prisma } from "@prisma/client";

@Injectable()
export class CommunityRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async getAll(take: number, skip: number) {
    return await this.prismaService.community.findMany({
      take: take,
      skip: skip,
    })
  }

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
      },
      data
    })
  }

  async delete(id: string) {
    await this.prismaService.community.delete({ where: { supertokens_id: id } })
  }
}
