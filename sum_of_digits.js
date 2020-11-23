function digital_root(n) {
  if (String(n).length === 1) {
    return n;
  } else {
    n = String(n).split('');
    n = n.map(a => Number(a)).reduce((a, b) => a + b, 0);
  }
  return digital_root(n);
}
