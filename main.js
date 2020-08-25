const inputBill = document.getElementById('input-bill')
const inputTip = document.getElementById('input-tip')
const inputPeople = document.getElementById('input-people')
const displayTip = document.getElementById('display-tip')
const displayTotal = document.getElementById('display-total')
const displaySplit = document.getElementById('display-split')

function calcTotal() {
    let bill = parseFloat(inputBill.value)
    let percent = parseInt(inputTip.value)
    let people = parseInt(inputPeople.value)

    let tip = bill * (percent / 100)
    let total = bill + tip
    let split = total / people

    displayTip.textContent = `\$ ${tip.toFixed(2)}`
    displayTotal.textContent = `\$ ${total.toFixed(2)}`
    displaySplit.textContent = `\$ ${split.toFixed(2)}`
}

inputBill.addEventListener('change', function (e) {
    calcTotal()
})

inputPeople.addEventListener('change', function (e) {
    calcTotal()
})

inputTip.addEventListener('change', function (e) {
    calcTotal()
})

// Bill -/+
function minusBill() {
    let previous = inputBill.value
    if (previous > 1) {
        previous--
        inputBill.value = previous
    }
    calcTotal()
}

function plusBill() {
    let previous = inputBill.value
    previous++
    inputBill.value = previous
    calcTotal()
}

// Tip -/+
function minusTip() {
    let previous = inputTip.value
    if (previous > 0) {
        previous--
        inputTip.value = previous
    }
    calcTotal()
}

function plusTip() {
    let previous = inputTip.value
    previous++
    inputTip.value = previous
    calcTotal()
}

// People -/+
function minusPeople() {
    let previous = inputPeople.value
    if (previous > 1) {
        previous--
        inputPeople.value = previous
    }
    calcTotal()
}

function plusPeople() {
    let previous = inputPeople.value
    previous++
    inputPeople.value = previous
    calcTotal()
}