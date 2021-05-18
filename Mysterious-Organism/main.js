// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)]
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase())
    }
    return newStrand
}

const pAequorFactory = (number, array) => {
    return {
        specimenNum: number,
        dna: array,
        mutate() {
            let randomIndex = Math.floor(Math.random() * 15);
            let base = this.dna[randomIndex];
            let newBase = returnRandBase();
            while (base === newBase) {
                newBase = returnRandBase();
            }
            this.dna[randomIndex] = newBase;
        },
        compareDNA(pAequor) {
            let count = 0;
            let dnaLength = this.dna.length;
            for (let i = 0; i < dnaLength; i++) {
                if (this.dna[i] === pAequor.dna[i]) {
                    count++;
                }
            }
            console.log(`Specimen #${this.specimenNum} and specimen #${pAequor.specimenNum} have ${((count / dnaLength) * 100)}% DNA in common`);
        },
        willLikelySurvive() {
            let countOfC = 0;
            let indexOfC = this.dna.indexOf('C');

            while (indexOfC !== -1) {
                countOfC++;
                indexOfC = this.dna.indexOf('C', indexOfC + 1);
            }

            let percentageOfC = (countOfC / this.dna.length) * 100;
            // console.log("Percentage Of C: "+percentageOfC);

            let countOfG = 0;
            let indexOfG = this.dna.indexOf('G');

            while (indexOfG !== -1) {
                countOfG++;
                indexOfG = this.dna.indexOf('G', indexOfG + 1);
            }

            let percentageOfG = (countOfG / this.dna.length) * 100;
            // console.log("Percentage Of G: "+percentageOfG);

            return percentageOfC >= 60 || percentageOfG >= 60;
        }
    }
}

// const pAequor = pAequorFactory(1, mockUpStrand());
// console.log(pAequor.dna);
// pAequor.mutate();
// console.log(pAequor.dna);

// const pAequor2 = pAequorFactory(2, mockUpStrand());
// console.log(pAequor.dna);
// console.log(pAequor2.dna);
// pAequor.compareDNA(pAequor2);

// console.log(pAequor.willLikelySurvive());

let count = 1;
let survivablepAequor = [];
while (count <= 30) {
    const pAequor = pAequorFactory(count, mockUpStrand());
    if (pAequor.willLikelySurvive()) {
        count++;
        survivablepAequor.push(pAequor);
    }
}
// console.log("Count: " + survivablepAequor.length);
// for (let pAequor of survivablepAequor) {
//   console.log(pAequor.willLikelySurvive());
// }