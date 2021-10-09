import React, { useState } from "react"
import "./AppAnalytics.scss"
import { getAnalytics } from "utils/Api"
import { useAuth0 } from "@auth0/auth0-react"
import CoolDownButton from "components/Button/CoolDownButton"

const AppAnalytics: React.FC = () => {
  const { getAccessTokenSilently } = useAuth0()
  const [data, setData] = useState("")
  const [error, setError] = useState("")
  const onClick = async () => {
    const token = await getAccessTokenSilently()
    getAnalytics(token)
      .then(res => {
        if (res.status !== 201) {
          setError("Unable to Retrieve")
        } else {
          setData("string")
        }
      })
      .catch(err => setError(err))
  }
  return (
    <div className='app-analytics-component'>
      <div className='app-analytics-component__button'>
        <CoolDownButton
          className='button__secondary'
          duration={30 * 60 * 100}
          label='analytics'
          onClick={onClick}
        >
          Get Analytics
        </CoolDownButton>
        {error && <div>Unable to Fetch Data</div>}
      </div>
      <div className='app-analytics-component__results'>
        <div className='app-analytics-component__result'>
          <div className='app-analytics-component__data'>
            {data !== "" ? data : "X"}{" "}
          </div>
          <div className='app-analytics-component__field'>Applicants</div>
        </div>
        <div className='app-analytics-component__result'>
          <div className='app-analytics-component__data'>
            {data !== "" ? data : "X"}{" "}
          </div>
          <div className='app-analytics-component__field'>UCSC Students</div>
        </div>
        <div className='app-analytics-component__result'>
          <div className='app-analytics-component__data'>
            {" "}
            {data !== "" ? data : "X"}
          </div>
          <div className='app-analytics-component__field'>
            First Time Hackers
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppAnalytics
