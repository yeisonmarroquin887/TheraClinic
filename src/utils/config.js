const config = {
    headers: {
        Authorization: `Bearer ${localStorage.getItem('authToken')}`
    }
}

export default config