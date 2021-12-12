import * as readlineSync from "readline-sync";
import {BinarySearchTree} from "./binary-tree.js";
import {BinaryTreeNode} from "./binary-tree-node.js";


const bst: BinarySearchTree<number> = new BinarySearchTree();
let i: number = 0;

while (i === 0) {
    console.log("\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n" +
        "Select an action:" +
        "\n1) Add an element;" +
        "\n2) Find an element;" +
        "\n3) Delete an element by value;" +
        "\n4) Print the entire tree;" +
        "\n5) Exit" +
        "\n" +
        "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    const userChoice = readlineSync.question("");
    switch (userChoice) {
        case "1":
            const insert = readlineSync.question("Key to insert = ");
            const bol = bst.add(+insert);
            if (!bol) {
                console.log("Such a key already exists, insertion is impossible!");
            }
            break;
        case "2":
            const f = readlineSync.question("Key to find = ");
            const temp: BinaryTreeNode<number> | undefined = bst.find(+f);
            if (temp === undefined) {
                console.log("There is no such element in the tree!");
            } else {
                console.log("Value " + temp.key);
            }
            break;
        case "3":
            const del = readlineSync.question("Key to delete = ");
            bst.delete(+del);
            break;
        case "4":
            console.log("");
            bst.print();
            break;
        case "5":
            i++;
            break;
        default:
            console.log("An incorrect value was entered!");
    }
}


