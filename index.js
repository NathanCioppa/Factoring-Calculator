
    
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

    //if (factorNumber1 !== '') {
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
        //console.log('first: ' + factors1Array)
        addToArray = -1
    //}
    
    if (factorNumber2 !== '') {

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
        //console.log('second: ' + factors2Array)
        
        function GCF() {
            if (factors2Array.length !== 0) {
                for (let i = 0; i < factors2Array.length; i++) {
                    if (factorNumber1 % factors2Array[i] === 0) {
                        //console.log('GCF: ' + factors2Array[i])
                        document.getElementById('displayGCF').innerText = factors2Array[i]
                        i = factors2Array.length
                    }
                }
            }
        }
        GCF()

        

    }
    
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