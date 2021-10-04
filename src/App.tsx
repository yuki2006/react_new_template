import { FC } from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "react-query";
import Header from "./layouts/AppLayout/Header";
import Main from "./pages/Main";
import Sub from "./pages/Sub";
import NotFound from "./pages/NotFound";
const queryClient = new QueryClient();

const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Header/>}>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/sub" element={<Sub/>}/>
                </Route>
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>,
    </QueryClientProvider>
  );
};

export default App;
