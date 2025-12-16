export type Entry = {
  letter: string;
  count: number;
};

const aCharCode = "a".charCodeAt(0);
const zCharCode = "z".charCodeAt(0);

export function letterFrequency(text: string): Array<Entry> {
  const frequencies: Array<Entry> = [];
  for (const letter of text.toLowerCase()) {
    const charCode = letter.charCodeAt(0);
    if (charCode < aCharCode || charCode > zCharCode) {
      continue;
    }
    let found = false;
    for (let i = 0; i < frequencies.length; i++) {
      if (frequencies[i].letter == letter) {
        frequencies[i].count++;
        found = true;
        break;
      }
    }
    if (!found) {
      frequencies.push({ letter, count: 1 });
    }
  }
  return frequencies.toSorted((a: Entry, b: Entry) =>
    a.letter.localeCompare(b.letter),
  );
}

export function letterFrequencyMap(text: string): Array<Entry> {
  const frequencies: Map<string, Entry> = new Map();
  for (const letter of text.toLowerCase()) {
    const charCode = letter.charCodeAt(0);
    if (charCode < aCharCode || charCode > zCharCode) {
      continue;
    }
    const entry: Entry = frequencies.get(letter) ?? { letter, count: 0 };
    frequencies.set(letter, { letter, count: entry.count + 1 });
  }
  return [...frequencies.values()].toSorted((a: Entry, b: Entry) =>
    a.letter.localeCompare(b.letter),
  );
}

export function letterFrequencyShift(text: string): Array<Entry> {
  const frequencies: Array<Entry> = new Array(26);
  for (let c = 0; c < 26; c++) {
    frequencies[c] = {
      letter: String.fromCharCode(c + aCharCode),
      count: 0,
    };
  }
  for (const letter of text.toLowerCase()) {
    const index = letter.charCodeAt(0) - aCharCode;
    if (index >= 0 && index < 26) {
      frequencies[index].count++;
    }
  }
  return frequencies
    .filter(({ count }) => count > 0)
    .toSorted((a: Entry, b: Entry) => a.letter.localeCompare(b.letter));
}

export function findPrimes(limit: number): Array<number> {
  const isPrime = (x: number) => {
    for (let i = 2; i < x; i++) {
      if (x % i == 0) {
        return false;
      }
    }
    return true;
  };
  const primes = new Array<number>();
  for (let i = 2; i <= limit; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

export function fibonacci(n: number): number {
  if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  } else {
    return fibonacci(n - 2) + fibonacci(n - 1);
  }
}

export function memoizedFib(): (x: number) => number {
  const cache = new Map<number, number>();
  return (x: number): number => {
    const cached = cache.get(x);
    if (!cached) {
      const result = fibonacci(x);
      cache.set(x, result);
      return result;
    }
    return cached;
  };
}

export function fibLoop(n: number): number {
  let a = 0,
    b = 1;
  for (let i = 0; i < n; i++) {
    const c = a + b;
    a = b;
    b = c;
  }
  return a;
}

export function unique(xs: Array<number>): Array<number> {
  const result = new Array<number>();
  for (let i = 0; i < xs.length; i++) {
    let xUnique = true;
    for (let j = 0; j < xs.length; j++) {
      if (i == j) {
        continue;
      }
      if (xs[i] == xs[j]) {
        xUnique = false;
        break;
      }
    }
    if (xUnique) {
      result.push(xs[i]);
    }
  }
  return result;
}
