import React from 'react'

import CalorieCalculator from '../components/CalorieCalculator'
import "../styles/Calories.css"

function Calories() {
    return (
        <div className="container-fluid calories">
            <CalorieCalculator/>
        </div>
    );
}

export default Calories;