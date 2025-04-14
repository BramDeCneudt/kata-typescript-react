import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "~/components/ui/card"
import { Item } from "~/lib/gilded-rose";
import { Button } from "./ui/button";

interface ItemCardProps {
    item: Item
}

export function ItemCard({item}: ItemCardProps) {
    return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{item.name}</CardTitle>
      </CardHeader>
      <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
                <p>SellIn: {item.sellIn}</p>
                <p>Quality: {item.quality}</p>
            </div>
          </div>
      </CardContent>
    </Card>
    )
}