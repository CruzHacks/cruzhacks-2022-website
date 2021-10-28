import React, { useState } from "react"
import "./AppAnalytics.scss"
import { getAnalytics } from "utils/Api"
import { useAuth0 } from "@auth0/auth0-react"
import CoolDownButton from "components/Button/CoolDownButton"

const AppAnalytics: React.FC = () => {
  const { getAccessTokenSilently } = useAuth0()
  const [data, setData] = useState({
    applicantCount: undefined,
    firstTime: undefined,
    ucscApplicants: undefined,
  })
  const [error, setError] = useState("")

  const onClick = async () => {
    const token = await getAccessTokenSilently()
    getAnalytics(token)
      .then(res => {
        if (res.status === 200 || res.status === 201) {
          // the server responded successfully, now check our own status code
          const { status } = res.data
          if (status === 404) {
            setError("There is no applicants :(")
          } else {
            setData(res.data.message)
          }
        } else if (res.status === 500) {
          setError("An internal error occurred.")
        } else {
          setError(
            "Something went wrong! We couldn't retrieve the data from the server."
          )
        }
      })
      .catch(err => setError(err))
  }

  return (
    <div className='app-analytics-component'>
      <div className='app-analytics-component__button'>
        <CoolDownButton
          modifier='secondary'
          duration={30 * 60 * 100}
          label='analytics'
          onClick={onClick}
        >
          Get Analytics
        </CoolDownButton>
        {error && <div>{error}</div>}
      </div>
      <div className='app-analytics-component__results'>
        <div className='app-analytics-component__result'>
          <div className='app-analytics-component__data'>
            {data.applicantCount ?? "X"}{" "}
          </div>
          <div className='app-analytics-component__field'>Applicants</div>
        </div>
        <div className='app-analytics-component__result'>
          <div className='app-analytics-component__data'>
            {data.firstTime ?? "X"}{" "}
          </div>
          <div className='app-analytics-component__field'>UCSC Students</div>
        </div>
        <div className='app-analytics-component__result'>
          <div className='app-analytics-component__data'>
            {" "}
            {data.ucscApplicants ?? "X"}
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
