import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePatientDTO } from './dto/create.dto';
import { UpdatePatientDTO } from './dto/update.dto';

@Injectable()
export class PatientService {

  constructor(private prisma: PrismaService){}

  async create(data: CreatePatientDTO) {
    const p = await this.prisma.patient.findUnique({
      where: {
        nationalId: data.nationalId
      }
    })

    if(p){
      throw new BadRequestException("Patient with the provided national ID already exists")
    }

    try {
      const patent = await this.prisma.patient.create({
        data
      })

      return {
        status: "success",
        data: patent
      }

    } catch (err) {
      throw new InternalServerErrorException("Something went wrong")
    }

  }
  async getById(id: number) {
    try {
      const patient = await this.prisma.patient.findUnique({
        where: {
          id: parseInt(id.toString())
        }
      })

      return {
        status: "success",
        data: patient
      }
    } catch (error) {
      throw new InternalServerErrorException("Something went wrong")
    }
  }
  async getAll() {
    try {
      const patients = await this.prisma.patient.findMany()
      return {
        status: "success",
        data: patients
      }
    } catch (error) {
      return new InternalServerErrorException("Something went wrong")
    }
  }
  async updateById(id: number, data: UpdatePatientDTO) {
    const p = await this.prisma.patient.findUnique({
      where: {
        id: parseInt(id.toString())
      }
    })

    if(!p) {
      throw new NotFoundException("Patient with the provided ID does not exist")
    }
    try {
      const patient = await this.prisma.patient.update({
        where: {
          id: parseInt(id.toString())
        },
        data
      })

      return {
        status: "success",
        data: patient
      }
    } catch (error) {
      throw new InternalServerErrorException("Something went wrong")
    }
  }
  async deleteById(id: number) {
    const p = await this.prisma.patient.findUnique({
      where: {
        id: parseInt(id.toString())
      }
    })

    if(!p) {
      throw new NotFoundException("Patient with the provided ID does not exist")
    }
    try {
      const patient = await this.prisma.patient.delete({
        where: {
          id: parseInt(id.toString())
        }
      })

      return {
        status: "success",
        data: patient
      }
    } catch (error) {
      throw new InternalServerErrorException("Something went wrong")
    }
  }
}
