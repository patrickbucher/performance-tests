import { assertEquals } from "@std/assert/equals";
import { unique } from "./unique.js";

Deno.test("unique", () => {
  assertEquals(
    unique([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
    [1, 2, 3, 4, 5, 6, 7, 8, 9]
  );
});
