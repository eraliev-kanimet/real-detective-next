
const fetchContent = async (page) => {
    const response = await fetch(`http://localhost:8000/api/page?page=${page}`, {
        headers: {'Accept': 'application/json'},
        cache: 'no-store'
    })

    return response.json()
}

export default fetchContent