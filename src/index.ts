import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

const numbersCollection = new NumbersCollection([50, 34, -5, 0]);
const sorterNum = new Sorter(numbersCollection);
sorterNum.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('Hi There!')
const sorterChar = new Sorter(charactersCollection);
sorterChar.sort();
console.log(charactersCollection.data);
