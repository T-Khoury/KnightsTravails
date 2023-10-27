import { Position } from "./position";

function Knight(start) {
    const knight = {
        visited: [],


        nextMoves(coordinates) {
            let counter = 0;
            let possibleMoves = [[2, 1], [1, 2]];

            let startingPosition = Position(coordinates);

            let spX = startingPosition.coordinates[0];
            let spY = startingPosition.coordinates[1];
 

            possibleMoves.forEach((possible) => {
                let pmX = possible[0];
                let pmY = possible[1];
                let xDiff = (spX - pmX);
                let yDiff = (spY - pmY);
                let xSum = (spX + pmX);
                let ySum = (spY + pmY);
                if (((xDiff > -1) && (yDiff > -1)) && !this.visited.find((element) => (element[0] === xDiff && element[1] === yDiff))) {

                    startingPosition[`nextMove${counter}`] = Position([xDiff, yDiff]);
                    this.visited.push(startingPosition[`nextMove${counter}`].coordinates);
                
                    counter ++;
                    
                }
                if (((xDiff > -1) && (ySum < 8)) && !this.visited.find((element) => (element[0] === xDiff && element[1] === ySum))) {

                    startingPosition[`nextMove${counter}`] = Position([xDiff, ySum]);
                    this.visited.push(startingPosition[`nextMove${counter}`].coordinates);

                    counter ++;
                }
                if (((xSum < 8) && (yDiff > -1)) && !this.visited.find((element) => (element[0] === xSum && element[1] === yDiff))) {

                    startingPosition[`nextMove${counter}`] = Position([xSum, yDiff]);
                    this.visited.push(startingPosition[`nextMove${counter}`].coordinates);

                    counter ++;
                }
                if (((xSum < 8) && (ySum < 8)) && !this.visited.find((element) => (element[0] === xSum && element[1] === ySum))) {

                    startingPosition[`nextMove${counter}`] = Position([xSum, ySum]);
                    this.visited.push(startingPosition[`nextMove${counter}`].coordinates);

                    counter ++;
                }
            })
             

            return startingPosition;
            
        },

        buildTree() {
            knight.start = knight.nextMoves(start);
            knight.visited.push(knight.start.coordinates);
           /* while (this.visited.length < 64) { */
                for (const move in knight.start) {
                    if (move.includes('nextMove')) {
                        knight.start[move] = this.nextMoves(knight.start[move].coordinates);
                    }
                };
                for (const move in knight.start) {
                    if (move.includes('nextMove')) {
                        let newMove = knight.start[move];
                        for (const move in newMove) {
                            if (move.includes('nextMove') && newMove[move] !== null) {
                                newMove[move] = this.nextMoves(newMove[move].coordinates);
                            };
                        };
                    };
                }
                for (const move in knight.start) {
                    if (move.includes('nextMove')) {
                        let newMove = knight.start[move];
                        for (const move in newMove) {
                            if (move.includes('nextMove') && newMove[move] !== null) {
                                let newnewMove = newMove[move];
                                for (const move in newnewMove) {
                                    if (move.includes('nextMove') && newnewMove[move] !== null) {
                                        newnewMove[move] = this.nextMoves(newnewMove[move].coordinates)
                                    };
                                };
                            };
                        };
                    };
                };
        }

        

    };
    return knight

}