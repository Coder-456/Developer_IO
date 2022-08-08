import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Start from './Start'
import Home from './Home';
import NotFound from './NotFound'
import NewUser from './NewUser'
import DBEntry from './DBEntry';
import Create from './Create'
import PageDetails from './PageDetails'

function App() {

    return (
        <Router>
        <div className="App">
            <Routes>
                <Route exact path="/" element={<Start />} />
                <Route path="/newuser" element={<NewUser />} />
                <Route path="/home" element={<Home />} />
                <Route path='/dbentry/:userID' element={<DBEntry/>} />
                <Route exact path="/create" element={<Create />} />
                <Route exact path="/page/:id" element={ <PageDetails />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
        </Router>
    );
}

export default App;