import { onMounted, onUnmounted } from "vue";

export function useBeforeUnload(callback: () => void) {
  const handleBeforeUnload = () => {
    callback();
  };

  onMounted(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);
  });

  onUnmounted(() => {
    window.removeEventListener("beforeunload", handleBeforeUnload);
  });
}
