import { useForm } from 'react-hook-form';
import { Input } from 'components/ui';
import { CVData } from 'types';

type Props = {
  initialData: CVData;
  onSubmit: (data: CVData) => void;
};

const CVForm = ({ initialData, onSubmit }: Props) => {
  const { register, handleSubmit } = useForm({ defaultValues: initialData });

  return (
    <form id="cv-edit-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-3 pt-6">
        <Input {...register('name')} />
        <Input {...register('title')} />
      </div>
    </form>
  );
};

export default CVForm;
