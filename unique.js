export function unique(elements) {
  const result = [];
  for (const e of elements) {
    if (!result.includes(e)) {
      result.push(e);
    }
  }
  return result;
}
