import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import s from './SuperSelect.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options: /*any[]*/ Array<string>
    onChangeOption: (option: any) => void
    value:string
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: any[] = options.map((el,key) =>(
        <option id={key.toString()}>
            {el}
            </option >
    ))    ; /*// map options with key*/

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        // onChange, onChangeOption

        if(e.currentTarget.value) {
            onChangeOption(e.currentTarget.value)
        }
    }

    return (
        <div className={s.customDropdown}>
        <select onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
</div>
    )
}

export default SuperSelect
