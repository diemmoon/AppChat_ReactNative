import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import FormField from "../components/FormField";
import { styles } from "../styles/styleDangKy";
import { SignupSchema } from "../validate/Validation";

export default function DangKy({ navigation }) {
  function isFormValid(isValid, touched) {
    return isValid && Object.keys(touched).length !== 0;
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Register</Text>
      </View>
      <KeyboardAwareScrollView
        style={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        <Formik
          initialValues={{ name: "", phone: "", email: "" }}
          validationSchema={SignupSchema}
          onSubmit={(values) => console.log(values)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            isValid,
          }) => (
            <>
              <FormField
                field="name"
                label="Name: "
                handleChange={handleChange}
                handleBlur={handleBlur}
                values={values}
                touched={touched}
                errors={errors}
                autoCapitalize="words"
              />
              <FormField
                field="phone"
                label="Phone: "
                handleChange={handleChange}
                handleBlur={handleBlur}
                values={values}
                touched={touched}
                errors={errors}
              />

              <FormField
                field="email"
                label="Email: "
                handleChange={handleChange}
                handleBlur={handleBlur}
                values={values}
                touched={touched}
                errors={errors}
              />
              <FormField
                field="password"
                label="Password: "
                handleChange={handleChange}
                handleBlur={handleBlur}
                values={values}
                touched={touched}
                errors={errors}
                secureTextEntry={true}
              />
              <FormField
                field="rePassword"
                label="Confirm Password: "
                handleChange={handleChange}
                handleBlur={handleBlur}
                values={values}
                touched={touched}
                errors={errors}
                secureTextEntry={true}
              />

              <TouchableOpacity
                style={styles.button}
                disabled={!isFormValid(isValid, touched)}
                onPress={handleSubmit}
                onPress={() => navigation.navigate("DangNhap")}
              >
                <View
                  style={[
                    styles.button,
                    {
                      opacity: isFormValid(isValid, touched) ? 1 : 0.2,
                    },
                  ]}
                >
                  <Text style={styles.textButton}>SUBMIT</Text>
                </View>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </KeyboardAwareScrollView>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}
