import "./App.css";
import { Layout } from "@/componentes/organismos/layout";
import { SectionsCards } from "@/componentes/organismos/sections-cards";
import { CardNoteInfo } from "@/componentes/organismos/card-note-info";

const App = () => {
  return (
    <Layout>
      <div className="flex h-full">
        <SectionsCards />
        <CardNoteInfo />
        <section className="w-[25%] h-full">Seccion 3</section>
      </div>
    </Layout>
  );
};

export default App;
