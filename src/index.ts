import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([50, 34, -5, 0]);
const sorterNum = new Sorter(numbersCollection);
sorterNum.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('Hi There!')
const sorterChar = new Sorter(charactersCollection);
sorterChar.sort();
console.log(charactersCollection.data);

const linkedListCollection = new LinkedList();
linkedListCollection.add(500);
linkedListCollection.add(-10);
linkedListCollection.add(-5);
linkedListCollection.add(4);

const sorterLinkedList = new Sorter(linkedListCollection);
sorterLinkedList.sort();
linkedListCollection.print();
