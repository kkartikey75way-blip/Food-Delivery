interface PriceResult {
  originalPrice: number;
  discountAmount: number;
  finalPrice: number;
}

export function calculateFinalPrice(
  price: number,
  discount: number
): PriceResult {
  const discountAmount = (price * discount) / 100;
  const finalPrice = price - discountAmount;

  return {
    originalPrice: price,
    discountAmount,
    finalPrice: Number(finalPrice.toFixed(2)),
  };
}
