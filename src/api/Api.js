const URL = 'https://rickandmortyapi.com/api'

export async function getCharacters() {
    const response = await fetch(`${URL}/character`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
}

export async function getSingleCharacter(id) {
    const response = await fetch(`${URL}/character/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
}