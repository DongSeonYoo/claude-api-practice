import { Module } from '@nestjs/common';
import { ClaudeModule } from './claude/claude.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ClaudeModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
