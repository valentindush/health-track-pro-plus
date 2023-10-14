import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterDTO } from './dto/register.dto';

@Injectable()
export class DeviceService {
    constructor(private readonly prisma: PrismaService) {

    }

    async register(data: RegisterDTO){

        const device = await this.prisma.device.findUnique({
            where: {
                name: data.name
            }
        })

        if(device){
            throw new BadRequestException("Device already registered");
        }
        
        try {
            const newDevice = await this.prisma.device.create({
                data: {
                    name: data.name,
                }
            })
            return {
                status: "success",
                data: newDevice
            }
        } catch (err) {
            throw new InternalServerErrorException("Error registering device");
        }
    }

    async getDevices(){
        try {

            const devices = await this.prisma.device.findMany()
            return {
                message: "success",
                data: devices
            }
            
        } catch (err) {
            throw new InternalServerErrorException("Something went wrong")
        }
    }

    async getById(id:number){
        try{
            const device = await this.prisma.device.findUnique({
                where: {
                    id: parseInt(id.toString())
                }
            })
            return {
                message: "success",
                data: device
            }
        }catch(err){
            throw new InternalServerErrorException("Something Went Wrong")
        }
    }

    async deleteById(id: number){
        try {
            const deleted = this.prisma.device.delete({
                where: {
                    id: parseInt(id.toString())
                }
            })

            return{
                message: "success",
                data: deleted
            }
        } catch (err) {
            throw new InternalServerErrorException("Something went wrong")
        }
    }
}
