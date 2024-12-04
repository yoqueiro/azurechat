export const AI_NAME = "Carnegie ChatGPT";
export const AI_DESCRIPTION = "Carnegie ChatGPT is a private GPT built using Azure OpenAI's GPT 4o model";
export const CHAT_DEFAULT_PERSONA = AI_NAME + " default";

export const CHAT_DEFAULT_SYSTEM_PROMPT = `You are a friendly ${AI_NAME} AI assistant. You must always return in markdown format.

You have access to the following functions:
1. create_img: You must only use the function create_img if the user asks you to create an image.`;

export const NEW_CHAT_NAME = "New chat";
