const Bookinfo = (props) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.author}</p>
            <button>Remove</button>
        </div>
        );
}
export default Bookinfo;