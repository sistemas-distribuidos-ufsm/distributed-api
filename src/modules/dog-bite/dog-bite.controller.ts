import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Headers,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FiltersDto } from '../utils/filters.dto';
import { DogBiteService } from './dog-bite.service';
import { CreateDogBiteDto } from './dto/create-dog-bite.dto';
import { UpdateDogBiteDto } from './dto/update-dog-bite.dto';
import { DogBite } from './entities/dog-bite.entity';

@ApiTags('DogBiteController')
@Controller('dog-bite')
export class DogBiteController {
  constructor(private dogBiteService: DogBiteService) {}
  @Post()
  async create(@Body() data: CreateDogBiteDto): Promise<DogBite> {
    console.log(
      `[LOGGER]\n- Method: CREATE | \n- REQUEST: ${JSON.stringify(data)}\n`,
    );

    return await this.dogBiteService.create(data);
  }

  @Get()
  async findAll(@Headers() filters: FiltersDto): Promise<DogBite[]> {
    console.log(
      `[LOGGER]\n- Method: FIND ALL | \n- FILTERS: ${JSON.stringify(
        filters,
      )}\n`,
    );

    return await this.dogBiteService.findAll(filters);
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<DogBite> {
    console.log(`[LOGGER]\n- Method: FIND BY ID | \n- ID: ${id}\n`);

    return this.dogBiteService.findById(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    console.log(`[LOGGER]\n- Method: DELETE | \n- ID: ${id}\n`);

    return this.dogBiteService.delete(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() data: UpdateDogBiteDto,
  ): Promise<void> {
    return this.dogBiteService.update(id, data);
  }
}
