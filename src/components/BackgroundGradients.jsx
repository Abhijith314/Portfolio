const BackgroundGradients = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden">
    <div className="absolute top-0 -left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob"></div>
    <div className="absolute top-1/2 -right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-2000"></div>
    <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-teal-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-blob animation-delay-4000"></div>
  </div>
);

export default BackgroundGradients;