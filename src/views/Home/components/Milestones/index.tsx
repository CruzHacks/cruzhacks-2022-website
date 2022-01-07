import * as React from "react"
import "./index.scss"
import { MilestoneProps } from "Props/props"
import milestoneResults from "Props/milestones/milestones"
import { ReactComponent as BorderMobile } from "images/milestones/milestone_header_mobile.svg"
import PuzzleModal from "components/PuzzleModal"

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
          ({
            image,
            milestoneName,
            milestoneStat,
            id,
            hasModal,
          }: MilestoneProps) => (
            <div className='milestones-component__milestone' key={id}>
              <div className='milestones-component__milestone__image-container'>
                {hasModal && (
                  <PuzzleModal
                    question="Before renaming to CruzHacks, what was the name of UC Santa Cruz's hackathon series"
                    answer='hack ucsc'
                  >
                    <img
                      src={image}
                      alt='error'
                      className='milestones-component__milestone__img'
                    />
                  </PuzzleModal>
                )}

                {!hasModal && (
                  <img
                    src={image}
                    alt='error'
                    className='milestones-component__milestone__img'
                  />
                )}
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
