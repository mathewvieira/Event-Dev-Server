import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { UpdateCommunityDto } from "./dto/updateCommunity.dto";
import { Prisma } from "@prisma/client";

@Injectable()
export class CommunityRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async getAll(take: number, skip: number) {
    return this.prismaService.community.findMany({
      take: take,
      skip: skip,
    });
  }

  async getBySupertokensId(id: string) {
    return this.prismaService.community.findUnique({
      where: { supertokens_id: id },
    });
  }

  async getByID(id: number) {
    return this.prismaService.community.findUnique({
      where: { id },
    });
  }

  async create(data: Prisma.communityCreateInput) {
    return this.prismaService.community.create({
      data,
    });
  }

  async updateBySupertokensId(id: string, data: UpdateCommunityDto) {
    return this.prismaService.community.update({
      where: {
        supertokens_id: id,
      },
      data,
    });
  }

  async deleteBySupertokensId(id: string) {
    await this.prismaService.community.delete({
      where: { supertokens_id: id },
    });
  }
}
