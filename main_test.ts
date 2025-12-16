import { assertEquals } from "@std/assert";
import {
  fibLoop,
  fibonacci,
  findPrimes,
  letterFrequency,
  letterFrequencyMap,
  letterFrequencyShift,
  memoizedFib,
  unique,
} from "./main.ts";

const text = `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
takimata sanctus est Lorem ipsum dolor sit amet.`;

Deno.test("letter frequency", () => {
  const text = "abc AB a";
  const actual = letterFrequency(text);
  assertEquals(actual.length, 3);
  assertEquals(actual[0].letter, "a");
  assertEquals(actual[0].count, 3);
  assertEquals(actual[1].letter, "b");
  assertEquals(actual[1].count, 2);
  assertEquals(actual[2].letter, "c");
  assertEquals(actual[2].count, 1);
});

Deno.test("letter frequency map", () => {
  const text = "abc AB a";
  const actual = letterFrequencyMap(text);
  assertEquals(actual.length, 3);
  assertEquals(actual[0].letter, "a");
  assertEquals(actual[0].count, 3);
  assertEquals(actual[1].letter, "b");
  assertEquals(actual[1].count, 2);
  assertEquals(actual[2].letter, "c");
  assertEquals(actual[2].count, 1);
});

Deno.test("letter frequency shift", () => {
  const text = "abc AB a";
  const actual = letterFrequencyShift(text);
  assertEquals(actual.length, 3);
  assertEquals(actual[0].letter, "a");
  assertEquals(actual[0].count, 3);
  assertEquals(actual[1].letter, "b");
  assertEquals(actual[1].count, 2);
  assertEquals(actual[2].letter, "c");
  assertEquals(actual[2].count, 1);
});

Deno.bench("letter frequency", () => {
  const actual = letterFrequency(text.repeat(100));
  assertEquals(actual.length, 21);
});

Deno.bench("letter frequency map", () => {
  const actual = letterFrequencyMap(text.repeat(100));
  assertEquals(actual.length, 21);
});

Deno.bench("letter frequency shift", () => {
  const actual = letterFrequencyShift(text.repeat(100));
  assertEquals(actual.length, 21);
});

Deno.test("find prime numbers", () => {
  const limit = 20;
  const expected = [2, 3, 5, 7, 11, 13, 17, 19];
  const actual = findPrimes(limit);
  assertEquals(actual, expected);
});

Deno.bench("prime numbers", () => {
  assertEquals(
    findPrimes(100),
    [
      2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67,
      71, 73, 79, 83, 89, 97,
    ],
  );
});

Deno.bench("Fibonacci", () => {
  assertEquals(fibonacci(30), 832040);
});

Deno.bench("Memoized Fibonacci", () => {
  const memfib = memoizedFib();
  assertEquals(memfib(30), 832040);
});

Deno.bench("Fibonacci Loop", () => {
  assertEquals(fibLoop(30), 832040);
});

Deno.bench("unqiue", () => {
  assertEquals(
    unique([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5]),
    [6, 7, 8, 9],
  );
});
