import * as React from "react"
import "./index.scss"
import FAQInformation from "Props/faq/faq"
import { FAQProps } from "Props/props"

const FAQ: React.FC = () => (
  <div className='faq-component'>
    <div className='faq-component__box'>
      <div className='faq-component__faqtitle'>FAQ</div>
      <div className='faq-component__line' />
      <div className='faq-component__questionsandanswers'>
        {FAQInformation.map(({ question, answer }: FAQProps) => (
          <>
            <div className='faq-component__question'>{question}</div>
            <div className='faq-component__answer'>{answer}</div>
          </>
        ))}
      </div>
    </div>
  </div>
)
export default FAQ
