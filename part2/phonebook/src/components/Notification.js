const Notification = ({ message }) => {
    if (message === null) {
        return null
    } else {
        return (
            <div className="success-message">
                {message}
            </div>
        )
    }
}

export default Notification