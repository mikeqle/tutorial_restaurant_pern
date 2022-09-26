import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './routes/Home';
import RestaurantDetailPage from './routes/RestaurantDetailPage';
import UpdatePage from './routes/UpdatePage';

const App = () => {
    return <div>
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/restaurants/:id/update" element={<UpdatePage/>}/>
                <Route exact path="/restaurants/:id" element={<RestaurantDetailPage/>}/>
            </Routes>
        </Router>
    </div>
}

export default App;