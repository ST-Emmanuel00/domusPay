import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserShema } from './entities/user.entity';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [MongooseModule.forFeature([
    {
      name: User.name,
      schema: UserShema
    }]

  )]
})
export class UsersModule { }
