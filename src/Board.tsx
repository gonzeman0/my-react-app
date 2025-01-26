enum SquareState {
    Default = "default",
    Disabled = "disabled",
    Player1 = "player1",
    Player2 = "player2"
}

type SquareProps = {
    state: SquareState;
    onClick: () => void;
}

function Board(): React.ReactNode {
    function onClick() {
        throw new Error('Function not implemented.')
    }

    return (
        <div id="board">
            <Square state={SquareState.Player2} onClick={onClick}/>
        </div>
    )
}


function Square({ state, onClick }: SquareProps): React.ReactNode {
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
        <button className="square" onClick={onClick}>
            <span>{renderState(state)}</span>
        </button>
    )
}

export default Board