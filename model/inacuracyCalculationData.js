import { getData } from "./DataSettlement.js";

let inacuracyCalculationData = [
    [
        { datum: "01.01.2025", inaccuracy1: [10, 20, 30, 40, 50, 60, 70] },
        { datum: "02.01.2025", inaccuracy1: [10, 20, 30, 40, 50, 60, 70] },
        { datum: "03.01.2025", inaccuracy1: [10, 20, 30, 40, 50, 60, 70] }
    ],
    [
        { datum: "01.01.2025", inaccuracy2: [10, 99, 30, 40, 50, 60, 70] },
        { datum: "02.01.2025", inaccuracy2: [10, 20, 30, 40, 50, 60, 70] },
        { datum: "03.01.2025", inaccuracy2: [10, 20, 30, 40, 50, 60, 70] }
    ],
    [
        { datum: "01.01.2025", inaccuracy3: [10, 20, 30, 40, 50, 60, 70] },
        { datum: "02.01.2025", inaccuracy3: [10, 20, 30, 40, 50, 60, 70] },
        { datum: "03.01.2025", inaccuracy3: [10, 20, 30, 40, 50, 60, 70] }
    ],
    [
        { datum: "01.01.2025", totalInaccuracy: [10, 20, 30, 40, 50, 60, 70] },
        { datum: "02.01.2025", totalInaccuracy: [10, 20, 30, 40, 50, 60, 70] },
        { datum: "03.01.2025", totalInaccuracy: [10, 20, 30, 40, 50, 60, 70] }
    ]
];

// Append new data from dataProvider.js
inacuracyCalculationData = inacuracyCalculationData.concat(getData());
//   что это???
