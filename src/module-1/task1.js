function reverseString(data) {
  const splitted = String(data).split("");
  const reversed = splitted.reverse().join("");
  process.stdout.write(reversed);
}

process.openStdin().addListener("data", reverseString);
