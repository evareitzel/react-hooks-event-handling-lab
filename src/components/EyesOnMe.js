// Code EyesOnMe Component Here
function EyesOnMe(){
  return(
    <button 
      onFocus={(e) => console.log('Good!')} 
      onBlur={(e) => console.log('Hey! Eyes on me!')}
    >
      Eyes on me
    </button>
    // console.log('eyes on me!'),
    // null
  )
}

export default EyesOnMe