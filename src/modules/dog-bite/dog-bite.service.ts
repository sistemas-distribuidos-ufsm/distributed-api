import {
  HttpException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FiltersDto } from '../utils/filters.dto';
import { CreateDogBiteDto } from './dto/create-dog-bite.dto';
import { UpdateDogBiteDto } from './dto/update-dog-bite.dto';
import { DogBite } from './entities/dog-bite.entity';

@Injectable()
export class DogBiteService {
  private HTTP_STATUS_BAD_REQUEST: number = 400;

  constructor(@InjectModel(DogBite) private dogBiteModel: typeof DogBite) {}

  async create(data: CreateDogBiteDto): Promise<DogBite> {
    try {
      const dogBite = await this.dogBiteModel.create(data);

      return dogBite;
    } catch (error) {
      throw new HttpException(
        {
          message: error.message,
          status: this.HTTP_STATUS_BAD_REQUEST,
        },
        this.HTTP_STATUS_BAD_REQUEST,
      );
    }
  }

  async findAll(filters: FiltersDto): Promise<DogBite[]> {
    try {
      const { limit, offset } = filters;

      const dogBites: DogBite[] = await this.dogBiteModel.findAll({
        limit: limit,
        offset: offset,
      });

      return dogBites;
    } catch (error) {
      throw new HttpException(
        {
          message: error.message,
          status: this.HTTP_STATUS_BAD_REQUEST,
        },
        this.HTTP_STATUS_BAD_REQUEST,
      );
    }
  }

  async findById(id: number): Promise<DogBite | string> {
    try {
      const dogBite: DogBite = await this.dogBiteModel.findByPk(id);

      return dogBite ? dogBite : "Dog bite not found";
    } catch (error) {
      throw new HttpException(
        {
          message: error.message,
          status: this.HTTP_STATUS_BAD_REQUEST,
        },
        this.HTTP_STATUS_BAD_REQUEST,
      );
    }
  }

  async delete(id: number): Promise<void | string> {
    try {
      const dogBite: DogBite = await this.dogBiteModel.findByPk(id);

      if (!dogBite) {
        return 'Dog bite not found';
      }

      await dogBite.destroy();
    } catch (error) {
      throw new HttpException(
        {
          message: error.message,
          status: this.HTTP_STATUS_BAD_REQUEST,
        },
        this.HTTP_STATUS_BAD_REQUEST,
      );
    }
  }

  async update(id: number, data: UpdateDogBiteDto): Promise<void | string> {
    try {
      const dogBite: DogBite = await this.dogBiteModel.findByPk(id);

      if (!dogBite) {
        return 'Dog bite not found';
      }

      await this.dogBiteModel.update(data, {
        where: { id },
      });
    } catch (error) {
      throw new HttpException(
        {
          message: error.message,
          status: this.HTTP_STATUS_BAD_REQUEST,
        },
        this.HTTP_STATUS_BAD_REQUEST,
      );
    }
  }
}
