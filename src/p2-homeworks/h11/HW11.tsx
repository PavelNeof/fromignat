import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from "../h4/HW4.module.css";




function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const onChangeRange = (value: number) => {
        setValue1(value)
    }

    const onChangeRange2 = (value: [number, number]) => {
        setValue1(value[0])
        setValue2(value[1])
    }

    return (
        <div>
            <hr/>
            homeworks 11
            <div className={s.column}>
                {/*should work (должно работать)*/}
                <div>
                    <span>{value1}</span>
                    <SuperRange
                        onChangeRange={onChangeRange}
                        value={value1}
                        // сделать так чтоб value1 изменялось
                    />
                </div>

                <div>
                    <span>{value1}</span>
                    <SuperDoubleRange
                        onChangeRange={onChangeRange2}
                        value={[value1, value2]}
                        // сделать так чтоб value1 и value2 изменялось
                    />
                    <span>{value2}</span>
                </div>

            </div>
           {/* <hr/>
            для личного творчества, могу проверить
            <AlternativeSuperRange/>
            <AlternativeSuperDoubleRange/>
            <hr/>*/}
        </div>
    )
}

export default HW11
