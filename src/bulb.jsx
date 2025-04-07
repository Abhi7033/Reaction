import { useState } from "react";

function App(){
    return <div>
        <lightBulb />
    </div>
}

function lightBulb(){

    const [bulbOn , setBulbOn] = useState(true);

    return <div>
        <BulbState bulbOn={bulbOn} />
        <ToggleBulbState setBulbOn={setBulbOn} />
    </div>
}

function BulbState(bulbOn){
    return <div>
        {bulbOn ? "Bulb on" : "Bulb off"}
    </div>
}

function ToggleBulbState(bulbOn, setBulbOn){

    function toggle(){
        setBulbOn(!bulbOn);
    }
    return <div>
        <button onClick={toggle}>Toggle the button</button>
    </div>
}

export default App;