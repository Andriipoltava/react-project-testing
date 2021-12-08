import React from 'react'

export const MySelect = ({ options, defaultValue,value,sortPost }) => {
        return (
        <select value={value}  onChange={e=>sortPost(e.target.value)}>
            <option > {defaultValue}</option>

            {options.map((option) =>
                <option key={option.value} value={option.value} >
                    {option.name}
                </option>
            )}
        </select>
    )
}
