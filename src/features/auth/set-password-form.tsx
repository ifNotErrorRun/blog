import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/shared/components/ui/button';
import { setPasswordSchema } from '@/features/auth/schemas/auth';
import { z } from 'zod';

type FormValues = z.infer<typeof setPasswordSchema>;

export const SetPasswordForm = () => {
  const { register, handleSubmit, formState } = useForm<FormValues>({
    resolver: zodResolver(setPasswordSchema),
  });

  const onSubmit = async (data: FormValues) => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="password">새 비밀번호</label>
        <input
          id="password"
          type="password"
          {...register('password')}
          className="w-full p-2 border rounded"
        />
        {formState.errors.password && (
          <p className="text-red-500">{formState.errors.password.message}</p>
        )}
      </div>
      <Button type="submit" disabled={formState.isSubmitting}>
        {formState.isSubmitting ? '처리 중...' : '비밀번호 설정'}
      </Button>
    </form>
  );
};
