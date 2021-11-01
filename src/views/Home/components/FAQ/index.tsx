import * as React from "react"
import "./index.scss"
import FAQInformation from "Props/faq/faq"
import { FAQProps } from "Props/props"

const col1 = FAQInformation.slice(0, 4)
const col2 = FAQInformation.slice(4, 8)
const col3 = FAQInformation.slice(8, 12)
const FAQ: React.FC = () => (
  <div className='faq-component'>
    <div className='faq-component__box'>
      <div className='faq-component__faqtitle'>FAQ</div>
      <div className='faq-component__line' />
      <div className='faq-component__questionsandanswers'>
        <div className='faq-component__column'>
          {col1.map(({ question, answer }: FAQProps) => (
            <div className='faq-component__questionsandanswersitems'>
              <div className='faq-component__question'>{question}</div>
              <div className='faq-component__answer'>{answer}</div>
            </div>
          ))}
        </div>
        <div className='faq-component__column'>
          {col2.map(({ question, answer }: FAQProps) => (
            <div className='faq-component__questionsandanswersitems'>
              <div className='faq-component__question'>{question}</div>
              <div className='faq-component__answer'>{answer}</div>
            </div>
          ))}
        </div>
        <div className='faq-component__column'>
          {col3.map(({ question, answer }: FAQProps) => (
            <div className='faq-component__questionsandanswersitems'>
              <div className='faq-component__question'>{question}</div>
              <div className='faq-component__answer'>{answer}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)
export default FAQ
