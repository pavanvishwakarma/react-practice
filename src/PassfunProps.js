function PassfunProps(props) {
    return (
        <div>

            <h2> PassfunProps </h2>
            <button onClick={() => props.data()} className="clickBtn">Click </button>
        </div>
    )
}
export default PassfunProps;