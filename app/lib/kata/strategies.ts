import type { Item } from "../gilded-rose";

export interface strategy {
    updateItem(item: Item): void;
}

export class DefaultStrategy implements strategy {

    protected maxQualityStandardItem: number = 50;
    protected minQualityStandardItem: number = 0;

    public updateItem(item: Item): void {
        if (item.sellIn > 0) {
            item.quality -= 1;
        } else {
            item.quality -= 2;
        }
        this.reduceSellInAndCheckMaxAndMinQuality(item);

    }

    /**
     * reduceSellInAndCheckMaxAndMinQuality reduces the sellIn by 1 day
     * and checks if the max and min quality of a standard item has not been exceeded
     * @param item
     */
    protected reduceSellInAndCheckMaxAndMinQuality(item: Item): void {
        if (item.quality > this.maxQualityStandardItem) {
            item.quality = this.maxQualityStandardItem;
        }

        if (item.quality < this.minQualityStandardItem) {
            item.quality = this.minQualityStandardItem;
        }

        item.sellIn -= 1;
    }
}

export class AgedBrieStrategy extends DefaultStrategy {

    public updateItem(item: Item): void {
        if (item.sellIn > 0) {
            item.quality += 1;
        } else {
            item.quality += 2;
        }
        this.reduceSellInAndCheckMaxAndMinQuality(item);
    }

}

export class BackstagePassesStrategy extends DefaultStrategy {

    public updateItem(item: Item): void {
        if (item.sellIn >= 11) {
            item.quality += 1;
        } else if (item.sellIn >= 6) {
            item.quality += 2;
        } else if (item.sellIn > 0) {
            item.quality += 3;
        } else {
            item.quality = 0;
        }

        this.reduceSellInAndCheckMaxAndMinQuality(item);
    }
}


export class ConjuredStrategy extends DefaultStrategy {

    public updateItem(item: Item): void {
        if (item.sellIn > 0) {
            item.quality -= 2;
        } else {
            item.quality -= 4;
        }

        this.reduceSellInAndCheckMaxAndMinQuality(item);
    }
}

export class LegendaryStrategy extends DefaultStrategy {

    protected standardQualityLegendaryItem: number = 80;

    public updateItem(item: Item): void {
        this.possibleFixLegendaryItem(item);
        // NOOP
    }

    /**
     * possibleFixLegendaryItem
     * It should not happen that the quality of the item should change,
     * so a validation is placed here to check if that happens and logs a warning when that happens
     * the item is also "fixed" by resetting the value to its default value.
     * @param item
     */
    //TODO add warning detection so this is picked up whenever this is logged
    protected possibleFixLegendaryItem(item: Item): void {
        if (item.quality != this.standardQualityLegendaryItem) {
            console.error("WARNING: quality of legendary item has changed while it should not change, fixing it by setting the default quality value: " + item);
            item.quality = this.standardQualityLegendaryItem;
        }
    }

}