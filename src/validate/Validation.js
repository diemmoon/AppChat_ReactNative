import * as Yup from "yup";
export const SignupSchema = Yup.object().shape({
  // name: Yup.string()
  //   .min(3, "Tên phải từ 3 kí tự trở lên")
  //   .max(20, "Tên vượt quá kí tự cho phép")
  //   .required("Required"),
  // phone: Yup.string()
  //   .min(10, "Số điện thoại không hợp lệ")
  //   .max(10, "Số điện thoại không hợp lệ")
  //   .required("Required"),
  // email: Yup.string().email("Invalid email").required("Required"),
});
