export const pad = (input: number, size: number) => {
  const output: string = "000000000" + input;
  return output.substr(output.length - size) as string;
};
