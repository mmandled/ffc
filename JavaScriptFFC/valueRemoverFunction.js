function destroyer(arr1, ...value){
    return arr1.filter(item => !value.includes(item))
}