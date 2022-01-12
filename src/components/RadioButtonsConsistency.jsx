function RadioButtonsConsistency(props) {
    return <ul>
        <li>
            <input id="consistency1" type="radio" name="consistency" value="1"
                onChange={function (event) {
                    const updated = { ...props.formData, consistency: event.target.value }
                    props.setFormData(updated);
                }}
                checked={props.formData.consistency === '1'}
            /><label
                htmlFor="consistency1"


            >1</label  >
        </li>
        <li>
            <input id="consistency2" type="radio" name="consistency" value="2"
                onChange={function (event) {
                    const updated = { ...props.formData, consistency: event.target.value };
                    props.setFormData(updated)
                }}
                checked={props.formData.consistency === '2'}
            /><label
                htmlFor="consistency2"
            >2</label
            >
        </li>
        <li>
            <input id="consistency3" type="radio" name="consistency" value="3"
                onChange={function (event) {
                    const updated = { ...props.formData, consistency: event.target.value }
                    props.setFormData(updated);
                }}
                checked={props.formData.consistency === '3'}
            /><label
                htmlFor="consistency3"
            >3</label
            >
        </li>
        <li>
            <input id="consistency4" type="radio" name="consistency" value="4"
                onChange={function (event) {
                    const updated = { ...props.formData, consistency: event.target.value }
                    props.setFormData(updated)
                }}
                checked={props.formData.consistency === '4'}
            /><label
                htmlFor="consistency4"
            >4</label
            >
        </li>
    </ul>

}
export default RadioButtonsConsistency