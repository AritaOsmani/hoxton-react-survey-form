function CheckboxesWorstFeatures(props) {

    return <ul>
        <li>
            <label
            ><input
                    onClick={function (event) {
                        let newFeatures = [...props.formData.worstFeatures]
                        if (event.target.checked) {


                            if (newFeatures.includes(event.target.value)) {
                                return
                            } else {
                                newFeatures.push(event.target.value)
                            }
                        } else {
                            newFeatures = newFeatures.filter(target => target !== event.target.value)
                        }

                        const updated = { ...props.formData, worstFeatures: newFeatures }
                        props.setFormData(updated)

                    }}
                    name="bestFeatures" type="checkbox" value="colour" checked={props.formData.worstFeatures.includes('colour')} />It's
                yellow!
            </label>

        </li>
        <li>
            <label
            ><input
                    onChange={function (event) {
                        let newFeatures = [...props.formData.worstFeatures]
                        if (event.target.checked) {


                            if (newFeatures.includes(event.target.value)) {
                                return
                            } else {
                                newFeatures.push(event.target.value);
                            }
                        } else {
                            newFeatures = newFeatures.filter(target => target !== event.target.value)
                        }
                        const updated = { ...props.formData, worstFeatures: newFeatures };
                        props.setFormData(updated);
                    }}
                    name="bestFeatures" type="checkbox" value="sound" checked={props.formData.worstFeatures.includes('sound')} />It
                squeaks!</label>
        </li>
        <li>
            <label
            ><input
                    onChange={function (event) {
                        let newFeatures = [...props.formData.worstFeatures]
                        if (event.target.checked) {


                            if (newFeatures.includes(event.target.value)) {
                                return
                            } else {

                                newFeatures.push(event.target.value);
                            }
                        } else {
                            newFeatures = newFeatures.filter(target => target !== event.target.value)
                        }
                        const updated = { ...props.formData, worstFeatures: newFeatures };
                        props.setFormData(updated)
                    }}
                    name="bestFeatures" type="checkbox" value="logo" checked={props.formData.worstFeatures.includes('logo')} />It has a
                logo!</label>
        </li>
        <li>
            <label
            ><input
                    onChange={function (event) {
                        let newFeatures = [...props.formData.worstFeatures]
                        if (event.target.checked) {


                            if (newFeatures.includes(event.target.value)) {
                                return
                            } else {

                                newFeatures.push(event.target.value)
                            }
                        } else {
                            newFeatures = newFeatures.filter(target => target !== event.target.value)
                        }
                        const updated = { ...props.formData, worstFeatures: newFeatures }
                        props.setFormData(updated)
                    }}
                    name="bestFeatures" type="checkbox" value="size" checked={props.formData.worstFeatures.includes('size')} />Its big!</label >
        </li>
    </ul>
}
export default CheckboxesWorstFeatures