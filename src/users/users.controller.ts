// import { Controller, Get, Param } from '@nestjs/common';
// import { UsersService } from './users.service';
// import { User } from './user.entity';

// @Controller('users')
// export class UsersController {
//   constructor(private readonly usersService: UsersService) {}

//   @Get()
//   findAll(): Promise<User[]> {
//     return this.usersService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string): Promise<User> {
//     return this.usersService.findOne(+id);
//   }
// }
