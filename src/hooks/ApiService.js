const callAPi = async (page) => {
    let url = `https://rickandmortyapi.com/api/character${page > 1 ? `?page=${page}` : ""}`;
    console.log(url);
    const apiResponseObj = await fetch(url);
    return await apiResponseObj.json();
}

export default callAPi;