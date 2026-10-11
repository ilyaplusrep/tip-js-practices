"use strict";

// Дополнительное задание, вариант Б: план с выходными.
// Первый календарный день — понедельник, суббота и воскресенье — выходные.
const totalTasks = 14;
const completedTasks = 4;
const dailyLimit = 4;

const maxTasks = 1000;
const maxDailyLimit = 1000;
const daysInWeek = 7;

if (typeof totalTasks !== "number" || typeof completedTasks !== "number") {
  console.log("Ошибка: количество задач должно быть числом, а не строкой или другим типом");
} else if (!Number.isFinite(totalTasks) || !Number.isFinite(completedTasks)) {
  console.log("Ошибка: недопустимое числовое значение количества задач");
} else if (!Number.isInteger(totalTasks) || !Number.isInteger(completedTasks)) {
  console.log("Ошибка: количество задач должно быть целым числом");
} else if (totalTasks < 0 || completedTasks < 0) {
  console.log("Ошибка: количество задач не может быть отрицательным");
} else if (totalTasks > maxTasks) {
  console.log(`Ошибка: общее количество задач не может превышать ${maxTasks}`);
} else if (completedTasks > totalTasks) {
  console.log("Ошибка: выполненных задач больше, чем существует");
} else if (typeof dailyLimit !== "number") {
  console.log("Ошибка: дневная норма должна быть числом, а не строкой или другим типом");
} else if (!Number.isInteger(dailyLimit)) {
  console.log("Ошибка: дневная норма должна быть целым числом");
} else if (dailyLimit < 1 || dailyLimit > maxDailyLimit) {
  console.log(`Ошибка: дневная норма должна быть от 1 до ${maxDailyLimit}`);
} else {
  let remainingTasks = totalTasks - completedTasks;
  let calendarDay = 0;
  let workDays = 0;

  console.log(`Осталось задач: ${remainingTasks}`);

  if (remainingTasks === 0) {
    console.log("Все задачи уже выполнены");
  }

  while (remainingTasks > 0) {
    calendarDay += 1;
    // 1 — понедельник, ..., 6 — суббота, 7 — воскресенье
    const weekDay = ((calendarDay - 1) % daysInWeek) + 1;

    let weekDayName;
    switch (weekDay) {
      case 1: weekDayName = "пн"; break;
      case 2: weekDayName = "вт"; break;
      case 3: weekDayName = "ср"; break;
      case 4: weekDayName = "чт"; break;
      case 5: weekDayName = "пт"; break;
      case 6: weekDayName = "сб"; break;
      default: weekDayName = "вс";
    }

    if (weekDay === 6 || weekDay === 7) {
      console.log(`День ${calendarDay} (${weekDayName}): выходной, осталось ${remainingTasks}`);
    } else {
      workDays += 1;
      const tasksToday = Math.min(dailyLimit, remainingTasks);
      remainingTasks -= tasksToday;
      console.log(`День ${calendarDay} (${weekDayName}): выполнено ${tasksToday}, осталось ${remainingTasks}`);
    }
  }

  console.log(`Рабочих дней: ${workDays}`);
  console.log(`Календарных дней: ${calendarDay}`);
}
