import { Item, GildedRose } from '@/lib/gilded-rose';
import { describe, expect, test } from 'vitest';

describe('Normal items', () => {
  test('with positive sellIn should degrade normally', () => {
    const itemName = "Normal Item";
    const items: Item[] = [new Item(itemName, 5, 20)];
    const app: GildedRose = new GildedRose(items);

    app.updateQuality();

    expect(itemName).toBe(app.items[0].name);
    expect(19).toBe(app.items[0].quality);
    expect(4).toBe(app.items[0].sellIn);
  });


  test('with almost positive sellIn should degrade normally', () => {
    const itemName = "Normal Item";
    const items: Item[] = [new Item(itemName, 1, 20)];
    const app: GildedRose = new GildedRose(items);

    app.updateQuality();

    expect(itemName).toBe(app.items[0].name);
    expect(19).toBe(app.items[0].quality);
    expect(0).toBe(app.items[0].sellIn);
  });

  test('with zero sellIn should degrade twice as fast', () => {
    const itemName = "Degraded Item";
    const items: Item[] = [new Item(itemName, 0, 20)];
    const app: GildedRose = new GildedRose(items);

    app.updateQuality();

    expect(itemName).toBe(app.items[0].name);
    expect(18).toBe(app.items[0].quality);
    expect(-1).toBe(app.items[0].sellIn);
  });

  test('with zero quality but positive sellIn then quality should remain zero', () => {
    const itemName = "Zero Quality Item";
    const items: Item[] = [new Item(itemName, 5, 0)];
    const app: GildedRose = new GildedRose(items);

    app.updateQuality();

    expect(itemName).toBe(app.items[0].name);
    expect(0).toBe(app.items[0].quality);
    expect(4).toBe(app.items[0].sellIn);
  });


  test('with zero quality and negative sellIn the quality should remain at zero', () => {
    const itemName = "Zero Degraded Quality Item";
    const items: Item[] = [new Item(itemName, -5, 0)];
    const app: GildedRose = new GildedRose(items);

    app.updateQuality();

    expect(itemName).toBe(app.items[0].name);
    expect(0).toBe(app.items[0].quality);
    expect(-6).toBe(app.items[0].sellIn);
  });
});


describe('Aged Brie Items', () => {

  test('with postive sellIn should increase quality by 1', () => {
    const itemName = "Aged Brie";
    const items: Item[] = [new Item(itemName, 5, 20)];
    const app: GildedRose = new GildedRose(items);

    app.updateQuality();

    expect(itemName).toBe(app.items[0].name);
    expect(21).toBe(app.items[0].quality);
    expect(4).toBe(app.items[0].sellIn);
  });


  test('with negative sellIn should increase quality by 2', () => {
    const itemName = "Aged Brie";
    const items: Item[] = [new Item(itemName, -5, 20)];
    const app: GildedRose = new GildedRose(items);

    app.updateQuality();

    expect(itemName).toBe(app.items[0].name);
    expect(22).toBe(app.items[0].quality);
    expect(-6).toBe(app.items[0].sellIn);
  });

  test('with maximum quality then quality should not increase', () => {
    const itemName = "Aged Brie";
    const items: Item[] = [new Item(itemName, 5, 50)];
    const app: GildedRose = new GildedRose(items);

    app.updateQuality();

    expect(itemName).toBe(app.items[0].name);
    expect(50).toBe(app.items[0].quality);
    expect(4).toBe(app.items[0].sellIn);
  });

});


describe('Legendary Items', () => {

  test('with postive sellIn then quality should stay the same', () => {
    const itemName = "Sulfuras, Hand of Ragnaros";
    const items: Item[] = [new Item(itemName, 4, 80)];
    const app: GildedRose = new GildedRose(items);

    app.updateQuality();

    expect(itemName).toBe(app.items[0].name);
    expect(80).toBe(app.items[0].quality);
    expect(4).toBe(app.items[0].sellIn);
  });


  test('with zero sellIn then quality should stay the same', () => {
    const itemName = "Sulfuras, Hand of Ragnaros";
    const items: Item[] = [new Item(itemName, 0, 80)];
    const app: GildedRose = new GildedRose(items);

    app.updateQuality();

    expect(itemName).toBe(app.items[0].name);
    expect(80).toBe(app.items[0].quality);
    expect(0).toBe(app.items[0].sellIn);
  });

});


describe('Backstage Passes', () => {

  test('with more then 10 sellIn should increase quality by 1', () => {
    const itemName = "Backstage passes to a TAFKAL80ETC concert";
    const items: Item[] = [new Item(itemName, 15, 40)];
    const app: GildedRose = new GildedRose(items);

    app.updateQuality();

    expect(itemName).toBe(app.items[0].name);
    expect(41).toBe(app.items[0].quality);
    expect(14).toBe(app.items[0].sellIn);
  });


  test('with 10 sellIn should increase quality by 2', () => {
    const itemName = "Backstage passes to a TAFKAL80ETC concert";
    const items: Item[] = [new Item(itemName, 10, 40)];
    const app: GildedRose = new GildedRose(items);

    app.updateQuality();

    expect(itemName).toBe(app.items[0].name);
    expect(42).toBe(app.items[0].quality);
    expect(9).toBe(app.items[0].sellIn);
  });

  test('with 5 sellIn should increase quality by 3', () => {
    const itemName = "Backstage passes to a TAFKAL80ETC concert";
    const items: Item[] = [new Item(itemName, 5, 40)];
    const app: GildedRose = new GildedRose(items);

    app.updateQuality();

    expect(itemName).toBe(app.items[0].name);
    expect(43).toBe(app.items[0].quality);
    expect(4).toBe(app.items[0].sellIn);
  });

  test('with 5 sellIn but almost maximum quality should increase quality by 2 to maximum quality', () => {
    const itemName = "Backstage passes to a TAFKAL80ETC concert";
    const items: Item[] = [new Item(itemName, 5, 48)];
    const app: GildedRose = new GildedRose(items);

    app.updateQuality();

    expect(itemName).toBe(app.items[0].name);
    expect(50).toBe(app.items[0].quality);
    expect(4).toBe(app.items[0].sellIn);
  });

  test('with 0 sellIn should drop quality to 0', () => {
    const itemName = "Backstage passes to a TAFKAL80ETC concert";
    // TODO kata-5 is this correct? Should drop to 0 already at day 0?
    const items: Item[] = [new Item(itemName, -1, 50)];
    const app: GildedRose = new GildedRose(items);

    app.updateQuality();

    expect(itemName).toBe(app.items[0].name);
    expect(0).toBe(app.items[0].quality);
    expect(-2).toBe(app.items[0].sellIn);
  });

});
