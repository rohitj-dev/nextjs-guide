export function getOriginalPrice(discountedPrice: number, discountPercentage: number): string {
  const originalPrice = discountedPrice / (1 - discountPercentage / 100);

  return originalPrice.toFixed(2);
}
