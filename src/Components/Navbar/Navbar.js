import { useTranslation } from "react-i18next";
import {User} from "../../Assets/SVGS";
import LanguageButtons from "../LanguageButtons/LanguageButtons";
import "./Navbar.css";
function Navbar() {
  const {t}= useTranslation()
  return (
    <div className='navbar-container'>
      <h3 style={{color: "white"}}>{t("control_panal")}</h3>
      <div className='admin'>
        <LanguageButtons btnColor="white" />
        <div className='position'>
          <div className="name">
            <p>Super admin</p>
            <p>مسئول عام</p>
          </div>
        <div className='icon'>
          <User width='30px' color='white' />
        </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
