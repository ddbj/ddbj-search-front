import { Layout } from "@/components/Layout.tsx";
import { SearchResource } from "@/components/search/SearchResource.tsx";
import { AppIntlProvider } from "@/providers/AppIntlProvider.tsx";
import "./styles/index.css";

function App() {
  return (
    <AppIntlProvider>
      <Layout>
        <SearchResource />
      </Layout>
    </AppIntlProvider>
  );
}

export default App;
