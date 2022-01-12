function CheckboxesBestFeatures(props) {

    return <ul>
        <li>
            <label
            ><input
                    onClick={function (event) {
                        let newFeatures = [...props.formData.bestFeatures]
                        if (event.target.checked) {


                            if (newFeatures.includes(event.target.value)) {
                                return
                            } else {
                                newFeatures.push(event.target.value)
                            }
                        } else {
                            newFeatures = newFeatures.filter(target => target != event.target.value)
                        }
                        const updated = { ...props.formData, bestFeatures: newFeatures }
                        props.setFormData(updated)

                    }}
                    name="bestFeatures" type="checkbox" value="colour" checked={props.formData.bestFeatures.includes('colour')} />It's
                yellow!
            </label>

        </li>
        <li>
            <label
            ><input
                    onChange={function (event) {
                        let newFeatures = [...props.formData.bestFeatures]
                        if (event.target.checked) {



                            if (newFeatures.includes(event.target.value)) {
                                return
                            } else {
                                newFeatures.push(event.target.value);
                            }
                        } else {
                            newFeatures = newFeatures.filter(target => target != event.target.value)
                        }
                        const updated = { ...props.formData, bestFeatures: newFeatures };
                        props.setFormData(updated);
                    }}
                    name="bestFeatures" type="checkbox" value="sound" checked={props.formData.bestFeatures.includes('sound')} />It
                squeaks!</label>
        </li>
        <li>
            <label
            ><input
                    onChange={function (event) {
                        let newFeatures = [...props.formData.bestFeatures]

                        if (event.target.checked) {


                            if (newFeatures.includes(event.target.value)) {
                                return
                            } else {

                                newFeatures.push(event.target.value);
                            }
                        } else {
                            newFeatures = newFeatures.filter(target => target !== event.target.value)
                        }
                        const updated = { ...props.formData, bestFeatures: newFeatures };
                        props.setFormData(updated)
                    }}
                    name="bestFeatures" type="checkbox" value="logo" checked={props.formData.bestFeatures.includes('logo')} />It has a
                logo!</label>
        </li>
        <li>
            <label
            ><input
                    onChange={function (event) {
                        let newFeatures = [...props.formData.bestFeatures]
                        if (event.target.checked) {


                            if (newFeatures.includes(event.target.value)) {
                                return
                            } else {

                                newFeatures.push(event.target.value)
                            }
                        } else {
                            newFeatures = newFeatures.filter(target => target !== event.target.value)
                        }
                        const updated = { ...props.formData, bestFeatures: newFeatures }
                        props.setFormData(updated)
                    }}
                    name="bestFeatures" type="checkbox" value="size" checked={props.formData.bestFeatures.includes('size')} />Its big!</label >
        </li>
    </ul>

}
export default CheckboxesBestFeatures