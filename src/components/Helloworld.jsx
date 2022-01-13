import React from "react";
import ReactDom from 'react-dom'

let Hello=()=>{
    const myHeader = React.createElement(
        'h1',
        {className: 'header_title'}, 'Hellow World From React!'
    )

    const rootElement = document.getElementById('root');

    ReactDom.render(myHeader,rootElement);

}

export default Hello;