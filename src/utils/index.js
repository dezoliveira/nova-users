// return utils functions
export const utils = () => {
  // formate dob date to locale string
  const formatDate = (date) => {
    let newDate = new Date(date)
    newDate = newDate.toLocaleDateString()
    return newDate
  }

  // color pallete dictionary
  const iconPalette = (icon) => {
    if (icon === "mail")
      return "blueviolet"

    if (icon === "mars")
      return "blue"

    if (icon === "venus")
      return "red"

    if (icon === "cake")
      return "brown"

    if (icon === "mobile")
      return "black"

    if (icon === "location")
      return "tomato"

    if (icon === "idCard")
      return "darkblue"
  }

  return {
    formatDate,
    iconPalette
  }
}