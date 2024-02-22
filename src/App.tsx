import { SearchResource } from "@/components/features/Search/SearchResource.tsx";
import { Layout } from "@/components/parts/Layout.tsx";
import { AppIntlProvider } from "@/providers/AppIntlProvider.tsx";
import "./styles/globals.scss";

function App() {
  return (
    <AppIntlProvider>
      <Layout>
        <main>
          <SearchResource />
        </main>
      </Layout>
    </AppIntlProvider>
  );
}

export default App;
