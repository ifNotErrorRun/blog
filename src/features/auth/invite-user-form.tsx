import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/shared/components/ui/button';
import { inviteUserSchema } from '@/features/auth/schemas/auth';
import { z } from 'zod';

type FormValues = z.infer<typeof inviteUserSchema>;

export const InviteUserForm = () => {
  const { register, handleSubmit, formState } = useForm<FormValues>({
    resolver: zodResolver(inviteUserSchema),
  });

  const onSubmit = async (data: FormValues) => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="email">이메일</label>
        <input
          id="email"
          type="email"
          {...register('email')}
          className="w-full p-2 border rounded"
        />
        {formState.errors.email && (
          <p className="text-red-500">{formState.errors.email.message}</p>
        )}
      </div>
      <Button type="submit" disabled={formState.isSubmitting}>
        {formState.isSubmitting ? '처리 중...' : '초대 보내기'}
      </Button>
    </form>
  );
};
