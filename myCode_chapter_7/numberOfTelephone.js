function numberOfTelephone(str) {
    var flag = false
    var qn = 0
    if (str.length !== 8) return "1Неверный формат. Введите номер телефона в виде \"123-4567\""
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '-') {
            qn++
            if (i === 0 || i === str.length - 1) {
                return "2Неверный формат. Дефис поставлен в неправильном месте."
            }
            else if (qn > 1) return "3Неверный формат. Поставлено более 1 дефиса."
            flag = true
            }
        else if (isNaN(str[i])) return "4Неверный формат. Введите номер телефона в виде \"123-4567\""
    }
    return (flag) ? "Номер принят: " + str : "4Неверный формат. Отсутствует дефис."
    }

function validate(phoneNumber) {
    return phoneNumber.match(/^\d{3}-?\d{4}$/);
}

console.log(numberOfTelephone('1-234873'));
console.log(validate('123-7873'));


