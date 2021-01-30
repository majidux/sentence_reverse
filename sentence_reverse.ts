const reverseWords = (str: string): string => {
  const splitArr: string[] = str.split(' ');
  const k: string[] = splitArr.map((i) => {
    const f = i.split('');
    const l = f.reverse();
    return l.join('');
  });
  return k.join(' ');
};
