import React, { useState } from "react"

function Board(): React.ReactNode {
    enum Player {
        X = "player1",
        O = "player2"
    }
    interface GameState {
        nextPlayer: Player; 
        isOngoing: boolean;
    }

    
    const [state, setState] = useState<GameState>({
        nextPlayer: Player.X,
        isOngoing: true
    })
    let nextState: SquareState = state.nextPlayer === Player.X ? SquareState.Player1 : SquareState.Player2;

    function onClick() {
        setState({
            nextPlayer: state.nextPlayer === Player.X ? Player.O : Player.X,
            isOngoing: true
        })
        console.log(state)
        nextState = state.nextPlayer === Player.X ? SquareState.Player1 : SquareState.Player2;
    }

    return (
        <div id="board">
            <Square state={SquareState.Default} nextState={nextState} onClick={onClick}/>
            <Square state={SquareState.Default} nextState={nextState} onClick={onClick}/>
            <Square state={SquareState.Default} nextState={nextState} onClick={onClick}/>
            <Square state={SquareState.Default} nextState={nextState} onClick={onClick}/>
            <Square state={SquareState.Default} nextState={nextState} onClick={onClick}/>
            <Square state={SquareState.Default} nextState={nextState} onClick={onClick}/>
            <Square state={SquareState.Default} nextState={nextState} onClick={onClick}/>
            <Square state={SquareState.Default} nextState={nextState} onClick={onClick}/>
            <Square state={SquareState.Default} nextState={nextState} onClick={onClick}/>
        </div>
    )
}

enum SquareState {
    Default = "default",
    Disabled = "disabled",
    Player1 = "player1",
    Player2 = "player2"
}

interface SquareProps {
    state: SquareState;
    nextState: SquareState;
    onClick: () => void;
}

function Square(props: SquareProps): React.ReactNode {
    const [state, setState] = useState<SquareState>(props.state)

    function handleClick(): void {
        props.onClick()
        setState(props.nextState)
    }

    function renderState(state: SquareState): string {
        switch (state) {
            case SquareState.Default:
            case SquareState.Disabled:
                return " "
            case SquareState.Player1:
                return "X"
            case SquareState.Player2:
                return "O"
        }
    }

    return (
        <button className="square" onClick={handleClick}>
            <span>{renderState(state)}</span>
        </button>
    )
}

export default Board