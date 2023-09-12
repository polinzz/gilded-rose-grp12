import { Item } from "./Item";
export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  doUpdateQuality(): Item[] {
    for (const currentItem of this.items) {
      console.log(`INPUT=> Item Name :${currentItem.name}, Quality: ${currentItem.quality}, SellIn: ${currentItem.sellIn}`);
      if (currentItem.name != "Aged Brie" && currentItem.name != "Backstage passes to a TAFKAL80ETC concert") {
        decreaseQuality(currentItem)
      } else {
        if (this.isLessThanMaxQuality(currentItem.quality)) {
          this.increaseQuality(currentItem)
          if (currentItem.name == "Backstage passes to a TAFKAL80ETC concert") {
            isSellInLessthan(currentItem)
          }
        }
      }
      if (currentItem.name != "Sulfuras, Hand of Ragnaros") {
        currentItem.sellIn = currentItem.sellIn - 1;
      }
      if (currentItem.sellIn < 0) {
        if (currentItem.name != "Aged Brie") {
          if (currentItem.name != "Backstage passes to a TAFKAL80ETC concert") {
            decreaseQuality(currentItem)
          } else {
            currentItem.quality = currentItem.quality - currentItem.quality;
          }
        } else {
          increaseQuality(currentItem)
        }
      }
      console.log(`OUTPUT=> Item Name :${currentItem.name}, Quality: ${currentItem.quality}, SellIn: ${currentItem.sellIn}`);
    }
    return this.items;
  }


  private isLessThanMaxQuality(quality: number): boolean {
    return quality < 50;
  }

  private increaseQuality(item: Item): void {
    item.quality = item.quality + 1;
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