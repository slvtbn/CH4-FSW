const getSelectValue = () => {
    let selectedValue = document.getElementById('list').value
    return selectedValue
}

const getDateValue = () => {
    let dateValue = document.getElementById('list2date').value
    let dateInput = new Date(dateValue)
    return dateInput
}

const getSelectValue3 = () => {
    let selectedValue3 = document.getElementById('list3').value
    return selectedValue3
}

const getSelectValue4 = () => {
    let selectedValue4 = document.getElementById('list4').value
    return selectedValue4
}

const cmForm = document.getElementById('cm-form')

cmForm.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('Form has been submitted!')
    console.log(getSelectValue())
    console.log(getDateValue())
    console.log(getSelectValue3())
    console.log(getSelectValue4())
    if (getSelectValue4() == "") {
        filterCarDua(getSelectValue(), getDateValue(), getSelectValue3())
    } else {
        filterCar(getSelectValue(), getDateValue(), getSelectValue3(), getSelectValue4())
    }
})