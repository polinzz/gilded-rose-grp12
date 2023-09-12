import { Item } from "./Item";
export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  doUpdateQuality(): Item[] {
    for (const currentItem of this.items) {
      console.log(`INPUT=> Item Name :${currentItem.name}, Quality: ${currentItem.quality}, SellIn: ${currentItem.sellIn}`);
      switch (currentItem.name) {
        case "Aged Brie":
        case "Backstage passes to a TAFKAL80ETC concert":
          if (isLessThanMaxQuality(currentItem.quality)) {
            increaseQuality(currentItem);
            if (currentItem.name === "Backstage passes to a TAFKAL80ETC concert") {
              isSellInLessthan(currentItem);
            }
          }
          break;
        default:
          decreaseQuality(currentItem);
          break;
      }

      if (currentItem.name !== "Sulfuras, Hand of Ragnaros") {
        currentItem.sellIn--;
      }

      if (currentItem.sellIn < 0) {
        switch (currentItem.name) {
          case "Aged Brie":
            increaseQuality(currentItem);
            break;
          case "Backstage passes to a TAFKAL80ETC concert":
            currentItem.quality = 0;
            break;
          case "Sulfuras, Hand of Ragnaros":
            break;
          default:
            if (currentItem.quality > 0) {
              decreaseQuality(currentItem);
            }
            break;
        }
      }

      console.log(`OUTPUT=> Item Name :${currentItem.name}, Quality: ${currentItem.quality}, SellIn: ${currentItem.sellIn}`);
    }
    return this.items;
  }
}

const MAXIMUM_QUALITY = 50;
const MINIMUM_QUALITY = 0;

const isLessThanMaxQuality = (quality: number) => quality < MAXIMUM_QUALITY;
const isGreaterThanMinQuality = (quality: number) => quality > MINIMUM_QUALITY;

const increaseQuality = (item: Item) => {
  item.quality = isLessThanMaxQuality(item.quality) ? item.quality + 1 : item.quality;
};

const decreaseQuality = (item: Item) => {
  if (item.name === 'Sulfuras, Hand of Ragnaros') return;
  item.quality = isGreaterThanMinQuality(item.quality) ? item.quality - 1 : item.quality;
}

const isSellInLessthan = (item: Item) => {
  item.sellIn < 11 ? increaseQuality(item) : item.quality;
  item.sellIn < 6 ? increaseQuality(item) : item.quality;
}