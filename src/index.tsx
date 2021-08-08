import ReactDOM from "react-dom";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Index from "./pages/index";
import Header from "./layouts/AppLayout/Header";

const root = document.getElementById('root');

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Header/>}>
                <Route path="/" element={<Index/>}/>
            </Route>
        </Routes>
    </BrowserRouter>,
    root
);
