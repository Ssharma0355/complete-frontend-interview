const arr =[10,20,30,20,79,69]

function findDuplicate(arr){
    let dup = arr.filter((item, index)=> arr.indexOf(item) != index)
    return dup
}
console.log(findDuplicate(arr))