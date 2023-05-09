//1
function bracketMatch(str) {
    const brackets = {
      '{': '}',
      '[': ']',
      '(': ')'
    };
    const stack = [];
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (brackets[char]) {
        stack.push(char);
      } else if (char === '}' || char === ']' || char === ')') {
        const lastBracket = stack.pop();
        if (brackets[lastBracket] !== char) {
          return false;
        }
      }
    }
    return stack.length === 0;
  }
  

    console.log(bracketMatch('{hello world]')); // true
    console.log(bracketMatch('{hello [world]}')); // true
    console.log(bracketMatch('{hello [world)}')); // false
