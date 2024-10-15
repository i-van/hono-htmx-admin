import type { Child, PropsWithChildren } from 'hono/jsx';

export type InputFieldProps = {
  icon?: Child;
  type?: string;
  name: string;
  placeholder?: string;
  value: string;
  error?: string;
};

export const InputField = ({ icon, type = 'text', name, placeholder = '', value, error }: PropsWithChildren<InputFieldProps>) => (
  <div className="form-control">
    <label className={`input input-bordered${error ? ' input-error' : ''} flex items-center gap-2`}>
      {icon}
      <input className="grow" type={type} name={name} placeholder={placeholder} value={value} />
    </label>
    {error && (
      <div className="label">
        <span className="label-text-alt">{error}</span>
      </div>
    )}
  </div>
);
