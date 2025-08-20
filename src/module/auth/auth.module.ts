import { Module } from "@nestjs/common";
import { APP_GUARD } from "@nestjs/core";
import { SuperTokensAuthGuard, SuperTokensModule } from "supertokens-nestjs";
import EmailPassword from 'supertokens-node/recipe/emailpassword';
import Session from 'supertokens-node/recipe/session';
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import UserRoles from 'supertokens-node/recipe/userroles';

@Module({
  imports: [
    SuperTokensModule.forRoot({
      framework: 'express',
      appInfo: {
        appName: 'Event-Dev-Server',
        apiDomain: 'http://localhost:5122',
        websiteDomain: 'http://localhost:5173',
      },
      recipeList: [
        EmailPassword.init(),
        Session.init(),
        UserRoles.init(),
      ],
    }),
  ],
  controllers: [
    AuthController,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: SuperTokensAuthGuard,
    },
    AuthService
  ],
})
export class AuthModule {}
