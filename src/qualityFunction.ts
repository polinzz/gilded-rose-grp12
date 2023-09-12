import { Item } from "./Item";
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

export const handleItemQuality = (currentItem: Item): void => {
    (currentItem.name === "Aged Brie" || currentItem.name === "Backstage passes to a TAFKAL80ETC concert")
        ? handleSpecialItemQuality(currentItem)
        : decreaseQuality(currentItem);
};

export const handleSpecialItemQuality = (currentItem: Item): void => {
    isLessThanMaxQuality(currentItem.quality)
        ? (increaseQuality(currentItem), currentItem.name === "Backstage passes to a TAFKAL80ETC concert" && isSellInLessthan(currentItem))
        : void 0;
};

export const handleExpiredItem = (currentItem: Item): void => {
    switch (currentItem.name) {
        case "Aged Brie":
            increaseQuality(currentItem);
            break;
        case "Backstage passes to a TAFKAL80ETC concert":
            currentItem.quality = 0;
            break;
        default:
            (currentItem.quality > 0) && decreaseQuality(currentItem);
            break;
    }
};