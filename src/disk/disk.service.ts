import { Injectable } from '@nestjs/common';
import { PowerService } from '../power/power.service';
@Injectable()
export class DiskService {
    constructor (private readonly powerService: PowerService) {}

    getData(data: string) {
        console.log('Drawing 50 watts of power from the power service');
        this.powerService.supplyPower(50);
        return data;
    }
}
