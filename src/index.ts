import { Item } from "./Item";
import { handleItemQuality, handleExpiredItem } from "./qualityFunction";
export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  doUpdateQuality(): Item[] {
    for (const currentItem of this.items) {
      console.log(`INPUT=> Item Name :${currentItem.name}, Quality: ${currentItem.quality}, SellIn: ${currentItem.sellIn}`);

      handleItemQuality(currentItem);

      if (currentItem.name !== "Sulfuras, Hand of Ragnaros") {
        currentItem.sellIn--;
      }

      if (currentItem.sellIn < 0) {
        handleExpiredItem(currentItem);
      }

      console.log(`OUTPUT=> Item Name :${currentItem.name}, Quality: ${currentItem.quality}, SellIn: ${currentItem.sellIn}`);
    }
    return this.items;
  }
}



