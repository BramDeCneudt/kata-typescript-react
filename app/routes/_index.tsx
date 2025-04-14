import { SidebarProvider, SidebarTrigger } from "~/components/ui/sidebar"
import { AppSidebar } from "~/components/app-sidebar"
import type { Route } from "./+types/home";
import { GildedRose, Item } from "~/lib/gilded-rose";
import { ItemCard } from "~/components/ItemCard";
import { useEffect, useState } from "react";
import { Button } from "~/components/ui/button";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Kata-Typescript" },
  ];
}

export default function Home() {
  const [amountOfDays, setAmountOfDays] = useState<number>(0)
  const [items, setItems] = useState<Item[]>([
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

  ]);

  const gildedRose = new GildedRose(items);

  const goToNextDay = () => {
    setAmountOfDays((prevValue) => prevValue + 1)
    gildedRose.updateQuality();
    setItems(gildedRose.items)
  }

  return (
    <>
      <div className="flex flex-row justify-center my-5 gap-4">
        <Button onClick={goToNextDay}>
          Next day
        </Button>
        <p>Day: {amountOfDays}</p>
      </div>
      <div className="pl-5 flex flex-row gap-4 justify-center flex-wrap">
        {items.map((item) => <ItemCard item={item} />)}
      </div>
    </>
  )
}
