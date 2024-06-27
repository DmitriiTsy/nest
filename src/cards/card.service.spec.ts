import { CardService } from './card.service';
import { Card } from './card.entity';

describe('CardService', () => {
  let cardService: CardService;

  it('findLimits should return a Promise of Card or undefined', () => {
    const result = cardService.findLimits(1);
    expect(result).toBeInstanceOf(Promise);
    result.then((data) => {
      expect(data).toBeInstanceOf(Card);
    });
  });

  it('getTransactionData should return a Promise of boolean', async () => {
    const result = await cardService.getTransactionData(1, 100);
    expect(typeof result).toBe('boolean');
  });

  it('changeLimits should return a boolean', () => {
    const result = cardService.changeLimits(1, 200);
    expect(typeof result).toBe('boolean');
  });
});
