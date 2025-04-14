import type { Item } from "../gilded-rose";
import { AgedBrieStrategy, BackstagePassesStrategy, DefaultStrategy, LegendaryStrategy, type strategy } from "./strategies";

export class StrategyService {

    private static AGED_BRIE_NAME: string = "Aged Brie";
    private static LEGENDARY_NAME: string = "Sulfuras, Hand of Ragnaros";
    private static BACKSTAGE_PASSES_NAME: string = "Backstage passes to a TAFKAL80ETC concert";

    public generateStrategy(item: Item): strategy {
        const name = item.name;
            switch (name) {
                case StrategyService.BACKSTAGE_PASSES_NAME: {
                    return new BackstagePassesStrategy();
                }
                case StrategyService.LEGENDARY_NAME : {
                    return new LegendaryStrategy();
                }
                case StrategyService.AGED_BRIE_NAME : {
                    return new AgedBrieStrategy();
                }
                default : {
                    return new DefaultStrategy();
                }
            }
    }

}
