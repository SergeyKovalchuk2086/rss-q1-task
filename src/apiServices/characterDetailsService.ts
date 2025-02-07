class CharacterDetailsService {
  async fetchCharacterDetails(url: string) {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      return await response.json();
    } catch (error) {
      console.log("Error in fetchCharacterDetails", error);
    }
  }
}

const characterDetailsService = new CharacterDetailsService();

export { characterDetailsService };
