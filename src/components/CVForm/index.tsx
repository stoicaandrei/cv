import { UseFormReturn } from 'react-hook-form';
import { Input, Label } from 'components/ui';
import { CVData } from 'types';

type Props = {
  form: UseFormReturn<CVData>;
  onSubmit: (data: CVData) => void;
};

const CVForm = ({ onSubmit, form }: Props) => {
  const { register, handleSubmit } = form;

  return (
    <form id="cv-edit-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col pt-6">
        <Label htmlFor="name" name="Your Name" />
        <Input {...register('name')} className="mb-3" />
        <Label htmlFor="title" name="Position Title" />
        <Input {...register('title')} className="mb-3" />
      </div>
    </form>
  );
};

export default CVForm;
