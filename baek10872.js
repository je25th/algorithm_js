//팩토리얼 

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

let num = Number(input);
console.log(solution(num));

function solution(n) {
  if(n == 1 || n == 0) return 1;
  else return n*solution(n-1);
}