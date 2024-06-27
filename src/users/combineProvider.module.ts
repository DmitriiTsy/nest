import { Module } from '@nestjs/common';
import { CardsController } from 'src/cards/cards.controller';
import { CardService } from 'src/cards/card.service';
import { Card } from 'src/cards/card.entity';

@Module({
  controllers: [CardsController],
  providers: [
    CardService,
    {
      provide: 'CARDS_REPOSITORY',
      useValue: Card,
    },
  ],
})
export class CombineProvider {}
