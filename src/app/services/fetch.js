
const fetchContent = async (page, slug = '') => {
    const response = await fetch(`http://localhost:8000/api/page?page=${page}&slug=${slug}`, {
        headers: {'Accept': 'application/json'},
        cache: 'no-store'
    })

    return response.json()
}

export default fetchContent