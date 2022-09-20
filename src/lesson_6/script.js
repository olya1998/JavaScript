function minimum (a, b, c, d) {
  if(! Number.isInteger(a) || !Number.isInteger(b) || !Number.isInteger(c) || !Number.isInteger(d)) {
      console.log('input parameters are invalid');
      return;
  }   

  let minVal = a;
  if (minVal > b) {
    minVal = b;
  } 
    if (minVal > c) {
    minVal = c;
  } 
    if (minVal > d) {
    minVal = d;
  }

  return minVal;
} 

function minDivider(m, n) {	
   if(! Number.isInteger(m) || !Number.isInteger(n)) {
      console.log('input parameters are invalid');
      return;
   }

  const min = m < n ? m : n;	

  for(let i = min; i >= 2; i--) {

    if(m % i == 0 && n % i == 0) {
      return i;
    }
  }

  return  'no divider :( ';
}

function isPerfect(number) {
  if(! Number.isInteger(number)) {
    console.log('input parameter is invalid');
    return;
 }

  let temp = 0;
  for(let i = 1;i <= number / 2; i++) {
  if(number % i === 0){
      temp += i;
    }
  }
   
  if(temp === number && temp !== 0){
    return number + " is a perfect number.";
  } else {
    return "sorry, it is NOT a perfet number";
  }
  // TODO:: idialy this function should return Boolean
  // following  S (single responsibility) form SOLID 
 } 

function range (a, b) {
  if(! Number.isInteger(a) || !Number.isInteger(b)) {
      console.log('Не правільні параметри');
      return;
  }

  let min;
  let max;
  if (a == b) {
    return a;
  } else if (a > b) {
     min = b;
     max = a;
  } else {
     min = a;
     max = b;
  }

  let rangeSum = 0;
  for (let i = min; i <= max; i++) {
    rangeSum += i;
  }
  return rangeSum;
  
}

function cToF(celsius) {
  if (! Number.isInteger(celsius)) {
    console.log('Не правільний параметр');
    return;
  }
  const fahrenheit = celsius * 9 / 5 + 32;

  return celsius + '\xB0C is ' + fahrenheit + ' \xB0F.' ;
}

function getRandomInt(min, max) {
  if(! Number.isInteger(min) || !Number.isInteger(max)) {
    console.log('Не правільні параметри');
    return;
 }

  return Math.floor(Math.random() * (max - min)) + min;
}