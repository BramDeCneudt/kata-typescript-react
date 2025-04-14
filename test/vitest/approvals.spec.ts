import { execSync } from 'node:child_process';
import { Item, GildedRose } from '@/lib/gilded-rose';
import { describe, expect, test } from 'vitest';

/**
 * This test uses Vitest Snapshot, similar to [Jest Snapshot](https://goo.gl/fbAQLP).
 *
 * There are two test cases here with different styles:
 * <li>"foo" is more similar to the unit test from the 'Java' version
 * <li>"thirtyDays" is more similar to the TextTest from the 'Java' version
 *
 * I suggest choosing one style to develop and deleting the other.
 */

const items : Item[] = [
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

describe('Gilded Rose Golden Test', () => {
  test('Golden Test base test', () => {
    const gildedRose : GildedRose = new GildedRose(items);
    const actualItems = gildedRose.updateQuality();

    expect(actualItems).toMatchSnapshot();
  });

  test('Golden Test test after 5 days', () => {
    const gildedRose : GildedRose = new GildedRose(items);
    let actualItems;
    for (let day = 0; day <= 5; day++) {
      actualItems = gildedRose.updateQuality() ;
    }

    expect(actualItems).toMatchSnapshot();
  });

});
