/** CW Problem 1
 *      Code Wars Link: https://www.codewars.com/kata/5ce399e0047a45001c853c2b
 *      Python solution:
 *          def parts_sums(ls):
                arr = []
                sum = 0
                for i in ls:
                    sum += i
                arr.append(sum)
                for i in range(len(ls)):
                    sum -= ls[i]
                    arr.append(sum)
                return arr           
 * 
*/

// JavaScript Solution:
ls = [1, 2, 3, 4, 5, 6]
sums = []
function partsSums(ls) {
  let sums = [];
  let sum = 0;
  
  for (let i in ls) {
    sum += ls[i];
  }
  
  for (let i = 0; i <= ls.length; i++) {
    sums.push(sum);
    sum -= ls[i] || 0;
  }
  
  return sums;
}

console.log(partsSums(ls))


/** CW Problem 2
 *      Code Wars Link: https://www.codewars.com/kata/5ce9c1000bab0b001134f5af
 *      Python solution:
 *          def quarter_of(month):
                if month >= 1 and month <= 3:
                    return 1
                elif month >= 4 and month <= 6:
                    return 2
                elif month >= 7 and month <= 9:
                    return 3
                elif month >= 10 and month <= 12:
                    return 4
                else:
                    print("Invalid Input")          
 * 
*/

// JavaScript Solution:
function quarterOf(month) {
    if (month >= 1 && month <= 3) {
      return 1;
    } else if (month >= 4 && month <= 6) {
      return 2;
    } else if (month >= 7 && month <= 9) {
      return 3;
    } else if (month >= 10 && month <= 12) {
      return 4;
    } else {
      console.log("Invalid Input");
    }
  }

console.log(quarterOf(1))
console.log(quarterOf(2))
console.log(quarterOf(3))
console.log(quarterOf(4))
console.log(quarterOf(5))
console.log(quarterOf(6))
console.log(quarterOf(7))
console.log(quarterOf(8))
console.log(quarterOf(9))
console.log(quarterOf(10))
console.log(quarterOf(11))
console.log(quarterOf(12))

