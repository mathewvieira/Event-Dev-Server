import supertokens from 'supertokens-node'
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SuperTokensExceptionFilter } from 'supertokens-nestjs';
import UserRoles from 'supertokens-node/recipe/userroles';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  supertokens.init({
    appInfo: {
        appName: 'Event-Dev-Server',
        apiDomain: 'http://localhost:5122',
        websiteDomain: 'http://localhost:5173',
      }
  });
  await UserRoles.createNewRoleOrAddPermissions('admin', []);
  await UserRoles.createNewRoleOrAddPermissions('community', []);
  await UserRoles.createNewRoleOrAddPermissions('user', []);
  app.enableCors({
    origin: ['http://localhost:5173'],
    allowedHeaders: ['content-type', ...supertokens.getAllCORSHeaders()],
    credentials: true,
  })
  app.useGlobalFilters(new SuperTokensExceptionFilter())
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api/v1', {exclude: [ '/health', '' ]});
  await app.listen(process.env.NODE_PORT ?? 5122);
}
bootstrap();
