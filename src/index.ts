import { Item } from "./Item";
import { handleItemQuality, handleExpiredItem } from "./qualityFunction";
export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  doUpdateQuality(): Item[] {
    for (const currentItem of this.items) {
      handleItemQuality(currentItem);

      if (currentItem.name !== "Sulfuras, Hand of Ragnaros")
        currentItem.sellIn--;

      if (currentItem.sellIn < 0)
        handleExpiredItem(currentItem);

    }
    return this.items;
  }
}



