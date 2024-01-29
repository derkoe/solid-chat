import { For } from "solid-js";
import { Conversation } from "~/model";

export default function ChatConversation({
  conversation,
}: {
  conversation: Conversation;
}) {
  return (
    <div class="overflow-y-auto">
      <For each={conversation.messages}>
        {(message) => (
          <div class="mb-4 flex justify-end">
            <div class="flex max-w-96 gap-3 rounded-lg bg-blue-600 p-3 text-white">
              {message.text}
            </div>
          </div>
        )}
      </For>
    </div>
  );
}
