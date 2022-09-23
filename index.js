
function factor() {

    let factorNumber1 = document.getElementById('input1').value
    let factorNumber2 = document.getElementById('input2').value
    let factors1Length = document.getElementById('factors1').rows.length
    let factors2Length = document.getElementById('factors2').rows.length
    let factors1Array = []
    let factors2Array = []
    let addToArray = -1

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

    document.getElementById('factors1Head').value='Factors of ' + factorNumber1 + ':'
    document.getElementById('factors2Head').value='Factors of ' + factorNumber2 + ':'

        for (let i = 1; i <= factorNumber1; i++) {
            let factors = factorNumber1 / i
            if (factorNumber1 % i === 0) {
                addToArray = addToArray + 1
                factors1Array[addToArray] = factors
                document.getElementById('factors1').append(document.createElement('tr'))
                document.getElementById('factors1').lastElementChild.append(document.createElement('input'))
                document.getElementById('factors1').lastElementChild.firstChild.value = factors
                document.getElementById('factors1').lastElementChild.firstChild.setAttribute('readonly', 'true')
            }
        }
        addToArray = -1

        for (let i = 1; i <= factorNumber2; i++) {
            let factors = factorNumber2 / i
            if (factorNumber2 % i === 0) {
                addToArray = addToArray + 1
                factors2Array[addToArray] = factors
                document.getElementById('factors2').append(document.createElement('tr'))
                document.getElementById('factors2').lastElementChild.append(document.createElement('input'))
                document.getElementById('factors2').lastElementChild.firstChild.value = factors
                document.getElementById('factors2').lastElementChild.firstChild.setAttribute('readonly', 'true')
                
            } 
        }
        
        function GCF() {
            if (factors2Array.length !== 0) {
                for (let i = 0; i < factors2Array.length; i++) {
                    if (factorNumber1 % factors2Array[i] === 0) {
                        document.getElementById('displayGCF').innerText = factors2Array[i]
                        i = factors2Array.length
                    }
                }
            }
        }
        GCF()
    
    if (factorNumber1 === '' || factorNumber1 === '0') {document.getElementById('displayGCF').innerText = ''}
    if (factorNumber2 === '' || factorNumber2 === '0') {document.getElementById('displayGCF').innerText = ''}

    function commonFactors() {
        factors1Length = document.getElementById('factors1').rows.length
        factors2Length = document.getElementById('factors2').rows.length

        for (let i = 1; i < factors1Length; i++) {
            for (let ii = 1; ii < factors2Length; ii++) {
                if (document.getElementById('factors1').children[i].firstChild.value === document.getElementById('factors2').children[ii].firstChild.value) {
                    document.getElementById('factors1').children[i].firstChild.id='CF'
                    document.getElementById('factors2').children[ii].firstChild.id='CF'
                }
                if (document.getElementById('displayGCF').innerText === document.getElementById('factors1').children[i].firstChild.value) {
                    document.getElementById('factors1').children[i].firstChild.id='GCF'
                }
                if (document.getElementById('displayGCF').innerText === document.getElementById('factors2').children[ii].firstChild.value) {
                    document.getElementById('factors2').children[ii].firstChild.id='GCF'
                }
            }
        }
        
    }
    commonFactors()
}

function factorTrinomial() {
    let inputTrinomial = document.getElementById('inputTrinomial').value
    let digits = '0123456789'
    let firstNumber = ''
    let firstNumberDuplicate = ''
    let firstTerm = ''
    let middleTerm = ''
    let middleNumber = ''
    let lastNumber = ''
    let lastTerm = ''
    let realLastNumber = ''
    let operators = '+-'
    let aTimesC = 0
    let factorsAtimesC = []
    let goodFactor1 = 0
    let goodFactor2 = 0
    let sign1 = ''
    let sign2 = ''
    let answerSign1 = ''
    let answerSign2 = ''
    let checkTerm1 = 'x^2'
    let firstNumberError = ''
    let err = document.getElementById('err')
    let errorMessage = document.getElementById('errorMessage')
    let answer = document.getElementById('factoredForm')
        errorMessage.innerText = ''
        err.innerText = ''

    if (inputTrinomial === '') {
        document.getElementById('factoredForm').innerText = ''
    } else {
    
        for (let i = 1; i <= 9; i++) {
            if (inputTrinomial[0] === i.toString()) {
                i = 11
            } else if (inputTrinomial[0] === 'x') {
                i = 11
                firstNumber = '1'
            } else if (i === 9){
                err.innerText = 'ERROR: '
                errorMessage.innerText = 'improper format in first term (ax^2)'
                answer.innerText = ''
                i = 10
            }
                if (i === 11) {
                    let ii = 0
                    let iii = 1
                    let startMiddleTerm = 1

                    for (let i = 0; i < inputTrinomial.length; i++) {
                        if (operators.includes(inputTrinomial[i])) {
                            i = inputTrinomial.length
                        } else { firstTerm = firstTerm + inputTrinomial[i]
                                startMiddleTerm = startMiddleTerm + 1
                            }
                    }
                    if (!firstTerm.includes(checkTerm1) || firstTerm[firstTerm.length - 1] !== '2') {
                        err.innerText = 'ERROR: '
                        errorMessage.innerText = 'improper format in first term (ax^2)'
                        answer.innerText = ''
                    } else { 
                    for (let i = 0; i < inputTrinomial.length; i++) {
                        if (digits.includes(inputTrinomial[ii])) {
                            firstNumber = firstNumber + inputTrinomial[ii]
                            ii = ii + 1
                        } 
                    }
                    for (let i = 0; i < inputTrinomial.length; i++) {
                        if (operators.includes(inputTrinomial[startMiddleTerm])) {
                            i = inputTrinomial.length
                        } else {
                            middleTerm = middleTerm + inputTrinomial[startMiddleTerm]
                            startMiddleTerm = startMiddleTerm + 1
                        }
                    }
                    if (!digits.includes(middleTerm[0])) {
                        middleNumber = 1
                    } else {
                        for (let i = 0; i < middleTerm.length; i++) {
                            if (digits.includes(middleTerm[i])) {
                                middleNumber = middleNumber + middleTerm[i]
                            } else {
                                i = middleTerm.length
                            }
                        }
                    }
                    if (!middleTerm.includes('x') || middleTerm.includes('^') || middleTerm[middleTerm.length - 1] !== 'x') {
                        answer.innerText = ''
                        err.innerText = 'ERROR: '
                        errorMessage.innerText = "improper format in second term (bx)"
                    } else {
                    for (let i = 0; i < inputTrinomial.length; i++) {
                        lastNumber = lastNumber + inputTrinomial[inputTrinomial.length - iii]
                            iii = iii + 1
                        if (operators.includes(inputTrinomial[inputTrinomial.length - iii])) {
                            i = inputTrinomial.length
                        }
                    }
                    iii = iii - 1
                    for (let i = 0; iii > 0; i++) {
                        lastTerm = lastTerm + inputTrinomial[inputTrinomial.length - iii]
                        iii = iii - 1
                    }
                    for (let i = 0; i < lastTerm.length; i++) {
                        if (digits.includes(lastTerm[i])) {
                            realLastNumber = realLastNumber + lastTerm[i]
                        } else {i = lastTerm.length}
                    }
                    if (lastTerm !== realLastNumber) {
                        err.innerText = 'ERROR: '
                        errorMessage.innerText = 'improper format in third term (c)'
                        answer.innerText = ''
                    } else {
                    for (let i = 0; i < inputTrinomial.length; i++) {
                        if (sign1 !== '' && operators.includes(inputTrinomial[i])) {
                            sign2 = inputTrinomial[i]
                            i = inputTrinomial.length
                        }
                        if (operators.includes(inputTrinomial[i])) {
                            sign1 = inputTrinomial[i]
                            
                        }
                    }
                    firstNumber = Number(firstNumber)
                    firstNumberError = Number(firstNumber)
                    firstNumberDuplicate = Number(firstNumber)
                    middleNumber = Number(middleNumber)
                    realLastNumber = Number(realLastNumber)

                    aTimesC = firstNumber * realLastNumber
                    let addToArray = -1
                    for (let i = 0; i <= aTimesC; i++) {
                        let factors = aTimesC / i
                        if (aTimesC % i === 0) {
                            addToArray = addToArray + 1
                            factorsAtimesC[addToArray] = factors
                        }
                    }
                    if (sign2 === '-') {
                        answerSign1 = '+'
                        answerSign2 = '-'
                        if (sign1 === '-') {
                            answerSign1 = '-'
                            answerSign2 = '+'
                        }
                        for (let i = 0; i < factorsAtimesC.length; i++) {
                            for (let ii = 0; ii < factorsAtimesC.length; ii++) {
                                if (factorsAtimesC[i] - factorsAtimesC[ii] === middleNumber && factorsAtimesC[i] * factorsAtimesC[ii] === aTimesC) {
                                    goodFactor1 = factorsAtimesC[i]
                                    goodFactor2 = factorsAtimesC[ii]
                                    ii = factorsAtimesC.length
                                    i = factorsAtimesC.length
                                }
                            }
                        }
                    }
                    if (sign2 === '+') {
                        answerSign1 = sign1
                        answerSign2 = sign1
                        for (let i = 0; i < factorsAtimesC.length; i++) {
                            for (let ii = 0; ii < factorsAtimesC.length; ii++) {
                                if (factorsAtimesC[i] + factorsAtimesC[ii] === middleNumber && factorsAtimesC[i] * factorsAtimesC[ii] === aTimesC) {
                                    goodFactor1 = factorsAtimesC[i]
                                    goodFactor2 = factorsAtimesC[ii]
                                    ii = factorsAtimesC.length
                                    i = factorsAtimesC.length
                                }
                            }
                        }
                    }
                    function factorFirstTerm() {
                        let factorGoodFactor1 = []
                        factors1Array = -1
                        for (let i = 0; i <= goodFactor1; i++) {
                            let factors = goodFactor1 / i
                            if (goodFactor1 % i === 0) {
                                factors1Array = factors1Array + 1
                                factorGoodFactor1[factors1Array] = factors
                            }
                        }
                        for (let i = 0; i < factorGoodFactor1.length; i++) {
                            if (firstNumber % factorGoodFactor1[i] === 0) {
                                firstNumber = firstNumber / factorGoodFactor1[i]
                                goodFactor1 = goodFactor1 / factorGoodFactor1[i]
                                i = factorGoodFactor1.length
                            }
                        }
                    }
                    factorFirstTerm()
                    function factorSecondTerm() {
                        let factorGoodFactor2 = []
                        factors2Array = -1
                        for (let i = 0; i <= goodFactor2; i++) {
                            let factors = goodFactor2 / i
                            if (goodFactor2 % i === 0) {
                                factors2Array = factors2Array + 1
                                factorGoodFactor2[factors2Array] = factors
                            }
                        }
                        for (let i = 0; i < factorGoodFactor2.length; i++) {
                            if (firstNumberDuplicate % factorGoodFactor2[i] === 0) {
                                firstNumberDuplicate = firstNumberDuplicate / factorGoodFactor2[i]
                                goodFactor2 = goodFactor2 / factorGoodFactor2[i]
                                i = factorGoodFactor2.length
                            }
                        }
                    }
                    factorSecondTerm()

                    if (firstNumber === 1) {
                        firstNumber = ''
                    }
                    if (firstNumberDuplicate === 1) {
                        firstNumberDuplicate = ''
                    }
                    if (goodFactor1 === 0 || goodFactor2 === 0) {
                        if (sign2 === '+') {
                            err.innerText = 'ERROR: '
                            errorMessage.innerText = 'no factors of ' + firstNumberError * realLastNumber + ' multiply to ' + firstNumberError * realLastNumber + ' and add to ' + middleNumber
                            answer.innerText = 'cannot factor'
                        }
                        if (sign2 === '-') {
                            err.innerText = 'ERROR: '
                            errorMessage.innerText = 'no factors of ' + firstNumberError * realLastNumber + ' multiply to ' + firstNumberError * realLastNumber + ' and subtract to ' + middleNumber
                            answer.innerText = 'cannot factor'
                        }
                    } else {

                    let generateAnswer = '(' + firstNumber + 'x' + answerSign1 + goodFactor1 + ')(' + firstNumberDuplicate + 'x' + answerSign2 + goodFactor2 + ')' 
                        document.getElementById('factoredForm').innerText = generateAnswer

                    console.log(firstTerm)
                    console.log(firstNumber)
                    console.log(middleTerm)
                    console.log(middleNumber)
                    console.log(lastTerm)
                    console.log(realLastNumber)
                    console.log(sign1)
                    console.log(sign2)

                    console.log(factorsAtimesC)
                    console.log(goodFactor1)
                    console.log(goodFactor2)
                    console.log(generateAnswer)
                }
                }
                }
                }      
            }
        }    
    }
}