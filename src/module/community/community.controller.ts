import { Body, Controller, DefaultValuePipe, Delete, Get, Param, ParseIntPipe, Post, Put, Query } from "@nestjs/common";
import { CommunityService } from "./community.service";
import { UpdateCommunityDto } from "./dto/updateCommunity.dto";
import { Prisma } from "@prisma/client";

/*
 * TODA E QUALQUER ROTA ESTARÁ PROTEGIDA (PRECISA LOGAR), SE QUISER QUE UMA ROTA SEJA ACESSIVEL
 * PARA TODOS, ADICIONE O DECORADOR @PublicAccess DO supertokens-nestjs
 * (import { PublicAccess } from "supertokens-nestjs";)
 * */

@Controller('community')
export class CommunityController {
  constructor(private readonly communityService: CommunityService) {}

  @Get()
  async getAll(@Query('take', new DefaultValuePipe(5)) take: number, @Query('skip', new DefaultValuePipe(0)) skip: number) {
    return await this.communityService.getAll(take, skip);
  }

  // O endpoint de criação é usado pelo AuthService, por isso é mantido.
  // A proteção dele é indireta (só o AuthService consegue usá-lo de forma útil).
  @Post()
  async create(@Body() data: Prisma.communityCreateInput) {
    return await this.communityService.create(data);
  }

  @Get(':id')
  async getCommunityBySupertokensId(@Param('id') id: string) {
    return await this.communityService.getBySupertokensId(id);
  }

  @Put(':id')
  async updateCommunityBySupertokensId(@Param('id') id: string, @Body() data: UpdateCommunityDto) {
    return await this.communityService.updateBySupertokensId(id, data);
  }

  @Delete(':id')
  async deleteCommunityBySupertokensId(@Param('id') id: string) {
    await this.communityService.deleteBySupertokensId(id);
  }
}
