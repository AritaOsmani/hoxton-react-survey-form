import { useState } from "react";
import AnswersList from "./AnswersList";
import Form from "./Form";

function Main(props) {
    const [open, setOpen] = useState(false); //Ignore this state

    return (
        <main className="main">
            <section className={`main__list ${open ? "open" : ""}`}>
                <h2>Answers list</h2>
                {/* answers should go here */}
                <AnswersList answersList={props.surveys} />
            </section>
            <section className="main__form">{/* a form should be here */}
                <Form
                    formData={props.formData}
                    setFormData={props.setFormData}
                    surveys={props.surveys}
                    setSurveys={props.setSurveys}
                    initialForm={props.initialForm}
                />
            </section>
        </main>
    );
}

export default Main;
