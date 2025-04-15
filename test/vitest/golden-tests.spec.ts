import { Item, GildedRose } from '@/lib/gilded-rose';
import { describe, expect, test } from 'vitest';


describe('Gilded Rose Golden Test', () => {
  test('Golden Test base test', () => {
    const items: Item[] = [
      new Item("+5 Dexterity Vest", 10, 0), //
      new Item("+6 Dexterity Vest", -1, 10), //
      new Item("Aged Brie", 2, 0), //
      new Item("Aged Brie", 2, 50), //
      new Item("Elixir of the Mongoose", 5, 7), //
      new Item("Sulfuras, Hand of Ragnaros", 0, 80), //
      new Item("Sulfuras, Hand of Ragnaros", -1, 80),
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 50),
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 50),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 50),
      new Item("Backstage passes to a TAFKAL80ETC concert", 0, 49),
      new Item("Conjured Mana Cake", 3, 6),
      new Item("Conjured Mana Cake", -3, 6),
      new Item("Conjured Mana Cake", -3, 3)
    ]
    const gildedRose: GildedRose = new GildedRose(items);
    const actualItems = gildedRose.updateQuality();

    expect(actualItems).toMatchSnapshot();
  });

  test('Golden Test test after 2 days', () => {
    const items: Item[] = [
      new Item("+5 Dexterity Vest", 10, 0), //
      new Item("+6 Dexterity Vest", -1, 10), //
      new Item("Aged Brie", 2, 0), //
      new Item("Aged Brie", 2, 50), //
      new Item("Elixir of the Mongoose", 5, 7), //
      new Item("Sulfuras, Hand of Ragnaros", 0, 80), //
      new Item("Sulfuras, Hand of Ragnaros", -1, 80),
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 50),
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 50),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 50),
      new Item("Backstage passes to a TAFKAL80ETC concert", 0, 49),
      new Item("Conjured Mana Cake", 3, 6),
      new Item("Conjured Mana Cake", -3, 6),
      new Item("Conjured Mana Cake", -3, 3)
    ]
    const gildedRose: GildedRose = new GildedRose(items);
    const actualItemsPerDay: Item[][] = [];
    for (let day = 0; day < 1; day++) {
      actualItemsPerDay.push(gildedRose.updateQuality());
    }

    expect(actualItemsPerDay).toMatchSnapshot();
  });

  test('Golden Test test after 6 days', () => {
    const items: Item[] = [
      new Item("+5 Dexterity Vest", 10, 0), //
      new Item("+6 Dexterity Vest", -1, 10), //
      new Item("Aged Brie", 2, 0), //
      new Item("Aged Brie", 2, 50), //
      new Item("Elixir of the Mongoose", 5, 7), //
      new Item("Sulfuras, Hand of Ragnaros", 0, 80), //
      new Item("Sulfuras, Hand of Ragnaros", -1, 80),
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 50),
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 50),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 50),
      new Item("Backstage passes to a TAFKAL80ETC concert", 0, 49),
      new Item("Conjured Mana Cake", 3, 6),
      new Item("Conjured Mana Cake", -3, 6),
      new Item("Conjured Mana Cake", -3, 3)
    ]

    const gildedRose: GildedRose = new GildedRose(items);
    const actualItemsPerDay: Item[][] = [];
    for (let day = 0; day < 5; day++) {
      actualItemsPerDay.push(gildedRose.updateQuality());
    }

    expect(actualItemsPerDay).toMatchSnapshot();
  });

});
