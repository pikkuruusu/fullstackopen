const Filter = ( {value, onChange }) => {
    const handleChange = (e) => {
        onChange(e.target.value)
    }

    return (
        <div>
            filter shown with: <input value={value} onChange={handleChange} />
        </div>
    )
}


export default Filter