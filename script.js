// Находим все элементы с классом "text-muted"
const elements = document.querySelectorAll('.text-muted');

// Получаем последний элемент из найденной коллекции
const lastElement = elements[elements.length - 1];

// Проверяем, найден ли последний элемент
if (lastElement) {
    // Ваш код обработки последнего элемента
    console.log(lastElement);
} else {
    console.log('Элемент с классом "text-muted" не найден на странице.');
}
