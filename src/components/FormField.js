import React from "react";
import { Text, TextInput, View } from "react-native";
import { styles } from "../styles/styleDangKy";

export default function FormField({
  field,
  label,
  handleChange,
  handleBlur,
  values,
  errors,
  touched,
  secureTextEntry,
  autoCapitalize,
}) {
  return (
    <View style={styles.formGroup}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleChange(field)}
        onBlur={handleBlur(field)}
        value={values[field]}
        secureTextEntry={secureTextEntry}
        autoCapitalize={autoCapitalize || "none"}
      />
      {errors[field] && touched[field] ? (
        <Text style={{ color: "red" }}>{errors[field]}</Text>
      ) : null}
    </View>
  );
}
