import { StrategyService } from "./kata/strategy-service";

export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;
  strategyService: StrategyService;

  constructor(items = [] as Array<Item>) {
    this.items = items;
    this.strategyService = new StrategyService
  }

  updateQuality() {

    for (const item of this.items) {
      const strategy = this.strategyService.generateStrategy(item);
      strategy.updateItem(item);
    }

    return this.items;
  }
}
