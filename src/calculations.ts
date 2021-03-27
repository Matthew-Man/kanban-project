import { IColumns } from "./components/interface";

/**
* @params arrayMove will take an array and move one value from one position to another. IMPORTANT: negative numbers will not work
*/
export default function arrayMove(arr: number[], fromIndex: number, toIndex: number) {
    //Note: This does not handle negative indexes
    let array = arr;
    const element = array[fromIndex];
    array.splice(fromIndex, 1);
    array.splice(toIndex, 0, element);
    return array;
}



