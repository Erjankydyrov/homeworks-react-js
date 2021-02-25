function RandomNumbers(props) {
    return <div className="Rand">Random number = { props.min + (Math.round(Math.random() * props.max)) }</div>
}

export default RandomNumbers;
   