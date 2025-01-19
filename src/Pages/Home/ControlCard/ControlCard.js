import { useTranslation } from 'react-i18next'
import { Mail } from '../../../Assets/SVGS'
import './ControlCard.css'
function ControlCard(){
  const {t}=useTranslation()
  return(
    <div className="controlCard-container">
      <div className="card">
        <div className="info">
          <p>8</p>
          <p>{t("new_orders")}</p>
        </div>
        <Mail color="rgb(43, 187, 43)" width="40px"/>
      </div>
      <div className="card">
        <div className="info">
          <p>1</p>
          <p>{t("completed_orders")}</p>
        </div>
        <Mail color="rgb(43, 187, 43)" width="40px"/>
      </div>
      <div className="card">
        <div className="info">
          <p>53</p>
          <p>{t("all_products")}</p>
        </div>
        <Mail color="rgb(43, 187, 43)" width="40px"/>
      </div>
      <div className="card">
        <div className="info">
          <p>15</p>
          <p>{t("all_messages")}</p>
        </div>
        <Mail color="rgb(43, 187, 43)" width="40px"/>
      </div>
    </div>
  )
}
export default ControlCard