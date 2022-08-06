import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import s from "./SuperRadio.module.css"

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options: Array<string>
    onChangeOption: (option: any) => void
    value: string
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {

        // onChange, onChangeOption
        onChangeOption(e.currentTarget.value)
       // onChange && onChange(e)
     //   onChangeOption && onChangeOption(e.currentTarget.value)
    }


    const mappedOptions: any[] = options ? options.map((o, i) => ( /*// map options with key*/

        <label key={name + '-' + i} className={s.radio}>
           {/* <input
                type={'radio'}
                name={value}
                onChange={onChangeCallback}
                checked={true}
                // name, checked, value, onChange
            />*/}
            <input
                type={'radio'}
                name={name}
                checked={o === value}
                value={o}
                onChange={onChangeCallback}

                // name, checked, value, onChange
            />
            {o}


        </label>

    )) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
