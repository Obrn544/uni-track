interface Props {
  label: string;
  type: string;
  placeholder: string;
}

export const Field = ({ label, type, placeholder }: Props) => {
  return (
    <div className='flex flex-col space-y-2'>
      <label htmlFor={label} className='text-sm font-medium text-gray-700'>
        {label}
      </label>
      <input
        id={label}
        type={type}
        placeholder={placeholder}
        className='h-12 rounded-xl border-2 border-gray-300 bg-white/70 p-4 text-base backdrop-blur-sm transition-all duration-200 focus:border-purple-500 focus:ring-2 focus:ring-blue-50 focus:outline-none'
        required
      />
    </div>
  );
};
