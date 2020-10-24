function count (numberStart, numberEnd) {
  const interval = setInterval(() => {
    console.log(numberStart);
    if (numberStart === numberEnd) {
      clearInterval(interval);
    } else {
      numberStart++;
    }
  }, 5000);
}

count(1, 10);
