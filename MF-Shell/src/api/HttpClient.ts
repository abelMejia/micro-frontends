class Httpclient {
    private static async request<T>(endpoint: string): Promise<T> {
        try {
            const response  = await fetch(`${import.meta.env.VITE_BASE_URL}${endpoint}`);

            if (!response.ok) { throw new Error(`Error ${response.status}: ${response.statusText}`) }

            return response.json()
        } catch (error) {
            throw error
        }
    }


    static get<T>(endpoint: string) {
       return this.request<T>(endpoint)
    }

}

export default Httpclient;
