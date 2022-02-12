// document.querySelector('.registration').addEventListener("click",formValidate);

// function formValidate(){
//     valid = true
//     let name = document.querySelector ('#formName').value;
//     if (name == ''){
//         document.querySelector ('.nameError').innerHTML = 'Заполните обязательное поле Имя'
//     }
//     else {document.querySelector ('.nameError').innerHTML = ''}

//     let mail = document.querySelector ('#mail').value;
//     if (mail=='' ){
//     document.querySelector ('.mailError').innerHTML = 'Заполните обязательное поле email'
//     }
//     else {document.querySelector ('.mailError').innerHTML = ''}
//     let phone = document.querySelector ('#phone').value;
//     if (phone=='' ){
//     document.querySelector ('.phoneError').innerHTML = 'Заполните обязательное поле Телефон'
//     }
//     else {document.querySelector ('.phoneError').innerHTML = ''
//     }

//     if (document.querySelector ('#formAgreement').checked === false){
//         document.querySelector ('.checkError').innerHTML = 'Нет согласия на обработку персональных данных'
//     }
//     else {
//         document.querySelector ('.checkError').innerHTML = ''
//     }

//     let checks = document.getElementsByName('animals');

//     if (checks[0].checked  || checks[1].checked  || checks[2].checked  || checks[3].checked  || checks[4].checked || checks[5].checked  || checks[6].checked || checks[7].checked  )
//     {
//     document.querySelector ('.animalsError').innerHTML = ''  
//     }
//     else {
//         document.querySelector ('.animalsError').innerHTML = 'Выберите хотя бы одно животное'  
//     }


// }


document.querySelector('.registration').addEventListener('click', checkAll)

let errors = [];

function checkValidity(input) {
    let validity = input.validity;
    if (validity.valueMissing) {
        errors.push('Поле ' + input.placeholder + ' не заполнено');
    }
    if (validity.patternMismatch) {
        errors.push(`Поле ${input.placeholder} заполнено неверно`);
    }
    if (validity.rangeOverflow) {
        let max = input.getAttribute('max');
        errors.push(`Максимальное значение поля ${input.placeholder} не может быть больше ${max}`)
    }
    if (validity.rangeUnderflow) {
        let min = input.getAttribute('min');
        errors.push(`Минимальное значение поля ${input.placeholder} не может быть меньше ${min}`)
    }


}

function checkAll() {
    errors = [];
    let inputs = document.querySelectorAll('input');
    for (let input of inputs) {
        checkValidity(input)
    }
    document.querySelector('.checkError').innerHTML = errors.join('. <br>')
}

