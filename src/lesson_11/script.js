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
            certificate: false,
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
            certificate: false,
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
            certificate: false,
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
            certificate: false,
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
            certificate: true,
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

const ul = document.createElement('ul');

document.body.append(ul);
let summary = 0;
let max = 0;

productList.forEach((element) => {
    summary = summary + element.productPrice;
    max = element.productPrice > max ? element.productPrice : max;

    const li = document.createElement('li');
    const certificate = element.productData.certificate ? '' : '<i class="fa fa-exclamation" aria-hidden="true"></i>';
    
    const sugarValue = element.productData.sugarFree ? 'sugar' : 'sugar-free'; 
    const sugar = `<img src="./icons/${sugarValue}.png" width = "24">`;
    
    const flag = `<img src="./icons/${element.productCountry}.png" width = "24">`;

    const date = `<span class="date">${element.productData.dateofExpiry}</span>`;

    const productProvider = `<span class="provider">${element.productProvider}</span>`;

    li.innerHTML = `${certificate} ${sugar} ${element.productName} : weight ${element.productData.weight} , date of expiry: ${date} , ${productProvider} ${flag} price: ${element.productPrice}`;

    ul.append(li);
  });

  const avg = (summary / productList.length).toFixed(2);
  const summaryDiv = document.createElement('div');

  summaryDiv.classList.add('summary');
  summaryDiv.innerHTML = `Total summary: ${summary}`;
  document.body.append(summaryDiv);

  const avgDiv = document.createElement('div');
  avgDiv.classList.add('avg');
  avgDiv.innerHTML = `Average price: ${avg}`;
  document.body.append(avgDiv);

  const maxDiv = document.createElement('div');
  maxDiv.classList.add('max');
  maxDiv.innerHTML = `Maximum price: ${max}`;
  document.body.append(maxDiv);