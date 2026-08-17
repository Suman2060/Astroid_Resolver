import { useReducer } from "react";
import type { ChangeEvent, FormEvent } from "react";

import Input from "../../../common/componets/Input";
import Button from "../../../common/componets/Button";

type FormData = {
  title: string;
  description: string;
  type: string;
  visibility: string;
};

type FormState = {
  data: FormData;
  status: "idle" | "submitting" | "success" | "error";
  error: string | null;
};

type FormAction =
  | {
      type: "FIELD_CHANGE";
      field: keyof FormData;
      value: string;
    }
  | {
      type: "SUBMIT";
    }
  | {
      type: "SUCCESS";
    }
  | {
      type: "ERROR";
      message: string;
    };

const initialState: FormState = {
  data: {
    title: "",
    description: "",
    type: "",
    visibility: "",
  },
  status: "idle",
  error: null,
};

function reducer(
  state: FormState,
  action: FormAction
): FormState {
  switch (action.type) {
    case "FIELD_CHANGE":
      return {
        ...state,
        data: {
          ...state.data,
          [action.field]: action.value,
        },
      };

    case "SUBMIT":
      return {
        ...state,
        status: "submitting",
        error: null,
      };

    case "SUCCESS":
      return {
        ...state,
        status: "success",
        error: null,
      };

    case "ERROR":
      return {
        ...state,
        status: "error",
        error: action.message,
      };

    default: {
      const exhaustiveCheck: never = action;
      return exhaustiveCheck;
    }
  }
}

function ResourceForm() {
  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;

    dispatch({
      type: "FIELD_CHANGE",
      field: name as keyof FormData,
      value,
    });
  };

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    dispatch({
      type: "SUBMIT",
    });


    setTimeout(() => {
      const isSuccessful = true;

      if (isSuccessful) {
        dispatch({
          type: "SUCCESS",
        });
      } else {
        dispatch({
          type: "ERROR",
          message: "Failed to submit resource.",
        });
      }
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit}>
      {state.status === "submitting" && (
        <p>Submitting resource...</p>
      )}

      {state.status === "success" && (
        <p>Resource submitted successfully.</p>
      )}

      {state.status === "error" && (
        <p>{state.error}</p>
      )}

      <Input
        id="title"
        name="title"
        value={state.data.title}
        placeholder="Resource title"
        onChange={handleChange}
        disabled={state.status === "submitting"}
      />

      <Input
        id="description"
        name="description"
        value={state.data.description}
        placeholder="Resource description"
        onChange={handleChange}
        disabled={state.status === "submitting"}
      />

      <Input
        id="type"
        name="type"
        value={state.data.type}
        placeholder="Resource type"
        onChange={handleChange}
        disabled={state.status === "submitting"}
      />

      <Input
        id="visibility"
        name="visibility"
        value={state.data.visibility}
        placeholder="Visibility"
        onChange={handleChange}
        disabled={state.status === "submitting"}
      />

      <Button type="submit" disabled={state.status === "submitting"}
      >
        {state.status === "submitting"
          ? "Submitting..."
          : "Submit Resource"}
      </Button>
    </form>
  );
}

export default ResourceForm;