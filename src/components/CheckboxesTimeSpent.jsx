function CheckboxesTimeSpent(props) {
    return <ul>
        <li>
            <label
            ><input
                    onClick={function (event) {
                        let newFeatures = [...props.formData.timeSpent]
                        if (event.target.checked) {


                            if (newFeatures.includes(event.target.value)) {
                                return
                            } else {
                                newFeatures.push(event.target.value)
                            }
                        } else {
                            newFeatures = newFeatures.filter(target => target !== event.target.value)
                        }
                        const updated = { ...props.formData, timeSpent: newFeatures }
                        props.setFormData(updated)

                    }}
                    name="bestFeatures" type="checkbox" value="colour" checked={props.formData.timeSpent.includes('colour')} />It's
                yellow!
            </label>

        </li>
        <li>
            <label
            ><input
                    onChange={function (event) {
                        let newFeatures = [...props.formData.timeSpent]
                        if (event.target.checked) {


                            if (newFeatures.includes(event.target.value)) {
                                return
                            } else {
                                newFeatures.push(event.target.value);
                            }
                        } else {
                            newFeatures = newFeatures.filter(target => target !== event.target.value)
                        }

                        const updated = { ...props.formData, timeSpent: newFeatures };
                        props.setFormData(updated);
                    }}
                    name="bestFeatures" type="checkbox" value="sound" checked={props.formData.timeSpent.includes('sound')} />It
                squeaks!</label>
        </li>
        <li>
            <label
            ><input
                    onChange={function (event) {
                        let newFeatures = [...props.formData.timeSpent]
                        if (event.target.checked) {


                            if (newFeatures.includes(event.target.value)) {
                                return
                            } else {

                                newFeatures.push(event.target.value);
                            }
                        } else {
                            newFeatures = newFeatures.filter(target => target !== event.target.value)
                        }
                        const updated = { ...props.formData, timeSpent: newFeatures };
                        props.setFormData(updated)
                    }}
                    name="bestFeatures" type="checkbox" value="logo" checked={props.formData.timeSpent.includes('logo')} />It has a
                logo!</label>
        </li>
        <li>
            <label
            ><input
                    onChange={function (event) {
                        let newFeatures = [...props.formData.timeSpent]
                        if (event.target.checked) {


                            if (newFeatures.includes(event.target.value)) {
                                return
                            } else {

                                newFeatures.push(event.target.value)
                            }
                        } else {
                            newFeatures = newFeatures.filter(target => target !== event.target.value)
                        }
                        const updated = { ...props.formData, timeSpent: newFeatures }
                        props.setFormData(updated)
                    }}
                    name="bestFeatures" type="checkbox" value="size" checked={props.formData.timeSpent.includes('size')} />Its big!</label >
        </li>
    </ul>
}
export default CheckboxesTimeSpent