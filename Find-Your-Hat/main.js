const prompt = require('prompt-sync')({ sigint: true });

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(arr) {
        this._arr = arr;
    }

    get arr() {
        return this._arr;
    }

    updatePosition(posY, posX) {
        this._arr[posY][posX] = pathCharacter;
    }

    print() {
        for (let path of this._arr) {
            console.log(path.join(''));
        }
    }

    static generateField(height, width) {
        let hArr = [];
        let wArr = [];

        // generate normal field with starting point
        for (let h = 0; h < height; h++) {
            for (let w = 0; w < width; w++) {
                if (h === 0 && w === 0) {
                    wArr.push(pathCharacter);
                    // increment w by 1 to "skip" adding an additional fieldCharacter
                    w++;
                }
                wArr.push(fieldCharacter);
            }
            hArr.push(wArr);
            wArr = [];
        }

        // generate traps
        for (let h = 0; h < height; h++) {
            // max 1 trap per row
            let trapCount = 0;
            for (let w = 0; w < width; w++) {
                let trapW = Math.floor(Math.random() * width);

                if (hArr[h][trapW] === fieldCharacter && trapCount < 1) {
                    hArr[h][trapW] = hole;
                    trapCount++;
                }
            }
        }

        // generate winning point
        let winPointW = Math.floor(Math.random() * width);
        let winPointH = Math.floor(Math.random() * height);

        // if winning point = path / hole character, regenerate a new winning point
        while (hArr[winPointH][winPointW] === pathCharacter || hArr[winPointH][winPointW] === hole) {
            winPointW = Math.floor(Math.random() * width);
            winPointH = Math.floor(Math.random() * height);
        }

        hArr[winPointH][winPointW] = hat;

        return hArr;
    }
}

// for testing
/* 
const myField = new Field([
  ['*', '░', '░'],
  ['░', 'O', '░'],
  ['░', '^', '░'],
]);
 */

// Game start
let gameOver = false;
let posX = 0;
let posY = 0;
let currentPos = '';

// prompt user which the field size he/she wants
let fieldSize = prompt('Input board field size. E.g. 5,6 where height: 5 and width: 6 ');

// generate field size (height, width)
fieldSize = fieldSize.split(",");
let fieldGenerated = Field.generateField(Number(fieldSize[0]), Number(fieldSize[1]));

// generate field size (height, width)
// let fieldGenerated = Field.generateField(5, 5);

// create an instance of Field
const myField = new Field(fieldGenerated);

// print it out
myField.print();

while (!gameOver) {
    // prompt user the direction he/she wnats
    const move = prompt('Which direction? U/D/L/R ');

    if (move.toUpperCase() === 'U') {
        posY--;

        try {
            currentPos = myField.arr[posY][posX];
        }
        catch (e) {
            console.log('There is no such path.');
            // move back to previous position
            posY++;
        }

        if (currentPos === fieldCharacter) {
            myField.updatePosition(posY, posX);
        }
        else if (currentPos === pathCharacter) {
            console.log('You have already walked here.');
            // move back to previous position
            posY++;
        }
        else if (currentPos === hat) {
            console.log('You have won the game!');
            gameOver = true;
        }
        else if (currentPos === hole) {
            console.log('Oh no, you have fallen into a trap!');
            gameOver = true;
        }

        myField.print();
    }

    if (move.toUpperCase() === 'D') {
        posY++;

        try {
            currentPos = myField.arr[posY][posX];
        }
        catch (e) {
            console.log('There is no such path.');
            // move back to previous position
            posY--;
        }

        if (currentPos === fieldCharacter) {
            myField.updatePosition(posY, posX);
        }
        else if (currentPos === pathCharacter) {
            console.log('You have already walked here.');
            // move back to previous position
            posY--;
        }
        else if (currentPos === hat) {
            console.log('You have won the game!');
            gameOver = true;
        }
        else if (currentPos === hole) {
            console.log('Oh no, you have fallen into a trap!');
            gameOver = true;
        }

        myField.print();
    }

    if (move.toUpperCase() === 'L') {
        posX--;
        currentPos = myField.arr[posY][posX];

        if (posX < 0) {
            console.log('There is no such path.');
            // move back to previous position
            posX++;
        }

        if (currentPos === fieldCharacter) {
            myField.updatePosition(posY, posX);
        }
        else if (currentPos === pathCharacter) {
            console.log('You have already walked here.');
            // move back to previous position
            posX++;
        }
        else if (currentPos === hat) {
            console.log('You have won the game!');
            gameOver = true;
        }
        else if (currentPos === hole) {
            console.log('Oh no, you have fallen into a trap!');
            gameOver = true;
        }

        myField.print();
    }

    if (move.toUpperCase() === 'R') {
        posX++;
        currentPos = myField.arr[posY][posX];

        if (posX > myField.arr[posY].length - 1) {
            console.log('There is no such path.');
            // move back to previous position
            posX--;
        }

        if (currentPos === fieldCharacter) {
            myField.updatePosition(posY, posX);
        }
        else if (currentPos === pathCharacter) {
            console.log('You have already walked here.');
            // move back to previous position
            posX--;
        }
        else if (currentPos === hat) {
            console.log('You have won the game!');
            gameOver = true;
        }
        else if (currentPos === hole) {
            console.log('Oh no, you have fallen into a trap!');
            gameOver = true;
        }

        myField.print();
    }
}