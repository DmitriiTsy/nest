import { Inject, Injectable } from '@nestjs/common';
import { Card } from './card.entity';

@Injectable()
export class CardService {
  constructor(
    @Inject('CARDS_REPOSITORY')
    private cardsRepository: typeof Card,
  ) {}

  findLimits(cardId: any) {
    return this.cardsRepository.findOne({ where: { id: cardId } });
  }

  async getTransactionData(cardId: any, amount: any) {
    const card = await this.cardsRepository.findOne({
      where: { id: cardId, amount: amount },
    });
    const limit = card.limit;

    if (limit > card.amount) {
      await this.cardsRepository.create({
        where: { id: cardId, limit: amount },
      });
      return true;
    } else {
      return false;
    }
  }

  changeLimits(cardId: any, limit: any) {
    const card = this.cardsRepository.update(
      { id: cardId },
      { limit: limit, where: { id: cardId } },
    );
    return !!card;
  }
}
