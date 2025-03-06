import React from 'react';
import { useState } from "react";
import { Board } from "./components/Board";

export type SquareValue = "X" | "O" | null;
export default function Game() {
	const [xIsNext, setXIsNext] = useState<boolean>(true);
	const [history, setHistory] = useState<SquareValue[][]>([Array(9).fill(null)]);
	const currentSquares: SquareValue[] = history[history.length - 1];

	function handlePlay(nextSquares: SquareValue[]) {
		setHistory([...history, nextSquares]);
		setXIsNext(!xIsNext);
	}

	return (
		<div className="game">
			<div className="game-board">
				<Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
			</div>
			<div className="game-info">
				<ol>{/* TODO */}</ol>
			</div>
		</div>
	);
}
