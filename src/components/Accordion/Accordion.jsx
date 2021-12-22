import React from "react";
import ReactDOM from "react-dom";
import dataFaq from "../../data/dataFaq.js";

const Accordion = () => {
    const [show, setShow] = React.useState(0);
  return (
    <div className="b-faq">
      <div className="faq__title">Вопросы</div>
      <div className="faq__inner">
          {
              dataFaq.map(({question, answer}, idx) => 
                <div className="faq__item" key={idx}>
                <div className="faq__question" onClick={() => setShow(idx)}>
                    {question}
                </div>
                <div className={(show === idx ? "faq__answer--show" : "") + " faq__answer"} >
                    {answer}
                </div>
                </div>
              )
          }
      </div>
    </div>
  );
};

export default Accordion;
