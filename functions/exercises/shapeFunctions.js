function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++) {
        line += '#';
    }
    return line;
}

console.log(makeLine(5));

function makeSquareAlt1(size) {
    let square = '';
    for (let i = 0; i < size; i++) {
        square += makeLine(size);
        if (i < size - 1) {
            square += '\n';
        }    
    }
    return square;
}

console.log('---------------------------');
console.log(makeSquareAlt1(5));

function makeSquare(size) {
    return makeRectangle(size, size);
}

console.log('---------------------------');
console.log(makeSquare(5));

function makeRectangle(width, height) {
    let rectangle = ''; 
    for(let i = 0; i < height; i++) {
        rectangle += makeLine(width);
        if (i < height - 1) {
            rectangle += '\n';
        }
    }
    return rectangle;
}

console.log('---------------------------');
console.log(makeRectangle(5, 3));

function makeDownwardStairs(height) {
    let stairs = '';
    for (let i = 1; i <= height; i++) {
      stairs += makeLine(i);
      if (i < height) {
        stairs += '\n';
      }
    }
    return stairs;  
}

console.log('---------------------------');
console.log(makeDownwardStairs(5));

function makeSpaceLine(numSpaces, numChars) {
    let spaceLine = '';
    for (let i = 0; i < numSpaces; i++) {
        spaceLine += ' ';
    }
    for (let i = 0; i < numChars; i++) {
        spaceLine += '#';
    }
    for (let i = 0; i < numSpaces; i++) {
        spaceLine += ' ';
    }
    return spaceLine;
}

console.log('---------------------------');
console.log(makeSpaceLine(3, 5));

function makeIsoscelesTriangle(height) {
    let isoscelesTriangle = '';
    for (let i = 0; i < height; i++) {
        let numChars = 1 + (2 * i);
        let numSpaces = ((1 + (2 * (height - 1))) - numChars)/2;
        isoscelesTriangle += makeSpaceLine(numSpaces, numChars);
        if (i < height - 1) {
            isoscelesTriangle += '\n';
        }
    }
    return isoscelesTriangle;
}

console.log('---------------------------');
console.log(makeIsoscelesTriangle(5));

function makeDiamond(height) {
    let diamond = '';
    for (let i = 0; i < height; i++) {
        let numChars = 1 + (2 * i);
        let numSpaces = ((1 + (2 * (height - 1))) - numChars)/2;
        diamond += makeSpaceLine(numSpaces, numChars) + '\n';
    }
    for (let j = height - 1; j >= 0; j--) {
        let numChars = 1 + (2 * j);
        let numSpaces = ((1 + (2 * (height - 1))) - numChars)/2;
        diamond += makeSpaceLine(numSpaces, numChars) + '\n';
    }
    return diamond.slice(0, -1);
}

console.log('---------------------------');
console.log(makeDiamond(5));