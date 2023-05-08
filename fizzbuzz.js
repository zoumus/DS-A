/*
 * Complete the 'fizzbuzz' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts INTEGER n as parameter.
 */

function fizzbuzz(n) {
    let answer = [];
    for(let i = 1; i <= n; i ++){
        // if (i === 0) continue;
        if(i % 3 === 0 && i % 5 === 0) {
            answer.push('FizzBuzz');
            continue;
        } else if(i % 3 === 0) {
            answer.push('Fizz')
        } else if(i % 5 === 0) {
            answer.push('Buzz')
            
        } else {
            answer.push(i.toString())
        }
    }
    return answer;
}

//n = 3 => ['1', '2', 'Fizz']
//n = 5 => ['1', '2', 'Fizz', '4', 'Buzz']
