import React, {ChangeEvent} from 'react';
import {Slider} from "@material-ui/core";
import './SuperDoubleRange.css'


type SuperDoubleRangePropsType = {
    onChangeRange: (value: [number, number]) => void
    value: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки

    const handleChange = (event: ChangeEvent<{}>, newValue: number | number[]) => {
        onChangeRange(newValue as [number, number])
    };



    return (
        <>

            <Slider
              //  className='slider'
                style={{color:'#2EE59D', width:'250px',height: '15px'}}
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
            />

        </>
    )
}
export default SuperDoubleRange;
