import React from 'react';
import ReactDom from 'react-dom/client';
import './popup.css'

const test = <img src = 'icon.png'/>


const root = document.createElement('div')
document.body.appendChild(root)
ReactDom.createRoot(root).render(test)


