
function Organization() {
    const groups = [
    {
      id: 1,
      name: "MTRK",
      course: "First Course",
      teacher: 1300000,
      days: "Toq kunlar 10:00",
      dates: "11.08.2025 - 11.11.2026",
      duration: 235,
      room: "35",
      students: 500,
    },
    {
      id: 2,
      name: "Pochta",
      course: "First Course",
      teacher: 350000,
      days: "Boshqa 11:00",
      dates: "09.08.2025 - 31.12.2025",
      duration: 102,
      room: "23",
      students: 150,
    },
    {
      id: 3,
      name: "Sugurta",
      course: "First Course",
      teacher: 250000,
      days: "Boshqa 11:00",
      dates: "09.08.2025 - 31.12.2025",
      duration: 67,
      room: "34",
      students: 100,
    },
    {
      id: 4,
      name: "Adliya vazirligi",
      course: "First Course",
      teacher: 600000,
      days: "Boshqa 11:00",
      dates: "11.08.2025 - 11.11.2026",
      duration: 121,
      room: "8",
      students: 250,
    },
    {
      id: 5,
      name: "Tashqi ishlar vazirligi",
      course: "First Course",
      teacher: 1000000,
      days: "Boshqa 11:00",
      dates: "23.08.2025 - 12.08.2027",
      duration: 98,
      room: "45",
      students: 450,
    },
  ];
    return ( 
        <div className="ml-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-700">
          Tashkilotlar
          <span className="text-gray-500 text-sm ml-3">
            Miqdor-{groups.length}
          </span>
        </h1>
        <button command="show-modal" commandfor="drawer" className="bg-[#175c94] hover:bg-[#0e5d9e] text-white px-4 py-2 mt-1 rounded-full">
          Yangisini qo'shish
        </button>
      </div>

      {/* Filters */}
      <div className="flex gap-1 flex-wrap mb-6">
        <select className="border rounded-lg px-4 py-1 bg-white text-gray-700 text-[15px] outline-none">
          <option className="bg-gray-300">Faol Tashkilotlar</option>
        </select>
        {/* <select className="border rounded-lg px-1 py-1 bg-white text-gray-700 outline-none text-[15px]">
          <option className="bg-gray-300">O'qituvchi</option>
        </select>
        <select className="border border-gray-300 rounded-lg px-3 py-1 bg-white text-gray-700 outline-none text-[15px]">
          <option>Kurslar bo'yicha</option>
        </select> */}
        <select className="border border-gray-300 rounded-lg px-3 py-1 bg-white text-gray-700 outline-none text-[15px]">
          <option>Kunlar</option>
        </select>
        <input
          type="date"
          className="border rounded-lg px-3 py-1 bg-white text-gray-700 outline-none [appearance:none] relative [&::-webkit-calendar-picker-indicator]:invert text-[15px]"
          placeholder="Boshlanish sanasi"
        />
        <input 
            type="date" 
            className="border rounded-lg px-3 py-1 bg-white text-gray-700 outline-none [appearance:none] relative [&::-webkit-calendar-picker-indicator]:invert text-[15px]"
        />
      </div>

      {/* Table */}
      
      <div className=" overflow-hidden">
  <div className="w-full text-gray-700">
    <div className=" text-gray-900">
      <ul className="flex justify-between w-full">
        <li className="p-3 text-left font-medium w-[12%] text-gray-700">Tashkilotlar</li>
        <li className="p-3 text-left font-medium w-[12%] text-gray-700">Kurslar</li>
        <li className="p-3 text-left font-medium w-[12%] text-gray-700">Kunlar</li>
        <li className="p-3 text-left font-medium w-[12%] text-gray-700">Litsenziya sanalari</li>
        <li className="p-3 text-left font-medium w-[12%] text-gray-700">Litsenziya muddat</li>
        <li className="p-3 text-left font-medium w-[12%] text-gray-700">Bo'limlar soni</li>
        <li className="p-3 text-left font-medium w-[12%] text-gray-700">Xodimlar soni</li>
        <li className="p-3 text-left font-medium w-[12%] text-gray-700">Narxi</li>
        <li className="p-3 text-left font-medium w-[4%] text-gray-700">Amallar</li>
      </ul>
    </div>
    <div>
      {groups.map((g, index) => (
        <ul
          className="flex justify-between items-center w-full border bg-white hover:bg-slate-100 duration-300 shadow my-2 rounded-xl"
          key={g.id}
        //   className="border hover:bg-gray-100 transition-colors py-1"
        >
          <li className="p-3 w-[12%]"><span className="text-gray-400">{index + 1}.</span> {g.name}</li>
          <li className="p-3 w-[12%]">{g.course}</li>
          <li className="p-3 w-[12%]">{g.days}</li>
          <li className="p-3 w-[12%]">{g.dates}</li>
          <li className="p-3 w-[12%]">{g.duration} kun</li>
          <li className="p-3 w-[12%]">{g.room}</li>
          <li className="p-3 w-[12%]">{g.students}</li>
          <li className="p-3 w-[12%]">{g.teacher} so'm</li>
          <li className="p-3 w-[4%]">
            <button className="p-1 rounded hover:bg-gray-200">⋮</button>
          </li>
        </ul>
      ))}
    </div>
        <el-dialog>
  <dialog id="drawer" aria-labelledby="drawer-title"
    class="fixed inset-0 size-auto max-h-none max-w-none overflow-hidden bg-transparent not-open:hidden backdrop:bg-transparent">

    <el-dialog-backdrop
      class="absolute inset-0 bg-gray-900/50 transition-opacity duration-700 ease-out data-closed:opacity-0 ">
    </el-dialog-backdrop>

    <div tabindex="0" class="absolute inset-0 pl-10 focus:outline-none sm:pl-16">
      <el-dialog-panel
        class="group/dialog-panel relative ml-auto block size-full max-w-md transform
               data-closed:translate-x-full 
               animate-slide-in sm:animate-slide-in-lg">

        <div
          class="absolute top-4 right-2 -ml-8 flex pt-4 pr-2 opacity-100 transition-opacity duration-700 ease-out group-data-closed/dialog-panel:opacity-0 sm:-ml-10 sm:pr-4 ">
          <button type="button" command="close" commandfor="drawer"
            class="relative rounded-full text-gray-600 z-50 hover:text-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 ">
            <span class="absolute -inset-2.5"></span>
            <span class="sr-only">Close panel</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" class="size-5">
              <path d="M6 18 18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>

        <div
          class="relative flex h-full flex-col overflow-y-auto bg-gray-50 py-6 shadow-xl after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-white/10">
          <div class="px-4 sm:px-6 mt-2 mx-2">
            <h2 id="drawer-title" class="font-semibold text-gray-800 text-xl">Tashkilot qo'shish</h2>
          </div>
          <div class="relative mt-6 flex-1 px-4 sm:px-6">
          </div>
        </div>
      </el-dialog-panel>
    </div>
  </dialog>
</el-dialog>

  </div>
</div>

    </div>
    );
}

export default Organization;