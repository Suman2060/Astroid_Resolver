import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import Input from "../../../common/componets/Input";
import Button from "../../../common/componets/Button";

type ResourceFormData = {
  title: string;
  description: string;
  type: string;
  visibility: string;
};

function ResourceForm() {
  const [formData, setFormData] = useState<ResourceFormData>({
    title: "",
    description: "",
    type: "",
    visibility: "",
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    console.log("Submitted resource:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        id="title"
        name="title"
        value={formData.title}
        placeholder="Resource title"
        onChange={handleChange}
      />

      <Input
        id="description"
        name="description"
        value={formData.description}
        placeholder="Resource description"
        onChange={handleChange}
      />

      <Input
        id="type"
        name="type"
        value={formData.type}
        placeholder="Resource type"
        onChange={handleChange}
      />

      <Input
        id="visibility"
        name="visibility"
        value={formData.visibility}
        placeholder="Visibility"
        onChange={handleChange}
      />

      <Button type="submit">
        Submit Resource
      </Button>
    </form>
  );
}

export default ResourceForm;