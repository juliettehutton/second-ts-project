"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
const numbersCollection = new NumbersCollection_1.NumbersCollection([50, 34, -5, 0]);
const sorterNum = new Sorter_1.Sorter(numbersCollection);
sorterNum.sort();
console.log(numbersCollection.data);
const charactersCollection = new CharactersCollection_1.CharactersCollection('Hi There!');
const sorterChar = new Sorter_1.Sorter(charactersCollection);
sorterChar.sort();
console.log(charactersCollection.data);
const linkedListCollection = new LinkedList_1.LinkedList();
linkedListCollection.add(500);
linkedListCollection.add(-10);
linkedListCollection.add(-5);
linkedListCollection.add(4);
const sorterLinkedList = new Sorter_1.Sorter(linkedListCollection);
sorterLinkedList.sort();
linkedListCollection.print();
