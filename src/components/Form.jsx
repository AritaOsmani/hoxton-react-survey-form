import CheckboxesBestFeatures from "./CheckboxesBestFeatures.jsx"
import CheckboxesTimeSpent from "./CheckboxesTimeSpent.jsx"
import CheckboxesWorstFeatures from "./CheckBoxesWorstFeatures.jsx"
import Email from "./Email.jsx"
import RadioButtonsColor from "./RadioButtonsColor.jsx"
import RadioButtonsConsistency from "./RadioButtonsConsistency"
import RadioButtonsLogo from "./RadioButtonsLogo.jsx"
import ReviewSection from "./ReviewSection.jsx"
import Username from "./Username.jsx"


function Form(props) {
    return <form
        onSubmit={event => {
            event.preventDefault()
            const newSurveys = JSON.parse(JSON.stringify(props.surveys))
            newSurveys.push(props.formData);
            props.setSurveys(newSurveys)
            props.setFormData(props.initialForm)

        }}
        className="form">
        <h2>Tell us what you think about your rubber duck!</h2>
        <div className="form__group">
            <h3>What would you say that are the best features of your rubber duck?</h3>
            {/* <!-- checkboxes go here --> */}
            <CheckboxesBestFeatures
                formData={props.formData}
                setFormData={props.setFormData}

            />
        </div>
        <div className="form__group">
            <h3>What would you say that are the worst bits of your rubber duck?</h3>
            {/* <!-- Checkboxes go here --> */}

            <CheckboxesWorstFeatures
                formData={props.formData}
                setFormData={props.setFormData}
            />
        </div>
        <div className="form__group radio">
            <h3>How do you rate your rubber duck consistency?</h3>

            <RadioButtonsConsistency
                formData={props.formData}
                setFormData={props.setFormData}
            />
        </div>
        <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>

            <RadioButtonsColor
                formData={props.formData}
                setFormData={props.setFormData}
            />
        </div>
        <div className="form__group radio">
            <h3>How do you rate your rubber duck logo?</h3>

            <RadioButtonsLogo
                formData={props.formData}
                setFormData={props.setFormData}
            />
        </div>
        <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            {/* <!-- checkboxes go here --> */}
            <CheckboxesTimeSpent
                formData={props.formData}
                setFormData={props.setFormData}
            />
        </div>

        <ReviewSection
            formData={props.formData}
            setFormData={props.setFormData}
        />
        <Username
            formData={props.formData}
            setFormData={props.setFormData}
        />
        <Email
            formData={props.formData}
            setFormData={props.setFormData}
        />
        <input className="form__submit" type="submit" value="Submit Survey!" />
    </form>

}
export default Form