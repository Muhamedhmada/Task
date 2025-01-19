import "./Aside.css";
import { Mail, Screen, Users, World} from "../../Assets/SVGS";
import { useTranslation } from "react-i18next";
function Aside(props) {
  const {t} = useTranslation()
  
  return (
    <div className={props.close?'opened aside-container':'closed aside-container'}
    >
      <aside
        className={props.close?"closed" :"opened"}
      >
        <div className='image'>
          <img
            src='https://last-version-of-store.vercel.app/static/media/logo.0aac528f8ddea5e58747.png'
            alt='logo'
          />
        </div>
        <ul>
          <li>
            <Screen width='30px' color='rgb(43, 187, 43)' />
            {t("control_panal")} 
          </li>
          <li>
            <Screen width='30px' color='rgb(43, 187, 43)' />
             {t("orders")}
          </li>
          <li>
            <Mail width='30px' color='rgb(43, 187, 43)' />
            {t("messages")}
          </li>
          <li>
            <Mail width='30px' color='rgb(43, 187, 43)' />
            {t("products_department")}
          </li>
          <li>
            <Users width='30px' color='rgb(43, 187, 43)' />
            {t("products")}
          </li>
          <li>
            <World width='30px' color='rgb(43, 187, 43)' />
            {t("web_site")}
          </li>
          <li>
            <Users width='30px' color='rgb(43, 187, 43)' />
            {t("orders")}
          </li>
        </ul>
      </aside>
    </div>
  );
}
export default Aside;
