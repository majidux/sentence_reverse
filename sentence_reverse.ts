const reverseWords = (str: string): string => {
  const splitArr: string[] = str.split(' ');
  const words: string[] = splitArr.map((i) => {
    return i.split('').reverse().join('');
  });
  return words.join(' ');
};
