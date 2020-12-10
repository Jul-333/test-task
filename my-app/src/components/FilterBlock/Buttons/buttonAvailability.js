const buttonAvailability = (value, nameButton) => {
  const regexpForLength = /^\d+\.?\d*$/i;
  const regexpForSubstr = /^[a-zA-Z]+(\s[a-zA-Z]*)*$/i;
  const regexp =
    nameButton === "word-length" ? regexpForLength : regexpForSubstr;
    
  const strWithoutSpaces = value.trim();
  if (strWithoutSpaces.length === 0) {
    return true;
  }
  return !regexp.test(strWithoutSpaces);
};

export default buttonAvailability;
