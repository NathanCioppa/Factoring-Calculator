let factorsArray = []
let addToArray = -1
    
function factor() {
    
    let factorNumber1 = document.getElementById('input1').value
    let factorNumber2 = document.getElementById('input2').value
    
    if (factorNumber1 !== '') {
        for (let i = 1; i <= factorNumber1; i++) {
            let factors = factorNumber1 / i
            if (factorNumber1 % i === 0) {
                addToArray = addToArray + 1
                console.log(factorsArray[addToArray] = factors)
            }
        }
        console.log('first: ' + factorsArray)
        addToArray = -1
        factorsArray = []
    }
    
    if (factorNumber2 !== '') {
        for (let i = 1; i <= factorNumber2; i++) {
            let factors = factorNumber2 / i
            if (factorNumber2 % i === 0) {
                addToArray = addToArray + 1
                console.log(factorsArray[addToArray] = factors)
            } 
        }
        console.log('second: ' + factorsArray)
        addToArray = -1
        
        function GCF() {
            if (factorsArray.length !== 0) {
                for (let i = 0; i < factorsArray.length; i++) {
                    if (factorNumber1 % factorsArray[i] === 0) {
                        console.log('GCF: ' + factorsArray[i])
                        document.getElementById('displayGCF').innerText = 'GCF: ' + factorsArray[i]
                        i = factorsArray.length
                    }
                }
            }
        }
        GCF()

        factorsArray = []
    }
}