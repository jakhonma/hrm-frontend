import { PiStudentFill } from "react-icons/pi";
import { BsExclamationTriangle } from "react-icons/bs";
import { LuUserRoundX } from "react-icons/lu";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { BiGroup } from "react-icons/bi";
import { MdNearbyError } from "react-icons/md";
import { LuUserCheck } from "react-icons/lu";
import { BsBarChartLine } from "react-icons/bs";
import { LuCalendarCheck } from "react-icons/lu";
import { GoOrganization } from "react-icons/go";
import { PiBuildingOfficeThin } from "react-icons/pi";
import { PiCalendarCheckThin } from "react-icons/pi";
import { SlUserUnfollow } from "react-icons/sl";
import { PiUserMinusThin } from "react-icons/pi";
import { PiSealWarningThin } from "react-icons/pi";
import { PiWarningThin } from "react-icons/pi";
import { PiChartLineUpThin } from "react-icons/pi";
import { PiTimerThin } from "react-icons/pi";
import { PiClockUserThin } from "react-icons/pi";
import { PiBankThin } from "react-icons/pi";


export default function Dashboard() {
  const stats = [
    { title: "Faol bo'limlar", value: 1, icon: <PiBuildingOfficeThin size={60}  className="items-center mx-auto" /> },
    { title: "Moliya", value: 1, icon: <PiBankThin size={60} className="items-center mx-auto" />  },
    { title: "Guruhlar", value: 2, icon: <HiOutlineUserGroup size={60} className="items-center mx-auto" />  },
    { title: "Qarzdorlar", value: 0, icon: <BsExclamationTriangle size={60} className="items-center mx-auto" />  },
    { title: "Sinov mudatida", value: 1, icon: <PiClockUserThin size={60} className="items-center mx-auto" />  },
    { title: "Davomatlarlar", value: 1, icon: <PiCalendarCheckThin size={70} className="items-center mx-auto" />  },
    { title: "Ishdan bushaganlar", value: 0, icon: <PiUserMinusThin size={70} className="items-center mx-auto" />  },
    { title: "Sinov muddatidan keyin ketdi", value: 0, icon: <PiWarningThin size={70} className="items-center mx-auto" />  },
  ];

  return (
    <div className="space-y-6 text-gray-700">
      {/* Eslatma */}
      <div className="bg-white p-3 rounded-xl pl-5 shadow">
        Litsenziyaning platformaga amal qilish muddati: <b>18.12.2025</b>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {stats.map((s, i) => (
          <div key={i} className="card bg-white shadow p-4 text-center">
            {s.icon}
            <p className="text-sm text-gray-500">{s.title}</p>
            <p className="text-2xl font-bold text-orange-500">{s.value}</p>
          </div>
        ))}
      </div>

      {/* Jadval */}
      <div className="bg-white rounded-xl shadow p-4">
        <div className="flex justify-between items-center mb-2">
            <div className="tabs">
            <a className="tab tab-bordered tab-active">Juft kunlar</a>
            <a className="tab tab-bordered">Toq kunlar</a>
            <a className="tab tab-bordered">Boshqa</a>
            </div>
            <button className="btn btn-sm">Gorizontal</button>
        </div>

        <div className="overflow-x-auto">
            <table className="table table-auto table-zebra w-full text-gray-800">
            <thead className="bg-gray-100 text-gray-800">
                <tr>
                <th>Room #1</th>
                <th>10:00</th>
                <th>10:30</th>
                <th>11:00</th>
                <th>11:30</th>
                <th>12:00</th>
                <th>12:30</th>
                </tr>
            </thead>
            <tbody className="text-gray-700">
                <tr>
                <td colSpan={7} className="text-center text-gray-500">
                    Ma’lumot yo‘q
                </td>
                </tr>
            </tbody>
            </table>
        </div>
      </div>
    </div>
  );
}
