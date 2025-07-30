import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Modules
import {TodoModule} from './todos/todo.module';
import { AuthModule } from './auth/auth.module';
import { BookmarkModule} from './bookmark/bookmark.module';


@Module({
  imports: [TodoModule,AuthModule,BookmarkModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
