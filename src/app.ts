// Importáld be a HumanHero és TransformerHero osztályokat.
import { HumanHero } from './hero';
import { TransformerHero } from './transformer';

/**
 * Állítsd be helyesen a változót!
 * Neve: humans
 * Típusa: HumanHero példányok tömbje.
 * Hozz létre benne 3 HumanHero példányt, szabadon választott adatokkal.
 * @var {HumanHero[]} humans
 */
export const humans: any[] = [new HumanHero(1, "Mikaela Banes", "female", 20, 100), new HumanHero(2, "Sam WitWicky", "male", 20, 100), new HumanHero(3, "Charlie Watson", "female", 29, 100)];

/**
 * Állítsd be helyesen a változót!
 * Neve: transformers
 * Típusa: TransformerHero példányok tömbje.
 * Hozz létre benne 3 TransformerHero példányt, szabadon választott adatokkal.
 * @var {TransformerHero[]} transformers
 */
export const transformers: any[] = [new TransformerHero(1, "Optimus Prime", 0, 6, "Autobot"), new TransformerHero(2, "Bumblebee", 0, 4, "Autobot"), new TransformerHero(3, "Starscream", 2, 0, "Decepticon")];
