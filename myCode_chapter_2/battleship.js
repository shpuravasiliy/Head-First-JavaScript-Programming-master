var location1 = Math.floor(Math.random() * 5);
var location1IsSunk = false;
var location2 = location1 + 1;
var location2IsSunk = false;
var location3 = location2 + 1;
var location3IsSunk = false;
var guess = 0;
var hits = 0;
var guesses = 0;
var boatIsSunk = false;

console.log(location1)
console.log(location2)
console.log(location3)

while (!boatIsSunk) {
    guess = prompt("Ready, aim, fire! (enter a number 0-6):");
    if (guess >= 0 && guess <= 6) {
        guesses += 1;
        if (guess == location1) {
            if (location1IsSunk) {
                alert('Вы уже попадали по этому участку!')
            }
            if (!location1IsSunk) {
                location1IsSunk = true;
                hits += 1;
                alert('Попал ска: ' + hits + ' раз.')
            }
        }
        if (guess == location2) {
            if (location2IsSunk) {
                alert('Вы уже попадали по этому участку!')
            }
            if (!location2IsSunk) {
                location2IsSunk = true;
                hits += 1;
                alert('Попал ска: ' + hits + ' раз.')
            }
        }
        if (guess == location3) {
            if (location3IsSunk) {
                alert('Вы уже попадали по этому участку!')
            }
            if (!location3IsSunk) {
                location3IsSunk = true;
                hits += 1;
                alert('Попал ска: ' + hits + ' раз.')
            }
        }
        if (hits == 3) {
            boatIsSunk = true;
            alert('Корабль потоплен!')
        }
    } else {
        alert('Вы ввели неверное число. Попробуйте снова. Диапазонт чисел от 0 до 6.')
    }
}
alert('Статистика: ' + guesses)