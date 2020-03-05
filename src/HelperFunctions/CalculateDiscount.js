export function Discount (price, discount) {
  const Result = (price - ((price * discount) / 100)).toFixed(0)
  return Result
}
export function DiscountOnly (price, discount) {
  return ((price * discount) / 100).toFixed(0)
}
