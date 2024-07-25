const URL = process.env.NEXT_PUBLIC_API_URL;

export async function login({ email, password }) {
    try {
        const response = await fetch(`${URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });

        if (!response.ok) {
            const errorDetails = await response.json();
            throw new Error(errorDetails.message || "An error occurred while fetching");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(error.message || "An error occurred while fetching");
    }
}
