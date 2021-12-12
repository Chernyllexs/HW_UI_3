export class BinaryTreeNode<T> {
    key: T;
    leftNode: BinaryTreeNode<T> | undefined;
    rightNode: BinaryTreeNode<T> | undefined;
    constructor(val: T) {
        this.key = val;
        this.leftNode = undefined;
        this.rightNode = undefined;
    }
}