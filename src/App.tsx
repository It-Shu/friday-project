import React from 'react';
import './App.css';
import AlternativeSuperInputText from "./common/c1-SuperInputText/AlternativeSuperInputText";
import AlternativeSuperButton from "./common/c2-SuperButton/AlternativeSuperButton";
import AlternativeSuperCheckbox from "./common/c3-SuperCheckbox/AlternativeSuperCheckbox";

function App() {
    return (
        <div>
            <AlternativeSuperInputText/>
            <AlternativeSuperButton/>
            <AlternativeSuperCheckbox/>
        </div>
    );
}

export default App;
