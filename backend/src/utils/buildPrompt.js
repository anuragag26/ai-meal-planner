const buildPrompt = (data) => {
  return `
You are an AI meal planner.

Create a 7-day meal plan in JSON format.

Rules:
- Diet: ${data.diet}
- Allergies: ${data.allergies || "none"}
- Dislikes: ${data.dislikes || "none"}
- Daily calories: ${data.calories}
- Meals per day: ${data.mealsPerDay}

IMPORTANT:
- Each meal MUST include a name and ingredients
- Ingredients should be simple grocery items
- Do NOT repeat meals across the week

Return ONLY valid JSON in this format:
{
  "week": [
    {
      "day": "Monday",
      "meals": {
        "breakfast": {
          "name": "",
          "ingredients": []
        },
        "lunch": {
          "name": "",
          "ingredients": []
        },
        "dinner": {
          "name": "",
          "ingredients": []
        }
      }
    }
  ]
}

IMPORTANT:
- Return ONLY raw JSON
- Do NOT include explanations
- Do NOT include markdown
- Do NOT include text before or after JSON
- The response must start with { and end with }
`;
};

export default buildPrompt;
