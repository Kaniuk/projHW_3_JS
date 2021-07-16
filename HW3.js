/*
- створити функцію яка обчислює та повертає площу прямокутника висотою
- створити функцію яка обчислює та повертає площу кола
- створити функцію яка обчислює та повертає площу циліндру
- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
- створити функцію яка при створює блок з текстом. Текст задати через аргумент
- створити функцію яка при створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
- створити функцію яка при створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

S=a*b
-*/

function square(a, b) {
    return a * b;
}

let res = square(2, 5);
console.log(res);


function areaOfCircle(r) {
    return ((r * r) * Math.PI);
}

let res1 = areaOfCircle(12);
console.log(res1);


function cylinderArea(r) {
    return ((2 * Math.PI) * (r * r) + (2 * Math.PI) * (r * r));
}

let res2 = cylinderArea(5);
console.log(res2);


function test() {
    let min;
    let max;
    for (const argument of arguments) {
        if (typeof min === "undefined" || argument < min) {
            min = argument;
        }

        if (typeof max === "undefined" || argument > max) {
            max = argument;
        }
    }
    console.log('min =', min);
    console.log('max =', max);

}

function writeText(text) {
    document.write(`
        <div>
            ${text}
        </div>
    `)
}

writeText('I have already wrote this text')


function list(liText) {
    document.write(`
        <ul>
           <li>${liText}</li> 
           <li>${liText}</li> 
           <li>${liText}</li> 
        </ul>
    `)

}

list('hello')


function list1(liText, n) {
    document.write('<ul>');
    for (let i = 0; i < n; i++) {
        document.write(`<li>${liText}</li>`);
    }
    document.write('</ul>');
}

list1('Hello', 5)


function list2() {
    document.write('<ul>');
    for (const argument of arguments) {
        document.write(`<li>${argument}</li>`);
    }
    document.write('</ul>');
}

list2('Hello', true, false, null, 5)