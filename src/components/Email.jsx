function Email(props) {
    return <label
    >Leave us your email pretty please??
        <input
            onChange={event => {
                const updated = { ...props.formData, email: event.target.value }
                props.setFormData(updated)
            }}
            type="email"
            name="email"
            value={props.formData.email} /></label>
}
export default Email