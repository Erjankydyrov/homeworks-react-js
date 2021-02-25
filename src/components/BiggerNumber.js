function BiggerNumber(props) {
    function Bigger (){
      if(props.a > props.b){
        return props.a;
      }
      else{
        return props.b;
      }
    }
    return <div className="Rand">Bigger number = { Bigger() }</div>
}
   
export default BiggerNumber;