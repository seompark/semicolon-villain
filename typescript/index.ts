function evil (target: string) {
  return target.replace('\u003B', '\u037E');
}

function helloWorld (): void {
  const semi = 'Semicolon';
  console.log(`Hello, ${semi}!`);
}

console.log(evil(helloWorld.toString()));
