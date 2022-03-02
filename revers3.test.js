const removeChar = require("././script3");

test(
  'Проверям слайс строки',
  () => {
    expect(removeChar('hello world')).toBe('ello worl');
  }
);
test(
  'Проверям слайс строки',
  () => {
    expect(removeChar('Richard Phillips Feynman')).toBe('ichard Phillips Feynma');
  }
);
test(
  'Проверям слайс строки',
  () => {
    expect(removeChar('ssstarrRr')).toBe('sstarrR');
  }
);

