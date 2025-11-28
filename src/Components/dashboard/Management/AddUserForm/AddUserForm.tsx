import { useForm } from "@mantine/form";
import {
  TextInput,
  Button,
  Group,
  Box,
  Text,
  Select,
  Checkbox,
} from "@mantine/core";
import styles from "./AddUserForm.module.scss";
import { useUsers } from "@src/Components/stores/UsersContext";
import { useNavigate } from "react-router-dom";
import { RoutePathsConfig } from "@src/Components/common/SideBar/utils/links";
import { notifications } from "@mantine/notifications";

interface IFormValues {
  fullName: string;
  age: number | string;
  country: string;
  interests: string[];
}

const AddUserForm = () => {
  const navigate = useNavigate();
  const { addUser } = useUsers();

  const form = useForm<IFormValues>({
    initialValues: {
      fullName: "",
      age: "",
      country: "",
      interests: [],
    },
    validate: (values) => {
      const errors: Record<string, string> = {};

      if (!values.fullName.trim()) {
        errors.fullName = "Full name is required";
      }

      const numericAge = Number(values.age);
      if (
        values.age === "" ||
        values.age === null ||
        values.age === undefined
      ) {
        errors.age = "Age is required";
      } else if (Number.isNaN(numericAge)) {
        errors.age = "Age must be a number";
      } else if (numericAge < 18) {
        errors.age = "You must be at least 18 years old";
      }

      if (!values.country) {
        errors.country = "Country is required";
      }

      if (!values.interests || values.interests.length === 0) {
        errors.interests = "Select at least one interest";
      }

      return errors;
    },
  });

  const handleSubmit = async (values: IFormValues) => {
    const numericAge = Number(values.age);

    addUser({
      fullName: values.fullName.trim(),
      age: numericAge,
      country: values.country,
      interests: values.interests,
    });

    notifications.show({
      title: "User Added!",
      message: "",
    });

    form.reset();

    setTimeout(() => {
      navigate(RoutePathsConfig.userList);
    }, 650);
  };

  const renderTextInput = (
    label: string,
    field: keyof IFormValues,
    required = false,
    type: "text" | "number" = "text"
  ) => (
    <TextInput
      label={label}
      type={type}
      {...form.getInputProps(field)}
      required={required}
      styles={{
        root: { width: 400, marginBottom: 20 },
        input: {
          height: 35,
          background: "rgb(53,62,89)",
          color: "rgb(227,227,227)",
          border: "none",
          borderRadius: 4,
          fontSize: "1.6rem",
          fontWeight: "400",
        },
        label: { color: "rgb(227,227,227)", fontSize: 16, marginBottom: 4 },
      }}
    />
  );

  return (
    <Box mx="auto" maw={1300}>
      <form
        onSubmit={form.onSubmit(handleSubmit)}
        className={styles.formContainer}>
        <div className={styles.leftColumn}>
          {renderTextInput("Full Name", "fullName", true)}
          {renderTextInput("Age", "age", true, "number")}
        </div>

        <div className={styles.rightColumn}>
          <Select
            label="Country"
            placeholder="Select country"
            data={[
              { value: "uk", label: "United Kingdom" },
              { value: "us", label: "United States" },
              { value: "ca", label: "Canada" },
              { value: "de", label: "Germany" },
              { value: "fr", label: "France" },
              { value: "other", label: "Other" },
            ]}
            {...form.getInputProps("country")}
            required
            styles={{
              root: { width: 400, marginBottom: 20 },
              input: {
                height: 35,
                background: "rgb(53,62,89)",
                color: "rgb(227,227,227)",
                border: "none",
                borderRadius: 4,
                fontSize: "1.6rem",
                fontWeight: "400",
              },
              label: {
                color: "rgb(227,227,227)",
                fontSize: 16,
                marginBottom: 4,
              },
              dropdown: {
                background: "rgb(53,62,89)",
                border: "none",
              },
              option: {
                color: "rgb(227,227,227)",
                "&[data-hovered]": {
                  backgroundColor: "rgba(255,255,255,0.08)",
                },
              },
            }}
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: 400,
              marginBottom: 20,
            }}>
            <Text
              style={{
                color: "rgb(227,227,227)",
                fontSize: 16,
                marginBottom: 4,
              }}>
              Interests
            </Text>

            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {/* same Checkbox logic as before */}
              {/* Sports */}
              <Checkbox
                label="Sports"
                value="sports"
                checked={form.values.interests.includes("sports")}
                onChange={(event) => {
                  const value = event.currentTarget.value;
                  const checked = event.currentTarget.checked;
                  const current = form.values.interests || [];
                  form.setFieldValue(
                    "interests",
                    checked
                      ? [...current, value]
                      : current.filter((v) => v !== value)
                  );
                }}
                styles={{
                  input: {
                    background: "rgb(53,62,89)",
                    borderRadius: 4,
                    border: "none",
                  },
                  label: {
                    color: "rgb(227,227,227)",
                    fontSize: "1.4rem",
                  },
                }}
              />
              {/* Music */}
              <Checkbox
                label="Music"
                value="music"
                checked={form.values.interests.includes("music")}
                onChange={(event) => {
                  const value = event.currentTarget.value;
                  const checked = event.currentTarget.checked;
                  const current = form.values.interests || [];
                  form.setFieldValue(
                    "interests",
                    checked
                      ? [...current, value]
                      : current.filter((v) => v !== value)
                  );
                }}
                styles={{
                  input: {
                    background: "rgb(53,62,89)",
                    borderRadius: 4,
                    border: "none",
                  },
                  label: {
                    color: "rgb(227,227,227)",
                    fontSize: "1.4rem",
                  },
                }}
              />
              {/* Technology */}
              <Checkbox
                label="Technology"
                value="technology"
                checked={form.values.interests.includes("technology")}
                onChange={(event) => {
                  const value = event.currentTarget.value;
                  const checked = event.currentTarget.checked;
                  const current = form.values.interests || [];
                  form.setFieldValue(
                    "interests",
                    checked
                      ? [...current, value]
                      : current.filter((v) => v !== value)
                  );
                }}
                styles={{
                  input: {
                    background: "rgb(53,62,89)",
                    borderRadius: 4,
                    border: "none",
                  },
                  label: {
                    color: "rgb(227,227,227)",
                    fontSize: "1.4rem",
                  },
                }}
              />
              {/* Travel */}
              <Checkbox
                label="Travel"
                value="travel"
                checked={form.values.interests.includes("travel")}
                onChange={(event) => {
                  const value = event.currentTarget.value;
                  const checked = event.currentTarget.checked;
                  const current = form.values.interests || [];
                  form.setFieldValue(
                    "interests",
                    checked
                      ? [...current, value]
                      : current.filter((v) => v !== value)
                  );
                }}
                styles={{
                  input: {
                    background: "rgb(53,62,89)",
                    borderRadius: 4,
                    border: "none",
                  },
                  label: {
                    color: "rgb(227,227,227)",
                    fontSize: "1.4rem",
                  },
                }}
              />
            </div>

            {form.errors.interests && (
              <Text size="sm" c="red" mt={5}>
                {form.errors.interests}
              </Text>
            )}
          </div>
        </div>

        <Group justify="flex-end" mt="xl" style={{ width: "100%" }}>
          <Button
            type="submit"
            style={{
              background:
                "linear-gradient(135deg, rgb(171, 220, 255) 10%, rgb(3, 150, 255) 100%)",
              color: "white",
              fontSize: 16,
              borderRadius: 4,
              width: "150px",
              height: "30px",
              border: "none",
            }}>
            Submit
          </Button>
        </Group>
      </form>
    </Box>
  );
};

export default AddUserForm;
