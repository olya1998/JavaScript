// Створити сторінку, що буде показувати список продуктів для купівлі

// Cписок продуктів для купівлі - масив, кожен елемент якого представлений нижче кодом

// Довжина такого масиву - 15

 
const productList = [
    {
        productName: 'bread',
        productData: {
            weight: 200,
            certificate: true,
            dateofExpiry: '21/10/2022',
            sugarFree: true,
        },
        productProvider: 'FOP ATB',
        productCountry: 'Ukraine',
        productPrice: 12.14,
    },
    {
        productName: 'sugar',
        productData: {
            weight: 500,
            certificate: true,
            dateofExpiry: '15/05/2022',
            sugarFree: false,
        },
        productProvider: 'Svitanok',
        productCountry: 'Ukraine',
        productPrice: 30.35,
    },
    {
        productName: 'avocado ',
        productData: {
            weight: 30,
            certificate: true,
            dateofExpiry: '15/10/2022',
            sugarFree: true,
    },
        productProvider: 'FOP Class',
        productCountry: 'Ukraine',
        productPrice: 45.16,
    },
    {
        productName: 'banana',
        productData: {
            weight: 150,
            certificate: true,
            dateofExpiry: '23/10/2022',
            sugarFree: false,
    },
        productProvider: 'FOP Posad',
        productCountry: 'SouthAfrica',
        productPrice: 25.14,
    },
    {
        productName: 'mango',
        productData: {
            weight: 250,
            certificate: true,
            dateofExpiry: '20/10/2022',
            sugarFree: false,
    },
        productProvider: 'FOP Owoci',
        productCountry: 'India',
        productPrice: 85.94,
    },
    {
        productName: 'blackberry',
        productData: {
            weight: 150,
            certificate: true,
            dateofExpiry: '15/10/2022',
            sugarFree: false,
    },
        productProvider: 'FOP ATB',
        productCountry: 'Poland',
        productPrice: 55.33,
    },
    {
        productName: 'cucumber',
        productData: {
            weight: 258,
            certificate: true,
            dateofExpiry: '21/10/2022',
            sugarFree: true,
    },
        productProvider: 'FOP ATB',
        productCountry: 'Ukraine',
        productPrice: 10.00,
    },
    {
        productName: 'coffe',
        productData: {
            weight: 400,
            certificate: true,
            dateofExpiry: '12/06/2022',
            sugarFree: true,
    },
        productProvider: 'FOP CLASS',
        productCountry: 'Ukraine',
        productPrice: 94.99,
    },
    {
        productName: 'yogurt',
        productData: {
            weight: 90,
            certificate: true,
            dateofExpiry: '10/10/2022',
            sugarFree: false,
    },
        productProvider: 'FOP SLASTENA',
        productCountry: 'Ukraine',
        productPrice: 16.87,
    },
    {
        productName: 'passion fruit',
        productData: {
            weight: 40,
            certificate: true,
            dateofExpiry: '21/10/2022',
            sugarFree: false,
    },
        productProvider: 'FOP Fruits',
        productCountry: 'Brazil',
        productPrice: 30.99,
    },
    {
        productName: 'tomato',
        productData: {
            weight: 200,
            certificate: true,
            dateofExpiry: '21/10/2022',
            sugarFree: true,
    },
        productProvider: 'FOP ATB',
        productCountry: 'Ukraine',
        productPrice: 75.99,
    },
    {
        productName: 'carrot',
        productData: {
            weight: 200,
            certificate: true,
            dateofExpiry: '16/10/2022',
            sugarFree: false,
    },
        productProvider: 'FOP ATB',
        productCountry: 'Ukraine',
        productPrice: 12.14,
    },
    {
        productName: 'potato',
        productData: {
            weight: 600,
            certificate: true,
            dateofExpiry: '01/09/2022',
            sugarFree: true,
    },
        productProvider: 'FOP ATB',
        productCountry: 'Ukraine',
        productPrice: 14.44,
    },
    {
        productName: 'oil',
        productData: {
            weight: 500,
            certificate: false,
            dateofExpiry: '21/10/2022',
            sugarFree: true,
    },
        productProvider: 'FOP ATB',
        productCountry: 'Ukraine',
        productPrice: 35.55,
    },
    {
        productName: 'tea',
        productData: {
            weight: 200,
            certificate: false,
            dateofExpiry: '01/03/2022',
            sugarFree: true,
    },
        productProvider: 'ASHAN',
        productCountry: 'China',
        productPrice: 43.00,
    },
];

// const body = document.getElementsByTagName('body')[0];
// body.style.color = 'red'


const ul = document.createElement('ul');

document.body.append(ul)

productList.forEach((element) => {
// 
    const li = document.createElement('li');
    const certificate = element.productData.certificate ? '' : '<i class="fa fa-exclamation" aria-hidden="true"></i>';
    const sugar = element.productData.sugarFree ? '<img src="./icons/sugar.png" width = " 24 " alt="">' : '<img src="./icons/sugar-free.png" width = " 24 " alt="">'
    const flag = `<img src="./icons/${element.productCountry}.png" width = " 14 " alt="">`;



    li.innerHTML = ` ${certificate} ${sugar} ${element.productName} : weight ${element.productData.weight}, date of expiry: ${element.productData.dateofExpiry}, ${flag}, price: ${element.productPrice}`;

    ul.append(li);
  });



/* {
    productName: 'bread',
    productData: {
        weight: 200,
        certificate: true,
        dateofExpiry: '21/10/2022',
        sugarFree: true,
    },
    productProvider: 'FOP ATB',
    productCountry: 'Ukraine',
    productPrice: 12.14,
}, */









// // 1.найтип доступ к node 2. посмотреть по уроку или гугл, как добавлять элементы в базовый узел (в ноду) 3. Пройти циклом по массиву объектов в котором внешние края ul а внутренние li


// Сформувати список покупок у вигляді списку (<ul> з <li>)

// Кожний парний рядок повинен бути стилізований із backgroundColor, щоб чітко виділявся й було зручно читати. Колір - довільний

// productCountry - повинен бути <img /> із відповідним прапором

// Якщо товар не сертифікований - додавати стилізований знак оклику (!), щоб користувач звернув увагу

// Додати стилі до такого списку покупок. Якомога більше, без конкретних вимог

// Додати будь-який HTML-тег, в якого записати вартість всього продуктового кошика

// Додати будь-який HTML-тег, в якого записати найдорожчий із продуктів цього кошика

// Додати будь-який HTML-тег, в якого записати середню ціну по продуктах
