import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { PatientService } from './patient.service';
import { CreatePatientDTO } from './dto/create.dto';
import { UpdatePatientDTO } from './dto/update.dto';

@Controller('patient')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Post("create")
  create(@Body() data: CreatePatientDTO) {
    return this.patientService.create(data);
  }

  @Get("get/:id")
  get(@Param("id") id:number) {
    return this.patientService.getById(id);
  }
  
  @Get("get-all")
  getAll() {
    return this.patientService.getAll();
  }
  
  @Patch("update/:id")
  update(@Param("id") id:number, @Body () data: UpdatePatientDTO) {
    return this.patientService.updateById(id, data);
  }

  @Delete("delete/:id")
  delete(@Param("id") id:number) {
    return this.patientService.deleteById(id);
  }
}
