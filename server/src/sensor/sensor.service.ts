import {Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { SensorDataDTO } from './dto/upload.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SensorService {
    constructor(private readonly prisma: PrismaService) {

    }

    async upload(data: SensorDataDTO){
        const { patientId, timeStamp, heartBeat, temperature } = data;
        const device = await this.prisma.patient.findUnique({
            where: { id: patientId }
        });

        if(!device){
            throw new NotFoundException("Device not found");
        }

        try {
            const newRecord  = await this.prisma.reading.create({
                data: {
                    patientId: patientId,
                    heartBeat: heartBeat,
                    temperature: temperature,
                    timestamp: new Date(timeStamp)
                }
            })

            return {
                status: "success",
                data: newRecord
            }
        } catch (error) {
            throw new InternalServerErrorException("Error uploading data");   
        }

    }

    async getReadingsBydDevice(id: number){
        try {
            const readings = await this.prisma.reading.findMany({
                where: {
                    patientId: parseInt(id.toString())
                }
            })
            return {
                message: "success",
                data: readings
            }
        } catch (error) {
            throw new InternalServerErrorException("Something went wrong")
        }
    }
}
