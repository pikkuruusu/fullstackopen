const Notification = ({ className, message }) => {
    if (message === null) {
        return null
    } else {
        return (
            <div className={`notification ${className}`}>
                {message}
            </div>
        )
    }
}

export default Notification