export const pad = (
  input: number | string,
  size: number,
  padCharacter: string = "!"
) => {
  const output: string = padCharacter.repeat(size) + input;
  return output.substr(output.length - size) as string;
};
