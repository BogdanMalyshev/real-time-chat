import {Container, CssBaseline} from "@material-ui/core";
import './app.scss'
import AppRouter from "./components/AppRouter/AppRouter";
import {useAuthState} from "react-firebase-hooks/auth";
import Loading from "./components/Loading/Loading";
import {useContext} from "react";
import {Context} from "./index";


function App() {
    const {auth} = useContext(Context)
    const [user, loading, error] = useAuthState(auth)

    return (
        <div className="App">
            <CssBaseline/>
            <Container maxWidth="sm">
                {
                    loading ? <Loading className="init-loading"/> : <AppRouter/>
                }
            </Container>
        </div>
    );
}

export default App;
