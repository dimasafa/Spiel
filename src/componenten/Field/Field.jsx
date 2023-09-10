import React from 'react';
import { useState, useEffect } from 'react';
import './field.scss';

const Field = (props) => {

    const { randomFigure } = props;

    const [field, setField] = useState([
        ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0']
    ]);

    const [divs, setDivs] = useState([]);
    const [isCreated, setIsCreated] = useState(false);
    const [altePosition, SetAltePosition] = useState([]); // ob erste Block den Boden erreicht hat
    const [trigger, setTrigger] = useState(false);

    // Überprüfen, ob im state(field) gibt es '1'. Wenn ja, schreiben zu 'position' die genau Lage des Blocks
    const Pruf = () => {
        let position = [];

        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 15; j++) {
                if (field[i] && field[i][j] === '1') {
                    
                    let currHoch = 50 * (i + 1) + 50;
                    let currRight = 50 * (j + 1) + 800;
                    
                    let currHochString = `${currHoch}px`;
                    let currRightString = `${currRight}px`;
                    position.push([currHochString, currRightString]);
                }
            }
        }
        return position;
    }

    
    // Erstellen neue Figureblocke auf '1' im state(field);
    useEffect(() => {
        
            const res = Pruf();
    
            const newDivs = [];;
    
            for (let i = 0; i < res.length; i++) {
                const [top, left] = res[i];
                const divStyle = {
                    position: 'absolute',
                    top,
                    left,
                    width: '45px',
                    height: '45px',
                    backgroundColor: 'black',
                };
                
                // Создаем и добавляем элемент в состояние для отображения
                newDivs.push(
                    <div key={i} style={divStyle}></div>
                );
            }
    
            setDivs(newDivs);

    }, [field]);

    const [figureArr, setFigureArr] = useState([]);
    const [isGameOver, setIsGameOver] = useState(false);
    const [actuellFigurNum, setActuellFigurNum] = useState(0);

    function gameOverOptions () {
        setTrigger(true);
        setIsCreated(true);
        setIsGameOver(true);
        console.log('GAME OVER');
    }


    // Render der neue Figure auf dem Feld

    useEffect(() => {
        setTrigger(false);
        if (typeof randomFigure === 'function' && isCreated === false) {
            
            const [firstValue, Zahl] = randomFigure();
            setFigureArr([]);
            setFigureArr(firstValue);

            setActuellFigurNum(Zahl);

            setIsCreated(true);
            console.log(Zahl);
            /* setTrigger(false); */
        }

        if (figureArr.length > 0) {
            let updatedField = [...field];
            // Sofort überprüfen, ob neue Block nicht die gegenwatige Blocke auf dem Field überqueren. Wenn ja, dann Game Over.
            if (figureArr[0] && figureArr[0][0]) {
                updatedField[0][0] = figureArr[0][0];
                if (nonMovingCubes[0][0] === '1') {
                    gameOverOptions();
                }
            } if (figureArr[0] && figureArr[0][1]) {
                updatedField[0][1] = figureArr[0][1];
                if (nonMovingCubes[0][1] === '1') {
                    gameOverOptions();

                }
            } if (figureArr[1] && figureArr[1][0]) {
                updatedField[1][0] = figureArr[1][0];
                if (nonMovingCubes[1][0] === '1') {
                    gameOverOptions();

                }
            } if (figureArr[1] && figureArr[1][1]) {
                updatedField[1][1] = figureArr[1][1];
                if (nonMovingCubes[1][1] === '1') {
                    gameOverOptions();

                }
            } if (figureArr[0] && figureArr[0][2]) {
                updatedField[0][2] = figureArr[0][2];
                if (nonMovingCubes[0][2] === '1') {
                    gameOverOptions();

                }
            } if (figureArr[0] && figureArr[0][3]) {
                updatedField[0][3] = figureArr[0][3];
                if (nonMovingCubes[0][3] === '1') {
                    gameOverOptions();

                }
            } if (figureArr.length > 2 && figureArr[2] && figureArr[2][0]) {
                updatedField[2][0] = figureArr[2][0];
                if (nonMovingCubes[2][0] === '1') {
                    gameOverOptions();

                }
            } if (figureArr.length > 2 && figureArr[2] && figureArr[2][1]) {
                updatedField[2][1] = figureArr[2][1];
                if (nonMovingCubes[2][1] === '1') {
                    gameOverOptions();

                }
            } if (figureArr[1] && figureArr[1][2]) {
                updatedField[1][2] = figureArr[1][2];
                if (nonMovingCubes[1][2] === '1') {
                    gameOverOptions();

                }
            }


            if (!isGameOver) {
                setField(updatedField);
/*                 setFigureArr([]); */
            }
        }
    }, [figureArr, isCreated])



// Bewegung von Figure nach unten

    const [nonMovingCubes, SetNonMovingCubes] = useState([
        ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1'],
        ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1']
    ]);



    

    useEffect(() => {

        if (!isGameOver) { 
            let updatedField = [...field];
            let currPosition = [];
    
            const moveCubes = () => {
                if (!trigger) {
                    for (let i = 0; i < 10; i++) {
                        for (let j = 0; j < 15; j++) {
    
                            if (nonMovingCubes[0][j] === '1') {
                                setTrigger(true);
                                setIsCreated(true);
                                setIsGameOver(true);
                                console.log('GAME OVER');
                                break;
                            }
    
                            if (field[i + 1] && field[i][j] === '1' && field[i + 1][j] === '0' && nonMovingCubes[i][j] === '0') {
                                let schalter = true;
                                if (field[j + 1] && field[i][j + 1] === '1' && field[i + 1][j + 1] && nonMovingCubes[i + 1][j + 1] === '1') {
                                    schalter = false;
                                }
                                if (field[j + 2] && field[i][j + 2] === '1' && field[i + 1][j + 2] && nonMovingCubes[i + 1][j + 2] === '1') {
                                    schalter = false;
                                }
                                if (field[j + 3] && field[i][j + 3] === '1' && field[i + 1][j + 3] && nonMovingCubes[i + 1][j + 3] === '1') {
                                    schalter = false;
                                }
                                if (field[j + 2] && field[i + 1][j + 2] === '1' && nonMovingCubes[i + 1][j + 1] === '1') {
                                    schalter = false;
                                }
/*                                 if (field[j + 1] && field[i][j + 1] === '1' && field[i + 2][j + 1] && nonMovingCubes[i + 2][j + 1] === '1') {
                                    schalter = false;
                                }
                                if (field[j + 1] && field[i][j + 1] === '1' && field[i + 3] && nonMovingCubes[i + 3][j + 1] === '1') {
                                    schalter = false;
                                }
 */

                                

                                if (schalter) {
                                    let currBlock = [];
                                    currBlock.push(i);
                                    currBlock.push(j);
                                    currPosition.push(currBlock);
                                }

                            } 
                            if (field[i + 2] && field[i][j] === '1' && field[i + 1][j] === '1' && field[i + 2][j] === '0' && nonMovingCubes[i][j] === '0') {
            
                                let currBlock = [];
                                currBlock.push(i);
                                currBlock.push(j);
                                currPosition.push(currBlock);
                            } 
                            if (field[i + 3] && field[i][j] === '1' && field[i + 1][j] === '1' && field[i + 2][j] === '1' && field[i + 3][j] === '0' && nonMovingCubes[i][j] === '0') {
            
                                let currBlock = [];
                                currBlock.push(i);
                                currBlock.push(j);
                                currPosition.push(currBlock);
                            } 
                            
                        }
            
                    }
                }
    
                if (altePosition.length === 0 || altePosition.length === currPosition.length && trigger === false) {
                    for (let k = 0; k < currPosition.length; k++) {
                        const currentPosition = currPosition[k];
                        updatedField[currentPosition[0]][currentPosition[1]] = '0';
                    }
            
                    setField(updatedField);
            
                    for (let k = 0; k < currPosition.length; k++) {
                        const currentPosition = currPosition[k];
                        updatedField[currentPosition[0] + 1][currentPosition[1]] = '1';
                    }
    
                    setField(updatedField);
                    SetAltePosition(currPosition)
    
                } else if (altePosition.length > currPosition.length) {
                    let nonMovieCurrent = field.map(row => [...row]);
    
    /*                 console.log(nonMovieCurrent); */
                    SetNonMovingCubes(nonMovieCurrent);
                    console.log(nonMovingCubes);
    /*                 console.log(field); */
    
                    
                    setIsCreated(false);
                    setTrigger(true);
                    SetAltePosition([]);
                    currPosition = [];
                }
            }
    
            let intervalId;
    
            if (!trigger) {
                intervalId = setInterval(() => {
                    moveCubes();
                }, 500);
        
                // Очистка интервала при размонтировании компонента
                return () => clearInterval(intervalId);
            }
        
            if (trigger) {
                clearInterval(intervalId);
            }
    
        }

        
        
    }, [field, trigger, isGameOver])





    // Steurung von Figuren


    function figurSuche (matrix, submatrix) {
        let blockCount = 0;
        for (let i = 0; i < submatrix.length; i++) {
            for (let j = 0; j < submatrix[i].length; j++) {
                if (submatrix[i][j] === '1') {
                    blockCount += 1;
                }
            } 
        }

        console.log(blockCount);

/*         for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 15; j++) {
                let firstZahlMatix = matrix[i][j];
                let secondZahlMatix = matrix[i][j + 1];
                let firstZahlFigur = submatrix[i][j];
                let secondZahlFigur = submatrix[i][j + 1];

                if (firstZahlMatix === firstZahlFigur && secondZahlMatix === secondZahlFigur) {
                    if (submatrix[i][j + 2]) {

                    }
                }
                
            }
        } */
    }

    if (figureArr.length > 0) {
        figurSuche(field, figureArr)
    }

    

    const handleKeyPress = (event) => {
        if (event.key === 'ArrowRight') {
            if (!isGameOver) {
                if (actuellFigurNum === 1) {
                    for (let i = 0; i < 10 ; i++) {
                        for (let j = 0; j < 15; j++) {

                        }
                    }
                }
            }
        console.log('Нажата клавиша "стрелка вправо"');
        }
    };
    
      // Добавление слушателя события клавиш в useEffect
    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => {
          // Удаление слушателя при размонтировании компонента
        window.removeEventListener('keydown', handleKeyPress);
    };
      }, []); // Пустой массив зависимостей гарантирует, что обработчик добавится и удалится только при монтировании и размонтировании компонента
    




    

    return (
    <div className="field">
        <div className="container">
            {divs.map((div, index) => (
                <div key={index}>{div}</div>
            ))}
        </div>
    </div>
    )
}

export default Field;