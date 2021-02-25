function LiseItems(props) {
    function addSpace(){
      let res = "";
      for (const i of props.list) {
        res += i;
        res += " ";
      }
      return res;
    }
  
   return <div className="Rand">List = { addSpace() }</div>
}
  
export default LiseItems;