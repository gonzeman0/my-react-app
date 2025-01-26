function Board(): React.ReactNode {
    return (
        <div id="board">
            <Square state={SquareState.Player2} onClick={function (): void {
                throw new Error('Function not implemented.')
            } }/>
        </div>
    )
}

enum SquareState {
    Default = "default",
    Disabled = "disabled",
    Player1 = "player1",
    Player2 = "player2"
}

type props = {
    state: SquareState;
    onClick: () => void;
}

function Square({ state, onClick }: props): React.ReactNode {
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
            {renderState(state)}
        </button>
    )
}

export default Board