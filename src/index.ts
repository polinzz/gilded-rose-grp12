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
        if (this.isMoreThanMinQuality(currentItem.quality)) {
          if (currentItem.name != "Sulfuras, Hand of Ragnaros") {
            this.decreaseQuality(currentItem);
          }
        }
      } else {
        if (this.isLessThanMaxQuality(currentItem.quality)) {
          this.increaseQuality(currentItem)
          if (currentItem.name == "Backstage passes to a TAFKAL80ETC concert") {
            if (this.isLessThan(currentItem)) {
              if (this.isLessThanMaxQuality(currentItem.quality)) {
                this.increaseQuality(currentItem)
              }
            }

            if (this.isLessThan2(currentItem)) {
              if (this.isLessThanMaxQuality(currentItem.quality)) {
                this.increaseQuality(currentItem)
              }
            }
          }
        }
      }
      if (currentItem.name != "Sulfuras, Hand of Ragnaros") {
        currentItem.sellIn = currentItem.sellIn - 1;
      }
      if (currentItem.sellIn < 0) {
        if (currentItem.name != "Aged Brie") {
          if (currentItem.name != "Backstage passes to a TAFKAL80ETC concert") {
            if (this.isMoreThanMinQuality(currentItem.quality)) {
              if (currentItem.name != "Sulfuras, Hand of Ragnaros") {
                this.decreaseQuality(currentItem);
              }
            }
          } else {
            currentItem.quality = currentItem.quality - currentItem.quality;
          }
        } else {
          if (this.isLessThanMaxQuality(currentItem.quality)) {
            this.increaseQuality(currentItem)
          }
        }
      }
      console.log(`OUTPUT=> Item Name :${currentItem.name}, Quality: ${currentItem.quality}, SellIn: ${currentItem.sellIn}`);
    }
    return this.items;
  }

  private isLessThan(item: Item): Boolean {
    return item.sellIn < 11;
  }
  private isLessThan2(item: Item): Boolean {
    return item.sellIn < 6;
  }

  private isLessThanMaxQuality(quality: number): boolean {
    return quality < 50;
  }

  private isMoreThanMinQuality(quality: number): boolean {
    return quality > 0;
  }

  private increaseQuality(item: Item): void {
    item.quality = item.quality + 1;
  }

  private decreaseQuality(item: Item): void {
    item.quality = item.quality - 1;
  }

}
