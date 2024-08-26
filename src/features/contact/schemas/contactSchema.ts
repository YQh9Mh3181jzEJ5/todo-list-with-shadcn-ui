import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "名前を入力してください")
    .max(100, "名前は100文字以内で入力してください"),
  email: z
    .string()
    .trim()
    .email("有効なメールアドレスの形式を使ってください。")
    .max(254, "メールアドレスは254文字以内で入力してください。"),
  message: z
    .string()
    .trim()
    .min(1, "名前を入力してください")
    .min(10, "メッセージは10文字以上で入力してください。")
    .max(1000, "メッセージは1000文字以内で入力してください。"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
