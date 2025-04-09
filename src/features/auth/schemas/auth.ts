import { z } from "zod";

export const inviteUserSchema = z.object({
  email: z.string().email("유효한 이메일을 입력하세요"),
});

export const setPasswordSchema = z.object({
  password: z.string()
    .min(8, "비밀번호는 8자 이상이어야 합니다")
    .regex(/[A-Z]/, "대문자를 포함해야 합니다")
    .regex(/[0-9]/, "숫자를 포함해야 합니다"),
});
