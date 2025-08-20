import { Inject, MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PrismaModule } from './prisma/prisma.module'
import { CommunityModule } from './module/community/community.module'
import { ConfigModule } from '@nestjs/config'
import { EventModule } from './module/event/event.module'
import { RateLimiterService } from './module/rateLimiter/rate-limiter.service'
import { RateLimiterModule } from './module/rateLimiter/rate-limiter.module'
import { RateLimitMiddleware } from './helper/abuse-limit-request.helper'

@Module({
  imports: [PrismaModule, CommunityModule, ConfigModule.forRoot({ isGlobal: true }), RateLimiterModule,EventModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RateLimitMiddleware).forRoutes('*')
  }
}
