
const fetchContent = async (page, slug = '') => {
    const response = await fetch(process.env.NEXT_PUBLIC_APP_API_URL + `/api/page?page=${page}&slug=${slug}`, {
        headers: {'Accept': 'application/json'},
        cache: 'no-store'
    })

    return response.json()
}

export default fetchContent