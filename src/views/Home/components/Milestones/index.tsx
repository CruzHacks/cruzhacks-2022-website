import * as React from "react"
import "./index.scss"
import { MilestoneProps } from "Props/props"
import milestoneResults from "Props/milestones/milestones"
import { ReactComponent as BorderMobile } from "images/milestones/milestone_header_mobile.svg"

const Milestones: React.FC = () => (
  <div className='milestones-component'>
    <div className='milestones-component__container'>
      <div className='milestones-component__header'>
        <div className='milestones-component__header-circle'>
          <div className='milestones-component__header-text'>
            Milestones of 2021
          </div>
          <BorderMobile className='milestones-component__header-border' />
        </div>
        <div className='milestones-component__header-ellipse' />
      </div>

      <div className='milestones-component__achievements'>
        {milestoneResults.map(
          ({ image, milestoneName, milestoneStat, id }: MilestoneProps) => (
            <div className='milestones-component__milestone' key={id}>
              <div className='milestones-component__milestone__image'>
                <img src={image} alt='error' />
              </div>
              <div className='milestones-component__milestone__box'>
                <div className='milestones-component__milestone__stat'>
                  {milestoneStat}
                </div>
                <div className='milestones-component__milestone__name'>
                  {milestoneName}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  </div>
)

export default Milestones
