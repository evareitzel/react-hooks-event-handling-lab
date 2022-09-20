// Code Keypad Component Here

function Keypad() {
    // render input w right type
    // add evt handler onChange evt
    return (


        <div>
            <input type="password" onChange={(e) => console.log('Entering password...')}
            />
        </div>
    )
}

export default Keypad;