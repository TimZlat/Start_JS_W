// получаем элемент динозаврика по его ID
const dino = document.getElementById("dino");

// функция прыжка
function jump() {
  // проверяем, не находится ли динозаврик в прыжке
  if (dino.classList != "jump") {
    // добавляем класс jump для начала анимации прыжка
    dino.classList.add("jump");

    // удаляем класс jump через 300 миллисекунд, чтобы завершить прыжок
    setTimeout(function () {
      dino.classList.remove("jump");
    }, 300);
  }
}

// добавляем обработчик событий 
document.addEventListener("keydown", function (event) {
    // проверяем, была ли нажата клавиша пробела
    if (event.key === " ") {
      // если пробел нажат, вызываем функцию jump()
      jump();
    }
  });