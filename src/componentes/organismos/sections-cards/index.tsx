import { Card } from "@/componentes/moleculas/card";
import { LIST_CARDS } from "@/constantes";
import { Icon } from "@iconify/react/dist/iconify.js";

const SectionsCards = () => {
  return (
    <section className="flex flex-col w-[25%] h-full border-r-[1px] border-r-gray-200 py-4 pl-6 pr-4">
      <button className="bg-blue-600 text-white h-[40px] px-4 py-2 rounded-md w-full text-center flex items-center justify-center gap-2">
        <Icon icon="mdi:plus" className="text-xl" />
        Create New Note
      </button>
      <div className="mt-4 flex flex-1 flex-col gap-4 overflow-y-auto py-2">
        {LIST_CARDS.map((card) => (
          <Card
            key={card.title}
            title={card.title}
            tags={card.tags}
            date={card.date}
          />
        ))}
      </div>
    </section>
  );
};

export { SectionsCards };
