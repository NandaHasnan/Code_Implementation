function divideAndSort(input) {
    let number = input.toString().split('0'); 
    let sortnumber = number.map(num => {
        return num.split('').sort().join('');
    });

    let result = sortnumber.join('');
    return parseInt(result);
}

console.log(divideAndSort(5956560159466056));

