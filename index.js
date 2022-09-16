let factorsArray = []
let addToArray = -1
    
function factor() {

    let factorNumber1 = document.getElementById('input1').value
    let factorNumber2 = document.getElementById('input2').value
    let factors1Length = document.getElementById('factors1').rows.length
    let factors2Length = document.getElementById('factors2').rows.length

    if (factors1Length > 1) {
        for (let i = 1; i < factors1Length; i++) {
            document.getElementById('factors1').deleteRow(1)
        }
    }
    if (factors2Length > 1) {
        for (let i = 1; i < factors2Length; i++) {
            document.getElementById('factors2').deleteRow(1)
        }
    }

    if (factorNumber1 !== '') {
        for (let i = 1; i <= factorNumber1; i++) {
            let factors = factorNumber1 / i
            if (factorNumber1 % i === 0) {
                addToArray = addToArray + 1
                console.log(factorsArray[addToArray] = factors)
                document.getElementById('factors1').append(document.createElement('tr'))
                document.getElementById('factors1').lastElementChild.append(document.createElement('input'))
                document.getElementById('factors1').lastElementChild.firstChild.value = factors
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
                document.getElementById('factors2').append(document.createElement('tr'))
                document.getElementById('factors2').lastElementChild.append(document.createElement('input'))
                document.getElementById('factors2').lastElementChild.firstChild.value = factors
                
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

        if (factorNumber1 === '')return document.getElementById('displayGCF').innerText = 'GCF: '
        else if(factorNumber1 === '')return document.getElementById('dislpayGCF').innerText = 'GCF:'

        factorsArray = []
    }

    console.log(factorNumber1)
}