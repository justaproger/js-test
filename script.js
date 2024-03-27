// Находим элемент с классом "col-md-12"
const colElement = document.querySelector('.col-md-12');

// Проверяем, найден ли элемент "col-md-12"
if (colElement) {
    // Находим элемент с классом "text-muted" внутри элемента "col-md-12"
    const textMutedElement = colElement.querySelector('.text-muted');
    
    // Проверяем, найден ли элемент "text-muted" внутри "col-md-12"
    if (textMutedElement) {
        // Ваш код обработки найденного элемента
        console.log(textMutedElement);
    } else {
        console.error('Элемент с классом "text-muted" внутри ".col-md-12" не найден.');
    }
} else {
    console.error('Элемент с классом ".col-md-12" не найден на странице.');
}
