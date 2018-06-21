function mergedOrderedArrays(arrayA, arrayB)
{
    const combined = [];
    let posA = 0;
    let posB = 0;

    while(posA < arrayA.length &&
        posB < arrayB.length)
    {
        if(arrayA[posA] < arrayB[posB])
        {
            combined.push(arrayA[posA++]);
        }
        else
        {
            combined.push(arrayB[posB++]);
        }
    }
    while(posA < arrayA.length){
        combined.push(arrayA[posA++]);
    }
    while(posB < arrayB.length){
        combined.push(arrayB[posB++]);
    }
    return combined;
}

function mergeSort(toSort)
{
    if(toSort.length == 1)
        return toSort;

    let left = toSort.slice(0, Math.round(toSort.length/2));
    let right = toSort.slice(Math.round(toSort.length/2));

    let leftSorted = mergeSort(left);
    let rightSorted =mergeSort(right);

    let result = mergedOrderedArrays(leftSorted, rightSorted);

    return result;

}

const arr = [1,4,21,8,2,0,3,4,5,2,98,65,45,33];

const res = mergeSort(arr);

console.log(...res);

