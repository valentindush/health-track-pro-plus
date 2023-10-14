import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { SensorDataDTO } from './dto/upload.dto';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterDTO } from './dto/register.dto';

@Injectable()
export class SensorService {
    constructor(private readonly prisma: PrismaService) {

    }

    async upload(data: SensorDataDTO){
        const { deviceId, value, timeStamp, heartBeat, temperature } = data;
        const device = await this.prisma.device.findUnique({
            where: { id: parseInt(deviceId) }
        });

        if(!device){
            throw new NotFoundException("Device not found");
        }

        try {
            const newRecord  = await this.prisma.reading.create({
                data: {
                    deviceId: parseInt(deviceId),
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
}
