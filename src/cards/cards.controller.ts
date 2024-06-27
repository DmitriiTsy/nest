import { Controller, Get, Param, Body, Post } from '@nestjs/common';
import { CardService } from './card.service';

@Controller('card-limits')
export class CardsController {
  constructor(private readonly cardService: CardService) {}

  @Get(':cardId')
  findLimits(@Param('cardId') cardId: number) {
    return this.cardService.findLimits(+cardId);
  }

  @Post(':cardId/check-transaction')
  getTransactionData(
    @Param('cardId') cardId: number,
    @Body() body: { amount: number },
  ) {
    return this.cardService.getTransactionData(+cardId, body.amount);
  }

  @Post(':cardId')
  changeLimits(
    @Param('cardId') cardId: number,
    @Body() body: { limit: number },
  ) {
    return this.cardService.changeLimits(+cardId, body.limit);
  }
}
