function RadioButtonsColor(props) {
    return <ul>
        <li>
            <input id="color1" type="radio" name="color" value="1"
                onChange={function (event) {
                    const updated = { ...props.formData, colour: event.target.value }
                    props.setFormData(updated)
                }}
                checked={props.formData.colour === '1'}
            /><label
                htmlFor="color1"
            >1</label
            >
        </li>
        <li>
            <input id="color2" type="radio" name="color" value="2"
                onChange={function (event) {
                    const updated = { ...props.formData, colour: event.target.value }
                    props.setFormData(updated)
                }}
                checked={props.formData.colour === '2'}
            /><label
                htmlFor="color2"
            >2</label
            >
        </li>
        <li>
            <input id="color3" type="radio" name="color" value="3"
                onChange={function (event) {
                    const updated = { ...props.formData, colour: event.target.value }
                    props.setFormData(updated)
                }}
                checked={props.formData.colour === '3'}
            /><label
                htmlFor="color3"
            >3</label
            >
        </li>
        <li>
            <input id="color4" type="radio" name="color" value="4"
                onChange={function (event) {
                    const updated = { ...props.formData, colour: event.target.value }
                    props.setFormData(updated)
                }}
                checked={props.formData.colour === '4'}
            /><label
                htmlFor="color4"
            >4</label
            >
        </li>
    </ul>
}
export default RadioButtonsColor