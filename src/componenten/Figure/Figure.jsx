import React, { useState } from "react";
import Field from "../Field/Field";


const Figure = () => {


    const figureOne = [
        ['1', '0'],
        ['1', '1'],
        ['0', '1']
    ]

    const figureTwo = [
        ['0', '1'],
        ['1', '1'],
        ['1', '0']
    ]

    const figureThree = [
        ['0', '1', '0'],
        ['1', '1', '1']
    ]

    const figureFour = [
        ['1', '1'],
        ['1', '1']
    ]

    const figureFive = [
        ['1', '1', '1', '1']
    ]

    const figureSix = [
        ['1', '1', '1'],
        ['0', '0', '1']
    ]

    const figureSeven = [
        ['1', '1', '1'],
        ['1', '0', '0']
    ]

    const figureEight = [
        ['1', '0', '1'],
        ['1', '1', '1']
    ]

    const figureNine = [
        ['1', '1', '1'],
        ['0', '1', '0'],
        ['0', '1', '0']
    ]

    const figureTen = [
        ['0', '1', '0'],
        ['1', '1', '1'],
        ['0', '1', '0']
    ]

    function random() {
        let Zahl = Math.floor(Math.random() *10) + 1;

        if (Zahl === 1) {
            return [figureOne, Zahl];
        } else if ( Zahl === 2) {

            return [figureTwo, Zahl];
        } else if ( Zahl === 3) {

            return [figureThree, Zahl];
        } else if ( Zahl === 4) {

            return [figureFour, Zahl];
        } else if ( Zahl === 5) {

            return [figureFive, Zahl];
        } else if ( Zahl === 6) {

            return [figureSix, Zahl];
        } else if ( Zahl === 7) {

            return [figureSeven, Zahl];
        } else if ( Zahl === 8) {

            return [figureEight, Zahl];
        } else if ( Zahl === 9) {

            return [figureNine, Zahl];
        } else if ( Zahl === 10) {

            return [figureTen, Zahl];
        }
    }

/*     setTimeout(() => {
        console.log(random());
    }, 5000); */

    return (
        <div className="figure">
            <Field randomFigure={random} />
        </div>
    )
}

export default Figure;
