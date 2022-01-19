// CLI arguments
const args = process.argv.slice(2);

let x = 0;
let arr = [];

// Grab CLI args and push into array
for (const num of args) {
  arr.push(Number(num));
}

const timer = (count, seconds, action) => {
  setTimeout(() => {
    if (arr.length === 0 || isNaN(arr[0]) || arr[0] < 0) {
      console.log('terminate');
      return;
    }
    console.log(count);
    if (arr.includes(count)) {
      process.stdout.write('\x07');
    }
    action();
  }, seconds);
};

const time = () => {
  timer(x++, 1000, time);
};

time();