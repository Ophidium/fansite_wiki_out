


function recursive(baseValue: number, coinValue: number, coinAmount: number): number {
    
    if (coinAmount > 0)
    {
        coinValue--;
        baseValue =+ coinValue;
        recursive(baseValue, coinValue, coinAmount);
    }
    
    return baseValue;
}

function modifiers(percentage: number, amount: number): number {

    return percentage;
}



export default recursive;