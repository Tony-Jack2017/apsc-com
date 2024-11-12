const LoadingItem3 = () => {
  return (
    <div className="loader loader--style7" title="6">
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        width="30px" height="20px" viewBox="0 0 30 20" xmlSpace="preserve">
        <circle cx="4" cy="5" r="4" fill="#FF6700" opacity="1">
          <animate attributeName="r" attributeType="XML" values="4; 2; 4" begin="0s" dur="0.8s" repeatCount="indefinite" />
        </circle>
        <circle cx="15" cy="5" r="4" fill="#FF6700" opacity="1">
          <animate attributeName="r" attributeType="XML" values="4; 2; 4" begin="0.4s" dur="0.8s" repeatCount="indefinite" />
        </circle>
        <circle cx="26" cy="5" r="4" fill="#FF6700" opacity="1">
          <animate attributeName="r" attributeType="XML" values="4; 2; 4" begin="0.8s" dur="0.8s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  )
}

export default LoadingItem3