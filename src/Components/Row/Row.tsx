import React from "react";

type RowProps = {
    nutrient: string,
    amount: number,
    difference: number | null
};

function Row({ nutrient, amount, difference }: RowProps) {
    return (
        <>
            <p className="nutrient">{nutrient}</p>
            <p className="amount">{amount}</p>
            <p className="difference"> {difference && difference >= 0 ? "+" : null}        {difference}</p>
        </>
    )
}

export default Row;


