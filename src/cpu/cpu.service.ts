import { Injectable } from '@nestjs/common';
import { PowerService } from '../power/power.service';
@Injectable()
export class CpuService {
    constructor (private readonly powerService: PowerService) {}

    compute(a: number, b:number) {
        console.log('Drawing 10 watts of power from the power service');
        this.powerService.supplyPower(10);
        return a+b;
    }
}
