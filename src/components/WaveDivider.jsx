function WaveDivider() {
  return (
    <div className="w-full overflow-hidden">
      <svg viewBox="0 0 1200 100" className="w-full h-12 md:h-16">
        <path 
          d="M0,50 Q300,20 600,50 T1200,50 L1200,100 L0,100 Z" 
          fill="#f9fafb" 
        />
      </svg>
    </div>
  );
}

export default WaveDivider;