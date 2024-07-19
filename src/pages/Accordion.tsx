import React, { useState } from 'react';
import styles from "../Assets/css/help.module.css";


interface AccordionProps {
    question: string;
    answer: string;
}

const Accordion: React.FC<AccordionProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.accordion}>
            <h2 onClick={toggleAccordion} className={styles.question}>
                {question}
            </h2>
            {isOpen && (
                <div className={styles.answer}>
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
};

export default Accordion;
