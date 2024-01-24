function makeLineChar(size, char = '#') {
    let line = '';
    for (let i = 0; i < size; i++) {
        line += char;
    }
    return line;
}

console.log(makeLineChar(6, '@'));

function makeSquareCharAlt1(size, char = '#') {
    let square = '';
    for (let i = 0; i < size; i++) {
        square += makeLineChar(size, char);
        if (i < size - 1) {
            square += '\n';
        }
    }
    return square;
}

console.log('---------------------------');
console.log(makeSquareCharAlt1(8, '*'));

function makeSquareChar(size, char) {
    return makeRectangleChar(size, size, char);
}

console.log('---------------------------');
console.log(makeSquareChar(8, '&'));

function makeRectangleChar(width, height, char = '#') {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
        rectangle += makeLineChar(width, char);
        if (i < height - 1) {
            rectangle += '\n';
        }
    }
    return rectangle;
}

console.log('---------------------------');
console.log(makeRectangleChar(5, 3, '%'));

function makeDownwardStairsChar(height, char = '#') {
    let stairs = '';
    for (let i = 1; i <= height; i++) {
        stairs += makeLineChar(i, char);
        if (i < height) {
            stairs += '\n';
        }
    }
    return stairs;
}

console.log('---------------------------');
console.log(makeDownwardStairsChar(9, '^'));

function makeSpaceLineChar(numSpaces, numChars, char = '#') {
    let spaceLine = '';
    for (let i = 0; i < numSpaces; i++) {
        spaceLine += ' ';
    }
    for (let i = 0; i < numChars; i++) {
        spaceLine += char;
    }
    for (let i = 0; i < numSpaces; i++) {
        spaceLine += ' ';
    }
    return spaceLine;
}

console.log('---------------------------');
console.log(makeSpaceLineChar(3, 6, '$'));

function makeIsoscelesTriangleChar(height, char = '#') {
    let isoscelesTriangle = '';
    for (let i = 0; i < height; i++) {
        let numChars = 1 + (2 * i);
        let numSpaces = ((1 + (2 * (height - 1))) - numChars) / 2;
        isoscelesTriangle += makeSpaceLineChar(numSpaces, numChars, char);
        if (i < height - 1) {
            isoscelesTriangle += '\n';
        }
    }
    return isoscelesTriangle;
}

console.log('---------------------------');
console.log(makeIsoscelesTriangleChar(7, '$'));

function makeDiamondChar(height, char = '#') {
    let diamond = '';
    for (let i = 0; i < height; i++) {
        let numChars = 1 + (2 * i);
        let numSpaces = ((1 + (2 * (height - 1))) - numChars) / 2;
        diamond += makeSpaceLineChar(numSpaces, numChars, char) + '\n';
    }
    for (let j = height - 1; j >= 0; j--) {
        let numChars = 1 + (2 * j);
        let numSpaces = ((1 + (2 * (height - 1))) - numChars) / 2;
        diamond += makeSpaceLineChar(numSpaces, numChars, char) + '\n';
    }
    return diamond.slice(0, -1);
}

console.log('---------------------------');
console.log(makeDiamondChar(8, '@'));