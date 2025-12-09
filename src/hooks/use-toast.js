import * as React from "react";

// CRITICAL CHANGE 1: Removed type imports. We must ensure the component imports are .jsx/.js
// import type { ToastActionElement, ToastProps } from "@/components/ui/toast";

const TOAST_LIMIT = 1;
// NOTE: This value is extremely high (1 million seconds) and likely intended to be managed by user interaction or dismissal.
const TOAST_REMOVE_DELAY = 1000000; 

// Removed: type ToasterToast = ToastProps & { ... };

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
};
// Removed: as const;

let count = 0;

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

// Removed: type ActionType = typeof actionTypes;
// Removed: type Action = ... ;
// Removed: interface State { ... };

const toastTimeouts = new Map();

// CRITICAL CHANGE 2: Removed type annotation (toastId: string) and return type
const addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }

  // CRITICAL CHANGE 3: Removed ReturnType<typeof setTimeout>
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    });
  }, TOAST_REMOVE_DELAY);

  toastTimeouts.set(toastId, timeout);
};

// CRITICAL CHANGE 4: Removed type annotations (state: State, action: Action): State
export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) => (t.id === action.toast.id ? { ...t, ...action.toast } : t)),
      };

    case "DISMISS_TOAST": {
      const { toastId } = action;

      // ! Side effects ! - This could be extracted into a dismissToast() action,
      // but I'll keep it here for simplicity
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id);
        });
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t,
        ),
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      };
    default:
      return state; // Ensure reducer handles unrecognized actions safely
  }
};

// CRITICAL CHANGE 5: Removed Array generics
const listeners = [];

// CRITICAL CHANGE 6: Removed State type
let memoryState = { toasts: [] };

// CRITICAL CHANGE 7: Removed Action type
function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}

// Removed: type Toast = Omit<ToasterToast, "id">;

// CRITICAL CHANGE 8: Removed Toast type annotation
function toast({ ...props }) {
  const id = genId();

  // CRITICAL CHANGE 9: Removed ToasterToast type annotation
  const update = (props) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id },
    });
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      },
    },
  });

  return {
    id: id,
    dismiss,
    update,
  };
}

function useToast() {
  // CRITICAL CHANGE 10: Removed State generic
  const [state, setState] = React.useState(memoryState);

  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, []); // state removed from dependency array to prevent infinite loop

  return {
    ...state,
    toast,
    // CRITICAL CHANGE 11: Removed toastId type annotation
    dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId }),
  };
}

export { useToast, toast };