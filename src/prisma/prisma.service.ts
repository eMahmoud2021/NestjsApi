import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

//const { PrismaClient } = require('@prisma/client')

@Injectable()
export default class PrismaService extends PrismaClient {
    constructor(config: ConfigService){
        super({
            datasources: {
                db:{
                    url: config.get('DATABASE_URL'),
                },
            },
        });
        console.log(config.get('DATABASE_URL'));
    }
}
