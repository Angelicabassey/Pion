// components/PasswordInput.tsx

interface PasswordInputProps {
    showPassword: boolean;
    togglePasswordVisibility: () => void;
  }
  
  const PasswordInput: React.FC<PasswordInputProps> = ({ showPassword, togglePasswordVisibility }) => {
    return (
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          className="px-4 py-2 border rounded-md w-full"
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 right-0 flex items-center px-3 bg-transparent border-none"
        >
          {showPassword ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-5 w-5 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.536 8.464a4 4 0 10-5.072 5.072M4 12a8 8 0 118-8 8 8 0 01-8 8z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-5 w-5 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 15c-1.5 1-3.5 1-5 0m5 0v3m0-3h5m-5 0l1-1.75M4 10l1.75 1"
              />
            </svg>
          )}
        </button>
      </div>
    );
  };
  
  export default PasswordInput;
  