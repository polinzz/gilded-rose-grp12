import { Item } from "./Item";
import { isLessThanMaxQuality, increaseQuality, decreaseQuality, isSellInLessthan } from "./itemUtils";

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