﻿import React from "react";
import { Square } from "./Square";
import { SquareValue } from "../App";

interface ComponentProps {
	xIsNext: boolean,
	squares: SquareValue[],
	onPlay: Function
}

export function Board({ xIsNext, squares, onPlay }: ComponentProps) {
	const winner = calculateWinner({ squares: squares });
	let status: string;
	if (winner) {
		status = "Winner: " + winner;
	} else {
		status = "Next player: " + (xIsNext ? "X" : "O");
	}

	function handleClick(i: number) {
		if (squares[i] || calculateWinner({ squares })) return;

		const nextSquares = squares.slice();
		if (xIsNext) {
			nextSquares[i] = "X";
		} else {
			nextSquares[i] = "O";
		}
		onPlay(nextSquares);
	}

	return (
		<>
			<div className="status">{status}</div>
			<div className="board-row">
				<Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
				<Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
				<Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
			</div>
			<div className="board-row">
				<Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
				<Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
				<Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
			</div>
			<div className="board-row">
				<Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
				<Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
				<Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
			</div>
		</>
	);
}

function calculateWinner({ squares }: { squares: SquareValue[] }): SquareValue|null {
	type WinningSquares = { a: number, b: number, c: number };
	const lines: number[][] = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];

	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			return squares[a];
		}
	}
	return null;
}