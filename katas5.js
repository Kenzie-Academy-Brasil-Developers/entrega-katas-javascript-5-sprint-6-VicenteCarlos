//----1----:

const reverseString = string => string.split("").reverse().join("");

const testeReverseString1 = () => {
    let result = reverseString("Kenzie Academy");
    let expected = "ymedacA eizneK";
    console.assert(result===expected, {
        function: "reverseString",
        expected: expected,
        result: result
    })
}

testeReverseString1();

const testeReverseString2 = () => {
    let result = reverseString("Academy Kenzie");
    let expected = "eizneK ymedacA";
    console.assert(result===expected, {
        function: "reverseString",
        expected: expected,
        result: result
    });
}

testeReverseString2();

//----2----:

const reverseSentence = string => string.split(" ").reverse().join(" ");

const testReverseSentence1 = () => {
    let result = reverseSentence("Nicholas ama Programação");
    let expected = "Programação ama Nicholas"
    console.assert(result===expected, {
        function: "reverseSentence()",
        expected: expected,
        result: result
    })
}

testReverseSentence1();

const testReverseSentence2 = () => {
    let result = reverseSentence("Daniel, karma, Nicholas");
    let expected = "Nicholas karma, Daniel,"
    console.assert(result===expected, {
        function: "reverseSentence()",
        expected: expected,
        result: result
    })
}

testReverseSentence2();

//----3----:

const minimumValue = array => {
    let sorT = array.sort((a,b) => a-b);
    return sorT[0];
}

const testMinimumValue1 = () => {
    let result = minimumValue([5,1,3,50]);
    console.assert(result===1, {
        function: "minimumValue()",
        expected: 1,
        result: result
    })
}

testMinimumValue1();

const testMinimumValue2 = () => {
    let result = minimumValue([-3,5,-30,-10]);
    console.assert(result===-30, {
        function: "minimumValue()",
        expected: -30,
        result: result
    })
}

testMinimumValue2();

//----4----:

const maximumValue = array => {
    let sorT = array.sort((a,b) => b-a);
    return sorT[0];
}

const testMaximumValue1 = () => {
    let result = maximumValue([5,1,3,50]);
    console.assert(result===50, {
        function: "maximumValue()",
        expected: 50,
        result: result
    })
}

testMaximumValue1();

const testMaximumValue2 = () => {
    let result = maximumValue([-3,5,-30,-10]);
    console.assert(result===5, {
        function: "maximumValue()",
        expected: 5,
        result: result
    })
}

testMaximumValue2();

//----5----:

const calculateRemainder = (num, restoPor) => num % restoPor;

const testCalculateRemainder1 = () => {
    let result = calculateRemainder(4, 2);
    console.assert(result===0, {
        function: "calculateRemainder()",
        expected: 0,
        result: result
    })
}

testCalculateRemainder1()

const testCalculateRemainder2 = () => {
    let result = calculateRemainder(4, 3);
    console.assert(result===1, {
        function: "calculateRemainder()",
        expected: 1,
        result: result
    })
}

testCalculateRemainder2()

//----6----:

const distinctValues = list => {
    let arr = [], sorT = list.sort((a,b) => a-b);
    arr.push(sorT[0]);
    for (let i=0;i<sorT.length;i++) {
        if (i>0) {
            sorT[i] !== sorT[i-1] ? arr.push(sorT[i]) : sorT[i];
        }
    }
    return arr.join(" ");
}

testDistinctValues1 = () => {
    let result = distinctValues([2,5,10,5,2,10,8,8,8]);
    let expected = "2 5 8 10";
    console.assert(result===expected, {
        function: "distinctValues()",
        expected: expected,
        result: result
    })
}

testDistinctValues1()

testDistinctValues2 = () => {
    let result = distinctValues([-2,-5,20,-5,-2,20,-8,-8,-8]);
    let expected = "-8 -5 -2 20";
    console.assert(result===expected, {
        function: "distinctValues()",
        expected: expected,
        result: result
    })
}

testDistinctValues2()

//----7----:

const countValues = array => {
    let arr = [], sorT = array.sort((a,b) => a-b);
    arr.push(sorT[0]);
    for (let i=0;i<sorT.length;i++) {
        if (i>0) {
            sorT[i] !== sorT[i-1] ? arr.push(sorT[i]) : sorT[i];
        }
    }
    let count = new Array(arr.length).fill(0);
    sorT.map(num => {
        if (num===arr[0]) {
            count[0] += 1;
        } else if (num===arr[1]) {
            count[1] += 1;
        } else if (num===arr[2]) {
            count[2] += 1;
        }
    })
    return `${arr[0]}(${count[0]}) ${arr[1]}(${count[1]}) ${arr[2]}(${count[2]})`
}

let testCountValues1 = () => {
    let result = countValues([1, 2, 3, 3, 1, 3, 3]);
    let expected = "1(2) 2(1) 3(4)";
    console.assert(result===expected, {
        function: "countValues()",
        expected: expected,
        result: result
    })
}

testCountValues1()

let testCountValues2 = () => {
    let result = countValues([-1, -2, -3, -3, -1, -3, -3]);
    let expected = "-3(4) -2(1) -1(2)";
    console.assert(result===expected, {
        function: "countValues()",
        expected: expected,
        result: result
    })
}

testCountValues2()











