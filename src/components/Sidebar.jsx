import { Link } from "react-router-dom";
import { SiLinksys } from "react-icons/si";
import { HiInboxArrowDown } from "react-icons/hi2";
import { HiUserGroup } from "react-icons/hi2";
import { PiStudentFill } from "react-icons/pi";
import { MdOutlinePriceChange } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { TbReport } from "react-icons/tb";
import { FaChalkboardTeacher } from "react-icons/fa";
import { LuCalendarCheck } from "react-icons/lu";
import { GoOrganization } from "react-icons/go";
import { LuSettings } from "react-icons/lu";
import { SiAwsorganizations } from "react-icons/si";
import { PiCalendarCheck } from "react-icons/pi";
import { PiCalendarCheckLight } from "react-icons/pi";
import { LiaHandHoldingUsdSolid } from "react-icons/lia";
import { CiWallet } from "react-icons/ci";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { CiMoneyCheck1 } from "react-icons/ci";
import { SlSettings } from "react-icons/sl";
import { CiSettings } from "react-icons/ci";
import { PiBankThin } from "react-icons/pi";
import { PiBuildingOfficeThin } from "react-icons/pi";
import { RxFileText } from "react-icons/rx";
import { ImFileText2 } from "react-icons/im";
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";
import { IoReaderOutline } from "react-icons/io5";
import { PiArticleThin } from "react-icons/pi";
import { PiClipboardTextThin } from "react-icons/pi";
import { PiCalendarCheckThin } from "react-icons/pi";
import { PiNetworkThin } from "react-icons/pi";
import { PiScrollThin } from "react-icons/pi";
import { PiGearSixThin } from "react-icons/pi";

function Sidebar() {
    return ( 
        <aside className="w-36 bg-white shadow-2xl flex flex-col">
       
        <nav className="flex-1 space-y-2 text-gray-700">
          <Link to="/organization" className="flex items-center gap-2 rounded hover:bg-grare-200">
            <div className="w-full py-3 mt-2">
                <PiBuildingOfficeThin size={35} className="items-center mx-auto" />
                <div className="text-center">Tashkilotlar</div>
            </div>
          </Link>
          <Link to="/" className="flex items-center gap-2 rounded hover:bg-grare-200">
            <div className="w-full py-3 mt-2 border-t">
                <PiNetworkThin size={35} className="items-center mx-auto font-medium" />
                <div className="text-center">Bo'limlar</div>
            </div>
          </Link>
          {/* <Link to="/" className="flex items-center gap-2 rounded hover:bg-grare-200">
            <div className="w-full border-t-[1px] py-3">
                <FaChalkboardTeacher size={35} className="items-center mx-auto" />
                <div className="text-center">O'qituvchilar</div>
            </div>
          </Link>
          <Link to="/" className="flex items-center gap-2 rounded hover:bg-grare-200">
            <div className="w-full border-t-[1px] py-3">
                <HiUserGroup size={35} className="items-center mx-auto" />
                <div className="text-center">Guruhlar</div>
            </div>
          </Link> */}
          <Link to="/" className="flex items-center gap-2 rounded hover:bg-grare-200">
            <div className="w-full border-t py-3">
                <PiCalendarCheckThin size={35} className="items-center mx-auto" />
                <div className="text-center">Davomatlar</div>
            </div>
          </Link>
          <Link to="/" className="flex items-center gap-2 rounded hover:bg-grare-200">
            <div className="w-full border-t py-3">
                <PiBankThin size={38} className="items-center mx-auto" />
                <div className="text-center">Moliya</div>
            </div>
          </Link>
          <Link to="/" className="flex items-center gap-2 rounded hover:bg-grare-200">
            <div className="w-full border-t py-3">
                <PiScrollThin size={35} className="items-center mx-auto" />
                <div className="text-center">Hisobotlar</div>
            </div>
          </Link>
          <Link to="/" className="flex items-center gap-2 rounded hover:bg-grare-200">
            <div className="w-full border-t py-3">
                <PiGearSixThin size={38} className="items-center mx-auto" />
                <div className="text-center">Sozlamalar</div>
            </div>
          </Link>
        </nav>
        
      </aside>
    );
}

export default Sidebar;