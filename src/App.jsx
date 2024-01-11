import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeContainer from "./pages/home/HomeContainer";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomeContainer />} id="home" />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
