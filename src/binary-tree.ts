import { BinaryTreeNode } from "./binary-tree-node.js";

export class BinarySearchTree<T> {
    root: BinaryTreeNode<T> | undefined;

    constructor() {
        this.root = undefined;
    }


    private addKey(newNode: BinaryTreeNode<T> | undefined, key: T): boolean {
        if (newNode === undefined) {
            this.root = new BinaryTreeNode<T>(key);
            return true;
        }
        if (key === newNode.key) {
            return false;
        }
        if (key < newNode.key) {
            if (newNode.leftNode !== undefined) {
                if (!this.addKey(newNode.leftNode, key)) {
                    return false;
                }
            } else {
                newNode.leftNode = new BinaryTreeNode(key);
                return true;
            }
        } else {
            if (newNode.rightNode !== undefined) {
                if (!this.addKey(newNode.rightNode, key)) {
                    return false;
                }
            } else {
                newNode.rightNode = new BinaryTreeNode(key);
                return true;
            }
        }
        return true;
    }

    public add(key: T): boolean {
        return this.addKey(this.root, key);
    }


    private findKey(curNode: BinaryTreeNode<T> | undefined, key: T): BinaryTreeNode<T> | undefined {
        if (curNode === undefined) {
            return undefined;
        }
        if (key === curNode.key) {
            return curNode;
        }
        if (key < curNode.key) {
            return this.findKey(curNode.leftNode, key);
        }
        return this.findKey(curNode.rightNode, key);
    }

    public find(key: T): BinaryTreeNode<T> | undefined {
        return this.findKey(this.root, key);
    }


    private minChild (curNode: BinaryTreeNode<T>): BinaryTreeNode<T> {
        if (curNode.leftNode === undefined) {
            return curNode;
        }
        return this.minChild(curNode.leftNode);
    }

    private deleteKey(curNode: BinaryTreeNode<T> | undefined, key: T): BinaryTreeNode<T> | undefined {
        if (curNode === undefined) {
            return undefined;
        }
        if (key < curNode.key) {
            curNode.leftNode = this.deleteKey(curNode.leftNode, key);
            return curNode;
        }
        if (key > curNode.key) {
            curNode.rightNode = this.deleteKey(curNode.rightNode, key);
            return curNode;
        }


        if (curNode.leftNode === undefined && curNode.rightNode === undefined) {
            curNode = undefined;
            return curNode;
        }
        // Случай с одним детем
        if (curNode.leftNode === undefined) {
            curNode = curNode.rightNode;
            return curNode;
        }
        if (curNode.rightNode === undefined) {
            curNode = curNode.leftNode;
            return curNode;
        }

        const temp = this.minChild(curNode.rightNode);
        curNode.key = temp.key;
        curNode.rightNode = this.deleteKey(curNode.rightNode, curNode.key);
        return curNode;
    }

    public delete(key: T): void {
        this.root = this.deleteKey(this.root, key);
    }

    private printKey(curNode: BinaryTreeNode<T> | undefined): void {
        if (curNode === undefined) {
            return;
        }
        this.printKey(curNode.leftNode);
        console.log(curNode.key);
        this.printKey(curNode.rightNode);
    }

    public print(): void {
        this.printKey(this.root);
    }
}