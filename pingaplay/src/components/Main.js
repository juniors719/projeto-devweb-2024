// Main.js
import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/FirebaseConfig";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "../styles/mainstyle.css";

import LoginUsuario from "./login/LoginUsuario";
import Home from "./home/Home";
import ListarCompeticoes from "./competicoes/ListarCompeticoes";
import LoggedContainerBody from "./home/LoggedContainerBody";
import UnloggedContainerBody from "./home/UnloggedContainerBody";

const Main = () => {
    const [logged, setLogged] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setLogged(!!user);
        });
        return () => unsubscribe();
    }, []);

    return (
        <RouterProvider
            router={createBrowserRouter([
                {
                    path: "/",
                    element: <Home logado={logged} />,
                    children: [
                        {
                            index: true,
                            element: logged ? (
                                <LoggedContainerBody />
                            ) : (
                                <UnloggedContainerBody />
                            ),
                        },
                        {
                            path: "competicoes/listar",
                            element: <ListarCompeticoes />,
                        },
                    ],
                },
                {
                    path: "/login",
                    element: <LoginUsuario />,
                },
            ])}
        />
    );
};

export default Main;
