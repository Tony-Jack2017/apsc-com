const LoadingItem2 = () => {
  return (
    <div className="loader loader--style7" title="6">
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        width="24px" height="30px" viewBox="0 0 24 30" xmlSpace="preserve">
        <circle cx="5" cy="5" r="2" fill="#FF6700" opacity="0.2">
          <animate attributeName="opacity" attributeType="XML" values="0.5; 1; .5" begin="0s" dur="0.85s" repeatCount="indefinite" />
          <animate attributeName="cy" attributeType="XML" values="10; 5; 10" begin="0s" dur="0.85s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  )
}

export default LoadingItem2