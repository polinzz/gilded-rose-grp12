import { Item } from "./Item";

const MAXIMUM_QUALITY = 50;
const MINIMUM_QUALITY = 0;

export const isLessThanMaxQuality = (quality: number) => quality < MAXIMUM_QUALITY;

export const isGreaterThanMinQuality = (quality: number) => quality > MINIMUM_QUALITY;

export const increaseQuality = (item: Item) => {
    item.quality = isLessThanMaxQuality(item.quality) ? item.quality + 1 : item.quality;
};

export const decreaseQuality = (item: Item) => {
    if (item.name === 'Sulfuras, Hand of Ragnaros') return;
    item.quality = isGreaterThanMinQuality(item.quality) ? item.quality - 1 : item.quality;
};

export const isSellInLessthan = (item: Item) => {
    item.sellIn < 11 ? increaseQuality(item) : item.quality;
    item.sellIn < 6 ? increaseQuality(item) : item.quality;
};
