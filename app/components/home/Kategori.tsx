"use client"
const Kategori = () => {
    const kategoriList = [
        {
        name: "Kategori"
    },
        {
        name: "Kategori"
    },
        {
        name: "Kategori"
    },
        {
        name: "Kategori"
    },
        {
        name: "Kategori"
    },
        {
        name: "Kategori"
    }
    ]
  return (
    <div className="flex items-center justify-center px:3 md:px-10 gap-3 md:gap-10 mb-1 overflow-x-auto">
        {
            kategoriList.map((kategori, index) =>(
                <div className="min-w-[120px] flex items-center justify-center cursor-pointer" key={index}>{kategori.name}</div>
            ))
        }
    </div>
  )
}

export default Kategori