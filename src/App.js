import { CountProvider } from "./context/countContext";
import { ProgressProvider } from "./context/progressContext";
import PagesRoutes from "./Routes";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
			<CountProvider>
				<ProgressProvider>
					<GlobalStyle/>
    	<PagesRoutes/>
				</ProgressProvider>
			</CountProvider>
  );
}

export default App;
