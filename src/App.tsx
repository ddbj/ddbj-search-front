import { SearchBox } from "@/features/initialSearch/SearchBox.tsx";
import { Providers } from "@/providers.tsx";

function App() {
  return (
    <Providers>
      <SearchBox />
    </Providers>
  );
}

export default App;
