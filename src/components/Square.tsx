import React, { MouseEventHandler } from "react";
import { SquareValue } from "../App";

export function Square({ value, onSquareClick }: {
	value: SquareValue,
	onSquareClick: MouseEventHandler<HTMLButtonElement>
}) {
	return (
		<button className="square" onClick={onSquareClick}>{value}</button>
	);
}