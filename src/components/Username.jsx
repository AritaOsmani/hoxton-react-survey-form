function Username(props) {
    return <label
    >Put your name here (if you feel like it):
        <input
            onChange={event => {
                const updated = { ...props.formData, username: event.target.value }
                props.setFormData(updated)
            }}
            type="text"
            name="username"
            value={props.formData.username} />
    </label >
}
export default Username