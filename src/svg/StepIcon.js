// '#2A2A2A' : '#AFB1BD'

export const Step1 = () => (
  <svg
    width='32'
    height='32'
    viewBox='0 0 32 32'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect width='32' height='32' rx='16' fill='black' />
    <path
      d='M19.784 18.6693V20.3333H12.824V18.6693H15.272V11.4053L13.336 12.5733L12.52 11.0693L15.864 9.05325H17.336V18.6693H19.784Z'
      fill='white'
    />
  </svg>
);

export const Step2 = ({ step }) => (
  <svg
    width='32'
    height='32'
    viewBox='0 0 32 32'
    fill={step === 2 ? 'black' : 'none'}
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect
      x='0.5'
      y='0.5'
      width='31'
      height='31'
      rx='15.5'
      stroke={step === 2 ? 'black' : '#AFB1BD'}
    />
    <path
      d='M19.752 19.6693V21.3333H12.168V19.8133L16.008 15.6853C16.456 15.1946 16.7813 14.7466 16.984 14.3413C17.1973 13.9253 17.304 13.5146 17.304 13.1093C17.304 12.5973 17.1547 12.2133 16.856 11.9573C16.568 11.6906 16.1413 11.5573 15.576 11.5573C14.5627 11.5573 13.544 11.9466 12.52 12.7253L11.832 11.2213C12.28 10.8266 12.8507 10.5119 13.544 10.2773C14.248 10.0319 14.952 9.90925 15.656 9.90925C16.7867 9.90925 17.6827 10.1866 18.344 10.7413C19.0053 11.2959 19.336 12.0426 19.336 12.9813C19.336 13.6319 19.1973 14.2453 18.92 14.8213C18.6427 15.3866 18.1733 16.0213 17.512 16.7253L14.744 19.6693H19.752Z'
      fill={step === 2 ? 'white' : '#AFB1BD'}
    />
  </svg>
);

export const Step3 = ({ step }) => (
  <svg
    width='32'
    height='32'
    viewBox='0 0 32 32'
    fill={step === 3 ? 'black' : 'none'}
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect
      x='0.5'
      y='0.5'
      width='31'
      height='31'
      rx='15.5'
      stroke={step === 3 ? 'black' : '#AFB1BD'}
    />
    <path
      d='M17.544 15.5413C18.2053 15.7119 18.712 16.0373 19.064 16.5173C19.4267 16.9866 19.608 17.5733 19.608 18.2773C19.608 19.2586 19.2453 20.0373 18.52 20.6133C17.8053 21.1786 16.8293 21.4613 15.592 21.4613C14.8347 21.4613 14.104 21.3439 13.4 21.1093C12.7067 20.8746 12.1307 20.5546 11.672 20.1493L12.36 18.6453C13.3413 19.4239 14.392 19.8133 15.512 19.8133C16.2267 19.8133 16.76 19.6746 17.112 19.3973C17.464 19.1093 17.64 18.6773 17.64 18.1013C17.64 17.5359 17.4587 17.1199 17.096 16.8533C16.744 16.5759 16.1947 16.4373 15.448 16.4373H13.96V14.8053H15.176C16.6373 14.8053 17.368 14.2559 17.368 13.1573C17.368 12.6453 17.208 12.2506 16.888 11.9733C16.5787 11.6959 16.136 11.5573 15.56 11.5573C15.0587 11.5573 14.5467 11.6586 14.024 11.8613C13.512 12.0533 13.0107 12.3413 12.52 12.7253L11.832 11.2213C12.28 10.8159 12.8507 10.4959 13.544 10.2613C14.248 10.0266 14.9627 9.90925 15.688 9.90925C16.7973 9.90925 17.6827 10.1813 18.344 10.7253C19.0053 11.2586 19.336 11.9839 19.336 12.9013C19.3253 13.5306 19.16 14.0799 18.84 14.5493C18.5307 15.0079 18.0987 15.3386 17.544 15.5413Z'
      fill={step === 3 ? 'white' : '#AFB1BD'}
    />
  </svg>
);

export const StepDone = () => (
  <svg
    width='32'
    height='32'
    viewBox='0 0 32 32'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='16' cy='16' r='16' fill='#2A2A2A' />
    <path
      d='M13.3333 21.5599L7.77329 15.9999L5.87996 17.8799L13.3333 25.3333L27.3333 11.3333L25.4533 9.45325L13.3333 21.5599Z'
      fill='white'
    />
  </svg>
);