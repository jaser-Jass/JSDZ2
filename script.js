// Задание 1: 

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    displayInfo() {
        console.log(`Название: ${this.title}`);
        console.log(`Автор: ${this.author}`);
        console.log(`Количество страниц: ${this.pages}`);
    }
}

// Пример использования класса
console.log("Задание 1: ")
const book = new Book('Игра престолов', 'Джордж Р.Р. Мартин', 800);
book.displayInfo(); // Выведет информацию о книге


// Задание 2: 

class Student {
    constructor(name, age, grade) {
        this.name = name;   // Имя студента
        this.age = age;     // Возраст студента
        this.grade = grade; // Класс, в котором учится студент
    }

    displayInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Grade: ${this.grade}`);
    }
}

// Пример использования класса
console.log("Задание 2: ")
const student1 = new Student("John Smith", 16, "10th grade");
student1.displayInfo();