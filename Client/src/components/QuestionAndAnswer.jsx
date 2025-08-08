import React,{useState} from 'react'
import ArrowDown from "./../Icons/ArrowDown";

const QuestionAndAnswer = ({question,answer}) => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className="question  bg-gray-200 flex justify-between px-5 py-3 cursor-pointer "
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium ">{question}</span>
        <span
          className={`transform transition-transform duration-700 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <ArrowDown />
        </span>
      </div>

      <div
        className={`bg-gray-50 overflow-hidden transition-all duration-700 ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        } px-5`}
      >
        <p className="py-3">
          {answer}
        </p>
      </div>
    </>
  );
}

export default QuestionAndAnswer