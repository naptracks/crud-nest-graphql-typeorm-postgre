import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

// We are using the decorator @Injectable() to tell NestJS that this is a service
// We are creating a UserService with 5 methods: findAll, findOne, create, update and delete

@Injectable()
export class UsersService {
  constructor(
    // We are using the decorator @InjectRepository(User) to tell NestJS that we want to inject the repository of the User entity
    // We are using the decorator @Repository(User) to tell NestJS that we want to inject the repository of the User entity
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<User> {
    return this.userRepository.findOne({ where: { id } });
  }

  async create(user: Partial<User>): Promise<User> {
    const newuser = this.userRepository.create(user);
    return this.userRepository.save(newuser);
  }

  async update(id: number, user: Partial<User>): Promise<User> {
    await this.userRepository.update(id, user);
    return this.userRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
