import { TbHelpHexagon } from "react-icons/tb";
import { IoDocumentTextOutline } from "react-icons/io5";
import { Link } from "react-router-dom";


function Helper() {
    return ( 
        <div className="py-4 text-gray-500 space-y-1 w-full border-t flex items-center justify-start gap-5 ml-5">
          <Link to="/" className="rounded hover:bg-grare-200">
            <div className="w-full py-1 flex gap-2 items-center">
                <TbHelpHexagon size={23} className="" />
                <div className="text-[15px]">Texnik yordam</div>
            </div>
          </Link>
          <Link to="/" className="rounded hover:bg-grare-200">
            <div className="w-full py-1 flex gap-2 items-center">
                <IoDocumentTextOutline size={23} className="" />
                <div className="text-[15px]">Hujjatlar</div>
            </div>
          </Link>
        </div>
    );
}

export default Helper;