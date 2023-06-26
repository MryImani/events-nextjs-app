import { Fragment } from "react";
import Header from "./header";

export default function MainLayout(props){
    return(
        <Fragment>
            <Header/>
            <main>
                {props.children}
            </main>
        </Fragment>
    )
}