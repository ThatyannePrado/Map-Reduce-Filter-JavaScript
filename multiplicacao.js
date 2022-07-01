let lista = [1,2,3,4,5,6,7,8];

const pessoa1 = {
    value:2,
}

const pessoa2 = {
    value:3,
}

function mapComThis (arr, thisArg) {
    return arr.map(function(item){
        return item*this.value;
    },thisArg);
}

function mapSemThis(arr){
    return arr.map(function(item){
        return item*2
    })
}

console.log(mapComThis(lista,pessoa2));
console.log(mapSemThis(lista));
