const LoadingItem = () => {
  return (
    <div className="loader loader--style7" title="6">
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        width="24px" height="30px" viewBox="0 0 24 30" xmlSpace="preserve">
        <rect x="1" y="10" width="4" rx="2" ry="2" height="10" fill="#FF6700" opacity="0.2">
          <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0s" dur="0.85s" repeatCount="indefinite" />
          <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0s" dur="0.85s" repeatCount="indefinite" />
          <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0s" dur="0.85s" repeatCount="indefinite" />
        </rect>
        <rect x="9" y="10" width="4" rx="2" ry="2" height="10" fill="#FF6700" opacity="0.2">
          <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.2s" dur="0.85s" repeatCount="indefinite" />
          <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.2s" dur="0.85s" repeatCount="indefinite" />
          <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.2s" dur="0.85s" repeatCount="indefinite" />
        </rect>
        <rect x="17" y="10" width="4" rx="2" ry="2" height="10" fill="#FF6700" opacity="0.2">
          <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.4s" dur="0.85s" repeatCount="indefinite" />
          <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.4s" dur="0.85s" repeatCount="indefinite" />
          <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.4s" dur="0.85s" repeatCount="indefinite" />
        </rect>
      </svg>
    </div>
  )
}

export default LoadingItem