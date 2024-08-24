type Options = {
  from?: number;
};

export default function range(count: number, options?: Options): number[] {
  const range = Array.from(Array(count).keys());
  const from = options?.from ?? 0;

  return range.map((v) => v + from);
}
