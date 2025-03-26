export function inacuracyCalculation(trueTemp, measuredTemp) {
    let inaccuracy = 0;
    if (trueTemp >= 0) {        
        inaccuracy = (Math.abs(measuredTemp - trueTemp) / Math.abs(trueTemp)) * 100
    } else {
        inaccuracy = Math.abs(measuredTemp - trueTemp);
    };

if (dayPoint === 0) { 
    const inaccuracy1 = inaccuracy
    // save to the inacuracyCalculationData file TODO
    }
else if (dayPoint === 1) {
    const inaccuracy2 = inaccuracy
    // save to the inacuracyCalculationData file TODO
    }
else (dayPoint === 2) { 
    const inaccuracy3 = inaccuracy
    // save to the inacuracyCalculationData file TODO
    };
    return inaccuracy;
    };

let totalInaccuracy = (inaccuracy1 + inaccuracy2 + inaccuracy3) / 3;
// save to the inacuracyCalculationData file TODO
// save to the сhartData file TODO