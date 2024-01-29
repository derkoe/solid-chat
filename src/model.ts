export type Message = {
  sender: "USER" | "LLM";
  text: string;
};

export type Conversation = {
  messages: Message[];
};
