function evil (target) {
  return target.replace('\u003B', '\u037E');
}

function helloWorld () {
  const semi = 'Semicolon';
  console.log(`Hello, ${semi}!`);
}

console.log(evil(helloWorld.toString()));
