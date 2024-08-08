console.log("Hello, Node.js!".normalize());

console.log(Math.floor(Math.random()*10));

const rows = 2;
const cols = 3;

// تابع برای چاپ شبکه به صورت بصری
function printGrid(rows, cols) {
  // ایجاد خط افقی با طول صحیح
  const horizontalLine = '-'.repeat(4 * cols - 1); // 4 کاراکتر برای هر ستون (3 برای "-" و 1 برای فضای اضافی)

  // ایجاد خط عمودی با فضای صحیح
  const verticalLine = '|   '.repeat(cols) + '|'; // 4 کاراکتر برای هر ستون (3 فضای خالی و 1 "|")

  for (let r = 0; r < rows; r++) {
    // چاپ سه خط عمودی برای هر ردیف
    for (let i = 0; i < 3; i++) {
      console.log(verticalLine);
    }
    // چاپ خط افقی پس از هر سه خط عمودی
    console.log(horizontalLine);
  }

  // چاپ خط افقی نهایی برای پایان شبکه
  for (let i = 0; i < 3; i++) {
    console.log(verticalLine);
  }
}

// چاپ شبکه
printGrid(rows, cols);

OR

console.log("  |   |  ")
console.log("  |   |  ")
console.log("---------")
console.log("  |   |  ")
console.log("  |   |  ")
console.log("---------")
console.log("  |   |  ")
console.log("  |   |  ")




