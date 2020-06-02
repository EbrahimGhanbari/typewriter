const increment = 200;
const maxTime = 9000;
let delay = 0;
let printControl = 0;

for(delay = 100; delay < maxTime; delay += increment) {
  
  if (printControl === 0) {

    setTimeout(() => {
      process.stdout.write('\r|   ');
    }, delay);

    printControl++;

  } else if (printControl === 1) {

    setTimeout(() => {
      process.stdout.write('\r/   ');
    }, delay);

    printControl++;
  } else if (printControl === 2) {

    setTimeout(() => {
      process.stdout.write('\r-   ');
    }, delay);

    printControl++;
  } else if (printControl === 3) {

    setTimeout(() => {
      process.stdout.write('\r\\   ');
    }, delay);

    printControl = 0;
  }

}

setTimeout(() => {
  console.log();
}, delay);

