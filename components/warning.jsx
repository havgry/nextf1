import React from 'react'

const Warning = ({
  text,
  title,
}) => (
  <div className="warning">  
    <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="exclamation-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="icon">
      <path fill="currentColor" d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z" />
    </svg>
    <span title={title}>
      {text}
    </span>
    <style jsx>{`
      .warning {
        background: #f0f0f0;
        padding: 4px 10px 4px 8px;
        display: inline-flex;
        align-items: center;
        font-size: 0.8rem;
        border-radius: 15px;
      }

      .icon {
        color: #e10400;
        width: 15px;
        height: 15px;
        display: inline-block;
        margin-right: 5px;
      }
    `}</style>
  </div>
)

export default Warning
