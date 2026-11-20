function diffArray(arr1, arr2){
    const onlyArr1 = arr1.filter(item => !arr2.includes(item));
    const onlyArr2 = arr2.filter(item => !arr1.includes(item));
    return [...onlyArr1, ...onlyArr2];
}