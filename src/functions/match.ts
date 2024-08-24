export default function match<T extends string | number, R>(
  value: T,
  options: Partial<Record<T, R>> & { _: R }
) {
  for (const [key, returnValue] of Object.entries(options)) {
    if (key === value) {
      return returnValue;
    }
  }

  return options["_"];
}
