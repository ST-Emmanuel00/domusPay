import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [

    // Use a static view to project info
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),

    // Connection to no relational db
    MongooseModule.forRoot('mongodb://localhost:27017/nest-domus-pay'),

    UsersModule
  ],
})
export class AppModule { }
