import runGoldenMaster from "jest-golden-master";
import { GildedRose, Item } from "./index";

// Définir la fonction generateCombinations
function generateCombinations(
    names: string[],
    sellIN: number[],
    quantity: number[]
) {
    const combinations: { name: string; sellIn: number; quality: number }[] = [];

    for (const name of names) {
        for (const si of sellIN) {
            for (const q of quantity) {
                combinations.push({ name, sellIn: si, quality: q });
            }
        }
    }

    return combinations;
}

test("My first scenario", async () => {
    await runGoldenMaster(async () => {
        const items = [new Item("TOTO", 10, 10)];
        const gilderRose = new GildedRose(items);
        console.log(gilderRose.updateQuality());
    });
});

test("My second scenario", async () => {
    await runGoldenMaster(async () => {
        const names = [
            '+5 Dexterity Vest',
            'Aged Brie',
            'Elixir of the Mongoose',
            'Sulfuras, Hand of Ragnaros',
            'Backstage passes to a TAFKAL80ETC concert',
            'Conjured Mana Cake',
        ];
        const sellIN = [10, 2, 5, 0, 15, 3, -1];
        const quantity = [45];

        // Générer toutes les combinaisons possibles
        const allCombinations = generateCombinations(names, sellIN, quantity);

        // Exécuter le test pour chaque combinaison
        for (const combination of allCombinations) {
            const items = [new Item(combination.name, combination.sellIn, combination.quality)];

            const gilderRose = new GildedRose(items);
            console.log(gilderRose.updateQuality());

        }
    });
});
