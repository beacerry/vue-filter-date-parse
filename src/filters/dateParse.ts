const parse = (input: string, format: string, key: string): string => {
  const index = format.indexOf(key);

  return input.slice(index, index + key.length);
};

export const dateParseFilter = (input: string, format: string = 'YYYY-MM-DD HH.mm.ss'): Date => {
  let year = 2000;
  if (input.includes('YYYY')) {
    year = parseInt(parse(input, format, 'YYYY'), 10);
  } else if (input.includes('YY')) {
    year = parseInt(parse(input, format, 'YY'), 10) + 2000;
  }

  let month = 0;
  if (input.includes('MM')) {
    month = parseInt(parse(input, format, 'MM'), 10) - 1;
  } else if (input.includes('M')) {
    month = parseInt(parse(input, format, 'M'), 10) - 1;
  }

  let date = 1;
  if (input.includes('DD')) {
    date = parseInt(parse(input, format, 'DD'), 10);
  } else if (input.includes('D')) {
    date = parseInt(parse(input, format, 'D'), 10);
  }

  let hours = 0;
  if (input.includes('HH')) {
    hours = parseInt(parse(input, format, 'HH'), 10);
  } else if (input.includes('H')) {
    hours = parseInt(parse(input, format, 'H'), 10);
  }

  let minutes = 0;
  if (input.includes('mm')) {
    minutes = parseInt(parse(input, format, 'mm'), 10);
  } else if (input.includes('m')) {
    minutes = parseInt(parse(input, format, 'm'), 10);
  }

  let seconds = 0;
  if (input.includes('ss')) {
    seconds = parseInt(parse(input, format, 'ss'), 10);
  } else if (input.includes('s')) {
    seconds = parseInt(parse(input, format, 'ss'), 10);
  }

  return new Date(year, month, date, hours, minutes, seconds);
};