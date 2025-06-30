export function calculateTotal(amounts: string): number {
    const amountArray = amounts
        .split(/[,\n]+/)
        .map(amt => amt.trim())
        .filter(amt => amt !== "")
        .map(amt => parseFloat(amt))
    if (amountArray.some(isNaN)) { // 如果amountArray 数组中存在至少一个 isNaN，则返回0
        return 0
    }
    return amountArray.reduce((acc, curr) => acc + curr, 0)
}