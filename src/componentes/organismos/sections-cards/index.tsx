import { Icon } from "@iconify/react/dist/iconify.js";

const SectionsCards = () => {
  return (
    <section className="w-[25%] h-full border-r-[1px] border-r-gray-200 py-4 pl-6 pr-4">
      <button className="bg-blue-600 text-white px-4 py-2 rounded-md w-full text-center flex items-center justify-center gap-2">
        <Icon icon="mdi:plus" className="text-xl" />
        Create New Note
      </button>
      <div className="mt-4">
        <article className="flex flex-col gap-2 p-4 rounded-md bg-gray-200 text-[.9rem] text-gray-900">
          <h3 className="text-2xl font-bold">React Performance Optimization</h3>
          <ul className="flex gap-2">
            <li className="inline-block p-[10px] rounded-md bg-gray-300 leading-1">
              Dev
            </li>
            <li className="inline-block p-[10px] rounded-md bg-gray-300 leading-1">
              React
            </li>
          </ul>
          <span>29 Oct 2024</span>
        </article>
      </div>
    </section>
  );
};

export { SectionsCards };
