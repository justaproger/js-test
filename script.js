// Найти элемент с классом "footer"
var footerElement = document.querySelector('.footer');

if (footerElement) {
    // Если элемент найден, найти внутри него элемент с классом "text-muted"
    var textMutedElement = footerElement.querySelector('.text-muted');

    if (textMutedElement) {
        // Если элемент с классом "text-muted" найден, вы можете с ним что-то сделать
        console.log("Найден элемент с классом 'text-muted'");
        // Например, вы можете изменить его текст или стили
    } else {
        console.log("Элемент с классом 'text-muted' не найден внутри элемента с классом 'footer'");
    }
} else {
    console.log("Элемент с классом 'footer' не найден");
}
