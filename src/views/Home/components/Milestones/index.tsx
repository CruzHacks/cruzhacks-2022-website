import * as React from "react"
import "./index.scss"
import { MilestoneProps } from "../../../../Props/props"
import milestoneResults from "../../../../Props/milestones/milestones"
import milestonesBorderMobile from "../../../../assets/milestones/milestone_header_mobile.svg"

const Milestones: React.FC = () => (
  <div className='milestones-component'>
    <div className='milestones-component-header'>
      <div className='milestones-component-header-circle'>
        <div className='milestones-component-header-text desktop'>
          Milestones of 2021
        </div>
        <div className='milestones-component-header-text mobile'>
          Milestones of 2021
        </div>
      </div>
      <div className='milestones-component-header-border'>
        <img src={milestonesBorderMobile} alt='error' />
      </div>
      <div className='milestones-component-header-ellipse mobile' />
    </div>

    <div className='milestones-component-achievements'>
      {milestoneResults.map(
        ({ image, milestoneName, milestoneStat, id }: MilestoneProps) => (
          <div className='milestone' key={id}>
            <div className='milestone image'>
              <img src={image} alt='error' />
            </div>
            <div className='milestone box'>
              <div className='milestone stat'> {milestoneStat}</div>
              <div className='milestone name'> {milestoneName}</div>
            </div>
          </div>
        )
      )}
    </div>
  </div>
)
export default Milestones
