import Page from "./components/parts/Page/index.jsx";
import Search from "./components/features/Search/index.jsx";
import {AppIntlProvider} from "./providers/AppIntlProvider.jsx";
import Layout from "./components/parts/Layout/index.jsx";
import './styles/globals.scss';

function App() {

  return (
    <>
      <AppIntlProvider>
        <Layout>
        <Page>
          <Search />
        </Page>
        </Layout>
      </AppIntlProvider>
    </>
  )
}

export default App
