
const jobs = Array.from({ length: 100 }, () => 1e9);

const tick = performance.now();

for (const job of jobs) {
  let count = 0;
  for (let i = 0; i <= job; i++) {
    count++;
  }
}

const tock = performance.now();

console.log(`Main Thread took ${tock - tick} ms`);