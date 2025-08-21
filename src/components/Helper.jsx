import { TbHelpHexagon } from "react-icons/tb";
import { IoDocumentTextOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { PiHeadphonesThin } from "react-icons/pi";
import { BiBot } from "react-icons/bi";
import { PiChatCircleDotsThin } from "react-icons/pi";
import { PiChatDotsThin } from "react-icons/pi";
import { PiHeadsetThin } from "react-icons/pi";

import { PiReadCvLogoThin } from "react-icons/pi";
import { PiFileTextThin } from "react-icons/pi";


function Helper() {
    return ( 
        <div className="py-4 text-gray-500 space-y-1 w-full border-t flex items-center justify-start gap-6 ml-5 mt-6">
          <Link to="/" className="rounded hover:bg-grare-200">
            <div className="w-full py-1 flex gap-1 items-center">
                <PiHeadsetThin size={21} className="" />
                <div className="text-[15px]">Texnik yordam</div>
            </div>
          </Link>
          <Link to="/" className="rounded hover:bg-grare-200">
            <div className="w-full py-1 flex gap-[2px] items-center">
                <PiFileTextThin size={22} className="" />
                <div className="text-[15px]">Hujjatlar</div>
            </div>
          </Link>
        </div>
    );
}

export default Helper;