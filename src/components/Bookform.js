const Bookform = () => {
    return (
        <form>
            <input type="text" placeholder="Book title" required/>
            <input type="text" placeholder="Book author" required/>
            <button>ADD BOOK</button>
        </form>
    );
}
export default Bookform;