export const toUpperCase = (word) => {
  let upperCased = word.split("")
  upperCased[0] = upperCased[0].toUpperCase()
  upperCased.join("")
  return upperCased
}
