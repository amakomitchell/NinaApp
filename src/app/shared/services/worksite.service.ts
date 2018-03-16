import { Injectable } from '@angular/core';

import { Worksite } from '../models/worksite.model';

@Injectable()
export class WorksiteService {
    private worksites: Worksite[] = [
        new Worksite('Illupeju Plastic Works Delivery Truck Driver ILU-199DR-170801',
                    8.00, 8.00, 8.00, 8.00, 8.00, 6.00,
                    0.00, 46.00),
        
        new Worksite('Illupeju Plastic Works Delivery Truck Driver ILU-199DR-170802',
                    8.00, 8.00, 8.00, 8.00, 8.00, 6.00,
                    8.00, 54.00)
    ];

    constructor() {}

    getWorksite() {
        return this.worksites.slice();
    }
}
