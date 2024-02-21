import Page from "./components/parts/Page/index.jsx";
import Search from "./components/features/Search/index.jsx";
import {AppIntlProvider} from "./providers/AppIntlProvider.jsx";

function App() {

  return (
    <>
      <AppIntlProvider>
        <Page>
          <Search />
        </Page>
      </AppIntlProvider>
    </>
  )
}

export default App
