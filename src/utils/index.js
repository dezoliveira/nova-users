// return utils functions
export default function formatDate(date) {
  let newDate = new Date(date)
  newDate = newDate.toLocaleDateString()
  return newDate
}