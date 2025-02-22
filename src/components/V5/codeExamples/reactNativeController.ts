export default `import React from "react";
import { Text, View, TextInput, Button, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";

export default function App() {
  const { control, handleSubmit, errors } = useForm({
    defaultValues: {
      firstName: '',
      lastName: ''
    }
  });
  const onSubmit = data => Alert.alert(
    "Form Data",
    JSON.stringify(data),
  );

  return (
    <View>
      <Text>First name</Text>
      <Controller
        as={TextInput}
        control={control}
        name="firstName"
        onChange={args => args[0].nativeEvent.text}
        rules={{ required: true }}
      />
      {errors.firstName && <Text>This is required.</Text>}

      <Text>Last name</Text>
      <Controller
        as={TextInput}
        control={control}
        name="lastName"
        onChange={args => args[0].nativeEvent.text}
      />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}
`
