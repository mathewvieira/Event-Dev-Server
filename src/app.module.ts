import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { CommunityModule } from './module/community/community.module';

@Module({
  imports: [PrismaModule, CommunityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
