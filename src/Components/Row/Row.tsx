import React from "react";

type RowProps = {
    nutrient: string,
    amount: string,
    difference: number | null
};

function Row({ nutrient, amount, difference }: RowProps) {
    return (
        <>
            <p className="nutrient">{nutrient}</p>
            <p className="amount">{Number(amount) ? amount : "trace"}</p>
            <p className="difference"> {difference ? (difference > 0 ? `+ ${Math.abs(difference)}` : `- ${Math.abs(difference)}`): null}</p>
        </>
    )
}

export default Row;


