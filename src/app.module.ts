import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { CommunityModule } from './module/community/community.module';
import { ConfigModule } from '@nestjs/config';
import { EventModule } from './module/event/event.module';

@Module({
  imports: [PrismaModule,
    CommunityModule,
    EventModule,
    ConfigModule.forRoot({isGlobal: true})
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
