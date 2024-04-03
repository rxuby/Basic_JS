let arr = Math.max(22, 19, 2, 89, 77);
console.log(arr + '\n');


const num = [3, 5, 4, 2, 1]
num.sort();
console.log(num + '\n');
// console.log('\n');


function genPyramid(n) {
    let p = '';
    for (let i = 0; i < n; i++) {
        p += ' '.repeat(n - i - 1);
        p += '*'.repeat(2 * i + 1);
        p += '\n';
    }
    console.log(p);
}

genPyramid(5);


