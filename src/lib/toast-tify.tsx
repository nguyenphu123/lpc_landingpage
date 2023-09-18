"use client";

export default function ToastGenerator({ message }) {
  return (
    <div className="fixed top-10 right-10 z-50">
      <div className="p-4 bg-white border border-blue-500 shadow-lg rounded-lg">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center mr-4">
            <span className="text-xl font-extrabold">i</span>
          </div>

          <p className="text-sm font-medium">{message}</p>
        </div>
      </div>
    </div>
  );
}
