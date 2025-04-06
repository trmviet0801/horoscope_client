export const constructPropertyName = (name) => {
  const matches = name.match(/[A-Z]/);
  let result = "";
  let count = 0;

  if (matches == null)
    return name === "description"
      ? "Daily Overview"
      : name[0].toUpperCase() + name.substring(1);

  for (let i = 0; i <= matches.length; i++) {
    const element = matches[i];
    let temp = name[count].toUpperCase();
    for (let i = count + 1; i < name.length; i++) {
      if (name[i] !== element) {
        temp += name[i];
      } else {
        temp += " ";
        count = i;
        break;
      }
    }
    result += temp;
  }
  return result;
};
