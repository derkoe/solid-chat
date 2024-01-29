import { createSignal } from "solid-js";
import ChatConversation from "~/components/ChatConversation";
import ChatInput from "~/components/ChatInput";
import { Conversation } from "~/model";

const [conversation, setConversation] = createSignal<Conversation>({
  messages: [{ sender: "LLM", text: "How can I help you?" }],
});

export default function Chat() {
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
        Chat
      </h1>
      <div>
        <ChatConversation conversation={conversation()}></ChatConversation>
        <ChatInput></ChatInput>
      </div>
    </main>
  );
}
