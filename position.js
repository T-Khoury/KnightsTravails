function Position(coordinates = null) {
    let position = {
        coordinates: coordinates,
        nextMove0: null,
        nextMove1: null,
        nextMove2: null,
        nextMove3: null,
        nextMove4: null,
        nextMove5: null,
        nextMove6: null,
        nextMove7: null
    }

    return position
}

export { Position };