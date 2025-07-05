interface Props {
  label: string;
  name: string;
  type: string;
  placeholder: string;
}

export const LoginField = ({ label, name, type, placeholder }: Props) => {
  return (
    <div className='flex flex-col space-y-2'>
      <label htmlFor={name} className='font-medium'>
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className='h-12 rounded-xl border-2 border-gray-300 bg-white/70 p-4 backdrop-blur-sm transition-all duration-200 focus:border-purple-500 focus:ring-2 focus:ring-blue-50 focus:outline-none'
        required
      />
    </div>
  );
};
