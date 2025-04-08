import "./App.css";
import { Layout } from "@/componentes/organismos/layout";
import { SectionsCards } from "./componentes/organismos/sections-cards";

const App = () => {
  return (
    <Layout>
      <div className="flex h-full">
        <SectionsCards />
        <section className="w-[50%] h-full border-r-[1px] border-r-gray-200">
          Seccion 2
        </section>
        <section className="w-[25%] h-full">Seccion 3</section>
      </div>
    </Layout>
  );
};

export default App;
